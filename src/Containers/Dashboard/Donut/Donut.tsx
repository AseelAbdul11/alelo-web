import React, { FC, useEffect, useState } from "react";
import "./donut.css";
import { AgChartsReact } from "ag-charts-react";
import { Select, Tooltip } from "antd";
import { LegendContainer } from "./Legend";
import tooltip from "../../../Assets/tooltip.svg";
interface MyComponentProps {
  totalUsersData: any;
  totalUsers: any;
  label: string;
  innerLabel: string;
}
const Donut: FC<MyComponentProps> = ({
  totalUsersData,
  totalUsers,
  innerLabel,
  label,
}): JSX.Element => {
  const [data, setData] = useState(null);

  const [chartOptions, setChartOptions]: any = useState({
    // Data: Data to be displayed in the chart
    data: data,
    animation: {
      duration: 500,
    },
    legend: {
      enabled: false, // This will hide the legend
    },
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.63,
        cornerRadius: 4,
        fills: ["#366e68", "#64d1c6", "#1bb3a1"],
        calloutLabel: {
          enabled: false,
        },

        innerLabels: [
          {
            text: innerLabel,
            fontSize: 12,
            fontFamily: "Roboto",
          },
          {
            text: totalUsers,
            margin: 4,
            fontSize: 15,
            fontWeight: "bold",
            fontFamily: "Roboto",
          },
        ],
      },
    ],
  });
  const [options, setOptions]: any = useState([]);
  useEffect(() => {
    if (totalUsersData) {
      let locations = totalUsersData.map((user: any) => {
        return { value: user.location, label: user.location };
      });
      setOptions(locations);

      setChartOptions({ ...chartOptions, data: totalUsersData[0].data });
    }
  }, []);

  const handleChange = (e: string) => {
    let totalData = totalUsersData.find((user: any) => user.location == e);
    setChartOptions({ ...chartOptions, data: totalData.data });
  };

  return (
    <>
      <div className="donut-container">
        <div className="label-section">
          <div className="label">
            {label}
            <span>
              <Tooltip title="prompt text">
                <span>
                  <img className="donut-tooltip" src={tooltip} width="14px" />
                </span>
              </Tooltip>
            </span>
          </div>
          <Select
            defaultValue="Tamilnadu"
            onChange={handleChange}
            className="donut-dropdown"
            options={options}
          />
        </div>
        <div style={{}} className="donut-block">
          <AgChartsReact options={chartOptions} />
        </div>
        <div>
          <LegendContainer />
        </div>
      </div>
    </>
  );
};

export default Donut;
