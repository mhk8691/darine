"use client";
import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  noPadding?: boolean;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, noPadding = false, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3, px: noPadding ? 0 : 3 }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
interface Props {
  tabList: {
    title: string;
    count?: number;
  }[];
  children: React.ReactNode[];
  style?: SxProps;
  lineHeight?: string;
  tabsStyle?: SxProps;
  noPadding?: boolean;
  setCustomValue?: React.Dispatch<React.SetStateAction<number>>;
}
export default function CustomTabs({
  tabList,
  children,
  style,
  lineHeight,
  tabsStyle,
  noPadding = false,
  setCustomValue,
}: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (setCustomValue) {
      setCustomValue(newValue);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          pl: {
            xs: 1,
            sm: 3,
            md: 0,
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "&.MuiTabs-root .MuiTabs-indicator": {
              height: lineHeight || "8px",
              borderRadius: "16px",
            },
            width: "100%",
            px: 4,

            ...tabsStyle,
          }}
        >
          {tabList.map((item, index) => (
            <Tab
              disableRipple
              sx={{
                "&.Mui-selected": {
                  color: "text.title",
                },
                fontSize: {
                  xs: 16,
                  sm: "22px",
                },
                color: "#C2C2BA",
                width: "50%",
                mb: 2,
                ...style,
              }}
              label={item.title}
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </Tabs>
      </Box>
      {children.map((item, index) => (
        <CustomTabPanel
          value={value}
          index={index}
          key={index}
          noPadding={noPadding}
        >
          {item}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
