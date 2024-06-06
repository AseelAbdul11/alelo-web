import { Table } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface myComponentProps {
  data: any;
  columns: any;
}
export const Tables: FC<myComponentProps> = ({ data, columns }) => {
  const [loading, setLoading]: any = useState(false);
  const [tableParams, setTableParams]: any = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const getUsers = useSelector((state: any) => state.usermanage.usersData);
  useEffect(() => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: getUsers.length,
      },
    });
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      // setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      className="mt-3"
    //   style={{ tableLayout: "fixed", width: "100%" }}
      rowKey={(record: any) => record.title}
      dataSource={data}
      pagination={{
        ...tableParams.pagination,
        showTotal: (total, range) =>
          `Showing ${range[0]}-${range[1]} of ${total}`,
      }}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
