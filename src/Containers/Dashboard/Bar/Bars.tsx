import { AgChartsReact } from "ag-charts-react";
import { Select } from "antd";
import React, { FC, useEffect, useState } from "react";
import restart from "../../../Assets/bx_reset.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LegendContainer } from "../Donut/Legend";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface MyComponentProps {
  totalUsersData: any;
  totalUsers: any;
  label: string;
  innerLabel: string;
}
export const Bars: FC<MyComponentProps> = ({
  totalUsersData,
  label,
  innerLabel,
}) => {
  const [data, setData]: any = useState(null);
  const [labels, setLabels] = useState();
  const [options, setOptions]: any = useState([]);
  const baroptions: any = {
    indexAxis: "y" as const,
    scaleOverride: true,
    scales: {
      x: {
        type: "linear",

        barPercentage: 0.4,

        font: {
          family: "Roboto",
        },
        ticks: {
          stepSize: 9500,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
      },
    },

    // responsive: true,
    maintainAspectRatio: false, // Set to true to maintain aspect ratio
    // aspectRatio: 5,
    plugins: {
      legend: false,
      title: {
        display: false,
      },
    },
  };
  const datas: any = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#366e68", "#64d1c6", "#1bb3a1"],
        borderRadius: 7,
        barThickness: 25,
      },
    ],
  };
  useEffect(() => {
    if (totalUsersData) {
      let locations = totalUsersData.map((user: any) => {
        return { value: user.location, label: user.location };
      });
      setOptions(locations);
      setLabels(totalUsersData[0].data.map((user: any) => user.asset));
      setData(totalUsersData[0].data.map((user: any) => user.amount));
    }
  }, []);

  const handleChange = (e: string) => {
    let totalData = totalUsersData.find((user: any) => user.location == e);
    setData(totalData.data.map((user: any) => user.amount));
  };
  const date = new Date();
  return (
    <>
      <div style={{ width: "100%", flexGrow: 1 }} className="donut-container">
        <div className="label-section">
          <div className="label">{label}</div>
          <div
            style={{ display: "flex", gap: "10px" }}
            className="dropdown-section"
          >
            <img src={restart} />
            <Select
              defaultValue="Tamilnadu"
              onChange={handleChange}
              className="select-dropdown"
              options={options}
            />
            <Select
              defaultValue={date.toLocaleString("default", { month: "long" })}
              // onChange={handleChange}
              className="select-dropdown"
              options={[
                { name: "January", value: "January" },
                { name: "February", value: "February" },
                { name: "March", value: "March" },
                { name: "April", value: "April" },
                { name: "May", value: "May" },
                { name: "June", value: "June" },
                { name: "July", value: "July" },
                { name: "August", value: "August" },
                { name: "September", value: "September" },
                { name: "October", value: "October" },
                { name: "November", value: "November" },
                { name: "December", value: "December" },
              ]}
            />
            <Select
              defaultValue={date.getFullYear()}
              // onChange={handleChange}
              className="select-dropdown"
              options={[
                { name: "2000", value: "2000" },
                { name: "2001", value: "2001" },
                { name: "2002", value: "2002" },
                { name: "2003", value: "2003" },
                { name: "2004", value: "2004" },
                { name: "2005", value: "2005" },
                { name: "2006", value: "2006" },
                { name: "2007", value: "2007" },
                { name: "2008", value: "2008" },
                { name: "2009", value: "2009" },
                { name: "2010", value: "2010" },
                { name: "2011", value: "2011" },
                { name: "2012", value: "2012" },
                { name: "2013", value: "2013" },
                { name: "2014", value: "2014" },
                { name: "2015", value: "2015" },
                { name: "2016", value: "2016" },
                { name: "2017", value: "2017" },
                { name: "2018", value: "2018" },
                { name: "2019", value: "2019" },
                { name: "2020", value: "2020" },
                { name: "2021", value: "2021" },
                { name: "2022", value: "2022" },
                { name: "2023", value: "2023" },
                { name: "2024", value: "2024" },
              ]}
            />
          </div>
        </div>
        <div className="bar-block">
          <Bar options={baroptions} data={datas} />
            <div className="bar-legend-container">
              <LegendContainer />
          </div>
        </div>
      </div>
    </>
  );
};
