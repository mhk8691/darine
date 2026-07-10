"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SxProps } from "@mui/material";

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
        <Box sx={{ py: 3, px: noPadding ? 0 : 3 }}>
          {children}
        </Box>
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
  tabList?: {
    title: string;
    count?: number;
  }[];
  children: React.ReactNode | React.ReactNode[];
  style?: SxProps;
  lineHeight?: string;
  tabsStyle?: SxProps;
  noPadding?: boolean;
  setCustomValue?: React.Dispatch<React.SetStateAction<number>>;
  tabStyle?: SxProps;
  customValue?: number;
}

export default function CustomTabs({
  tabList,
  children,
  style,
  lineHeight,
  tabsStyle,
  noPadding = false,
  setCustomValue,
  customValue,
}: Props) {
  const [value, setValue] = React.useState(0);

  // هر وقت مقدار از بیرون (customValue) تغییر کرد، state داخلی هم باید سینک بشه
  // تا CustomTabPanel هم بر اساس همون مقدار درست رندر بشه
  React.useEffect(() => {
    if (customValue !== undefined && customValue !== value) {
      setValue(customValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customValue]);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);

    if (setCustomValue) {
      setCustomValue(newValue);
    }
  };

  // مقدار واقعی و فعلی تب - چه از بیرون کنترل بشه چه از داخل
  const activeValue = customValue !== undefined ? customValue : value;

  const panels = React.Children.toArray(children);

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
          value={activeValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              height: lineHeight || "8px",
              borderRadius: "16px",
            },
            width: "100%",
            px: 4,
            ...tabsStyle,
          }}
        >
          {tabList?.map((item, index) => (
            <Tab
              key={index}
              disableRipple
              label={item.title}
              {...a11yProps(index)}
              sx={{
                "&.Mui-selected": {
                  color: "text.title",
                },
                fontSize: {
                  xs: 16,
                  sm: 22,
                },
                color: "text.muted",
                width: "50%",
                mb: 2,
                ...style,
              }}
            />
          ))}
        </Tabs>
      </Box>

      {panels.map((item, index) => (
        <CustomTabPanel
          key={index}
          value={activeValue}
          index={index}
          noPadding={noPadding}
        >
          {item}
        </CustomTabPanel>
      ))}
    </Box>
  );
}