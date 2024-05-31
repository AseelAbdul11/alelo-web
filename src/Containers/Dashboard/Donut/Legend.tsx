import React, { FC } from "react";

export const LegendContainer: FC = () => {
  let users = [
    {
      asset: "Sellers",
      color: "#366e68",
    },
    {
      asset: "Buyers",
      color: "#64d1c6",
    },
    {
      asset: "Agents",
      color: "#1bb3a1",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
      }}
    >
      {users.map((user: any) => {
        return (
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "8px" }}
          >
            <div
              style={{
                width: "20px",
                height: "14px",
                backgroundColor: user.color,
                borderRadius: "2px",
              }}
            ></div>
            <div style={{ fontSize: "12px" }}>{user.asset}</div>
          </div>
        );
      })}
    </div>
  );
};
