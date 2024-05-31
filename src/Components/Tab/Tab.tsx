import React, { useState } from "react";
import "../../Styles/Tab.css";
import { Box, Tab, Tabs } from "@mui/material";

interface Props {
  TabIndex: any;
  handleTabs: Function;
  // ContentHeader: any;
}

const TabComponent: React.FC<Props> = ({ TabIndex, handleTabs }) => {
  const [value, setValue] = React.useState(0);

  const TabsData = [
    "Vegetables",
    "Fruits",
    "Flowers",
    "Juices",
    "Foods",
    "Grocery",
    "Ice Cream",
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    // <div className="Tab-Container">
    //   {Tabs.map((TabItem, index) => {
    //     return (
    //       <p
    //         className="TabItem"
    //         style={{ backgroundColor: TabIndex === index ? "#fff" : "" }}
    //         onClick={() => handleTabs(index)}
    //       >
    //         {TabItem}
    //       </p>
    //     );
    //   })}
    // </div>

    <Tabs
      // className="Tab-Container"
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      centered
      // sx={{ width: 1 / 4 }}
    >
      {TabsData.map((TabItem: any, index: number) => {
        return (
          <Tab
            sx={{
              // width: 145,
              backgroundColor: TabIndex === index ? "#fff" : "",
            }}
            // className="TabItem"
            onClick={() => handleTabs(index)}
            label={TabItem}
          />
        );
      })}
    </Tabs>
  );
};

export default TabComponent;
