import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { userManagementTable } from "../../Utils/UserManagement/userManagementUtils";
import { useSelector } from "react-redux";
import { Tables } from "../../Components/Table/Table";
import { UserKpi } from "./UserKpi/UserKpi";

const getRandomuserParams = (params: any) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const UserManagement = () => {
  const data: any = useSelector((state: any) => state.usermanage.usersData);
  const [displayData, setDisplayData]: any = useState([]);
  const [columns, setColumns]: any = useState();
  const [searchText, setSearchText]: any = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setDisplayData(data);
    let column: any = userManagementTable(data);
    setColumns(column);
  }, []);

  useEffect(() => {
    if (count >= 1) {
      if (searchText) {
        const filterData = data.filter((user: any) => {
          let name = user.name.toLowerCase();
          if (name.includes(searchText)) {
            return user;
          }
        });
        setDisplayData(filterData);
      } else {
        setDisplayData(data);
      }
    }
  }, [searchText]);

  return (
    <>
      <UserKpi />
      <Tables data={displayData} columns={columns} />
    </>
  );
};

export default UserManagement;
