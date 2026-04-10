import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleItemsType } from "@/app/core/Types";
import { Box, SxProps } from "@mui/material";

interface Props {
  items: ToggleItemsType[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  style?: SxProps;
}

export default function FilterToggleButton({
  items,
  select,
  setSelect,
  style,
}: Props) {
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setSelect(newAlignment);
    console.log(newAlignment);
  };
  const activeIndex = items.findIndex((i) => i.value === select);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "background.paper",
        borderRadius: "10px",
        px: "6px",
        py: 0.5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          height: "calc(100% - 8px)",
          width: `calc(${100 / items.length}% - 4px)`,
          backgroundColor: "#2a2a2a",
          borderRadius: "10px",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      />

      <ToggleButtonGroup
        value={select}
        exclusive
        onChange={handleChange}
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <ToggleButton
            key={item.value}
            value={item.value}
            disableRipple
            sx={{
              width: "100%",
              border: "none",
              borderRadius: "10px !important",
              color: "#ADADA9",
              px: 3,
              py: 0.8,
              fontSize: "16px",
              transition: "all .2s ease-in",
              backgroundColor: "background.paper",
              "&.Mui-selected": {
                color: "text.primary",
                backgroundColor: "background.default",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "background.default",
              },
              "&:hover": {
                backgroundColor: "transparent",
              },
              ...style,
            }}
          >
            {item.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
