import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  tabList: string[];
  // tabPanelList: React.ReactNode[];
  children: React.ReactNode[];
}
export default function CustomTabs({ tabList, children }: Props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "&.MuiTabs-root .MuiTabs-indicator": {
              height: "8px",
              borderRadius: "16px",
            },
            px:4
          }}
        >
          {tabList.map((item, index) => (
            <Tab
              disableRipple
              sx={{
                "&.Mui-selected": {
                  color: "text.title",
                },
                fontSize: "22px",
                color: "#C2C2BA",
                width: "50%",
                mb: 2,
              }}
              label={item}
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </Tabs>
      </Box>
      {children.map((item, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {item}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
