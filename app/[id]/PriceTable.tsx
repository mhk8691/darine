import { Box, Chip, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import priceFormater from "../core/PriceFormater";
import { TableGoldDataType } from "../core/Types";
interface Props {
  title: string;
  data: TableGoldDataType[];
}
export default function PriceTables({ title, data }: Props) {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  return (
    <Stack border={1} borderColor={"background.border"} borderRadius={2}>
      <Stack
        bgcolor={"background.paper"}
        py={2}
        px={4}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <Typography
          variant="body1"
          fontSize={16}
          sx={{ color: "text.subtitle" }}
        >
          {title}
        </Typography>
      </Stack>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Stack
            py={2}
            pl={4}
            pr={2}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontSize={16}>
              {item.typeGold}
            </Typography>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <Typography variant="body1" fontSize={16}>
                {priceFormater(item.currentRate)}
              </Typography>
              <Chip
                variant="filled"
                label={
                  <Stack direction={"row"} gap={0.5}>
                    <Box component={"span"}>{item.dayChange} % </Box>

                    {item.dayChange > 0 ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_14663_66411"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <path d="M0 0H16V16H0V0Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_14663_66411)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8043 3.52918C15.9293 3.65419 15.9995 3.82373 15.9995 4.00051C15.9995 4.17728 15.9293 4.34682 15.8043 4.47184L9.47095 10.8052C9.34594 10.9302 9.1764 11.0004 8.99962 11.0004C8.82284 11.0004 8.65331 10.9302 8.52829 10.8052L5.66629 7.94318L1.13762 12.4718C1.01189 12.5933 0.843484 12.6605 0.668686 12.659C0.493888 12.6574 0.32668 12.5873 0.203075 12.4637C0.0794693 12.3401 0.00935665 12.1729 0.0078377 11.9981C0.00631876 11.8233 0.073515 11.6549 0.194954 11.5292L5.19495 6.52918C5.31997 6.40419 5.48951 6.33398 5.66629 6.33398C5.84306 6.33398 6.0126 6.40419 6.13762 6.52918L8.99962 9.39118L14.8616 3.52918C14.9866 3.40419 15.1562 3.33398 15.333 3.33398C15.5097 3.33398 15.6793 3.40419 15.8043 3.52918Z"
                            fill="#43AB79"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.6641 4.00065C10.6641 3.82384 10.7343 3.65427 10.8593 3.52925C10.9843 3.40422 11.1539 3.33398 11.3307 3.33398H15.3307C15.5075 3.33398 15.6771 3.40422 15.8021 3.52925C15.9272 3.65427 15.9974 3.82384 15.9974 4.00065V8.00065C15.9974 8.17746 15.9272 8.34703 15.8021 8.47206C15.6771 8.59708 15.5075 8.66732 15.3307 8.66732C15.1539 8.66732 14.9843 8.59708 14.8593 8.47206C14.7343 8.34703 14.6641 8.17746 14.6641 8.00065V4.66732H11.3307C11.1539 4.66732 10.9843 4.59708 10.8593 4.47206C10.7343 4.34703 10.6641 4.17746 10.6641 4.00065Z"
                            fill="#43AB79"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_14663_66380"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <path d="M0 16H16V0H0V16Z" fill="white"></path>
                        </mask>
                        <g mask="url(#mask0_14663_66380)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8043 12.4708C15.9293 12.3458 15.9995 12.1763 15.9995 11.9995C15.9995 11.8227 15.9293 11.6532 15.8043 11.5282L9.47095 5.19482C9.34594 5.06984 9.1764 4.99963 8.99962 4.99963C8.82284 4.99963 8.65331 5.06984 8.52829 5.19482L5.66629 8.05682L1.13762 3.52816C1.01189 3.40672 0.843484 3.33952 0.668686 3.34104C0.493888 3.34256 0.32668 3.41267 0.203075 3.53628C0.0794693 3.65988 0.00935665 3.82709 0.0078377 4.00189C0.00631876 4.17669 0.073515 4.34509 0.194954 4.47083L5.19495 9.47082C5.31997 9.59581 5.48951 9.66602 5.66629 9.66602C5.84306 9.66602 6.0126 9.59581 6.13762 9.47082L8.99962 6.60882L14.8616 12.4708C14.9866 12.5958 15.1562 12.666 15.333 12.666C15.5097 12.666 15.6793 12.5958 15.8043 12.4708Z"
                            fill="#DA5959"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.6641 11.9993C10.6641 12.1762 10.7343 12.3457 10.8593 12.4708C10.9843 12.5958 11.1539 12.666 11.3307 12.666H15.3307C15.5075 12.666 15.6771 12.5958 15.8021 12.4708C15.9272 12.3457 15.9974 12.1762 15.9974 11.9993V7.99935C15.9974 7.82254 15.9272 7.65297 15.8021 7.52794C15.6771 7.40292 15.5075 7.33268 15.3307 7.33268C15.1539 7.33268 14.9843 7.40292 14.8593 7.52794C14.7343 7.65297 14.6641 7.82254 14.6641 7.99935V11.3327H11.3307C11.1539 11.3327 10.9843 11.4029 10.8593 11.5279C10.7343 11.653 10.6641 11.8225 10.6641 11.9993Z"
                            fill="#DA5959"
                          ></path>
                        </g>
                      </svg>
                    )}
                  </Stack>
                }
                sx={{
                  direction: "rtl",
                  bgcolor:
                    item.dayChange < 0
                      ? isDarkMode
                        ? "#691818"
                        : "#8b4646"
                      : isDarkMode
                        ? "#1B4430"
                        : "#ECF7F2",
                  color: item.dayChange < 0 ? "#CC5151" : "#43AB64",
                  width: "85px",
                }}
              />
            </Stack>
          </Stack>
          {index !== data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Stack>
  );
}
