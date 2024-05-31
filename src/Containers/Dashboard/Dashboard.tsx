import React, { useContext, useEffect } from "react";
import InputField from "../../Components/InputField/InputField";
import Donut from "./Donut/Donut";
import { Bars } from "./Bar/Bars";
import { useDispatch } from "react-redux";
import { clearSearch } from "../../Slices/CategorySlice";
import "../../Containers/Dashboard/Donut/donut.css";

interface MyContextType {
  navBarHeader: string;
}
const Dashboard = () => {
  const dispatch = useDispatch();

  const totalUsersData = [
    {
      location: "Tamilnadu",
      data: [
        { asset: "Sellers", amount: 100000 },
        { asset: "Buyers", amount: 80000 },
        { asset: "Agents", amount: 70000 },
      ],
    },
    {
      location: "Andhra",
      data: [
        { asset: "Sellers", amount: 60000 },
        { asset: "Buyers", amount: 50000 },
        { asset: "Agents", amount: 4000 },
      ],
    },
    {
      location: "Kerala",
      data: [
        { asset: "Sellers", amount: 30000 },
        { asset: "Buyers", amount: 20000 },
        { asset: "Agents", amount: 7000 },
      ],
    },
  ];

  const totalChurnData = [
    {
      location: "Tamilnadu",
      data: [
        { asset: "Sellers", amount: 60000 },
        { asset: "Buyers", amount: 40000 },
        { asset: "Agents", amount: 7000 },
      ],
    },
    {
      location: "Andhra",
      data: [
        { asset: "Sellers", amount: 60000 },
        { asset: "Buyers", amount: 30000 },
        { asset: "Agents", amount: 5000 },
      ],
    },
    {
      location: "Kerala",

      data: [
        { asset: "Sellers", amount: 90000 },
        { asset: "Buyers", amount: 20000 },
        { asset: "Agents", amount: 6000 },
      ],
    },
  ];
  const totalUsers = "45500";
  const userlabel = "TOTAL USERS";
  const userinnerLabel = "TOTAL USERS";
  const churnlabel = "CHURN RATE";
  const churninnerLabel = "TOTAL BUYERS";
  useEffect(() => {
    dispatch(clearSearch());
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.6fr 2fr",
        marginLeft: "20px",
      }}
    >
      <Donut
        totalUsersData={totalUsersData}
        label={userlabel}
        innerLabel={userinnerLabel}
        totalUsers={totalUsers}
      />
      <div className="bar-container">
        <Bars
          totalUsersData={totalUsersData}
          label={userlabel}
          innerLabel={churninnerLabel}
          totalUsers={totalUsers}
        />
      </div>

      <Donut
        totalUsersData={totalChurnData}
        label={churnlabel}
        innerLabel={churninnerLabel}
        totalUsers={totalUsers}
      />
      <div className="bar-container">
        <Bars
          totalUsersData={totalChurnData}
          label={churnlabel}
          innerLabel={churninnerLabel}
          totalUsers={totalUsers}
        />
      </div>
    </div>
  );
};

export default Dashboard;
