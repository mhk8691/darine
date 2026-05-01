"use client";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { certificate, installment } from "./Footer";

export default function LaptopCertificate() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isLaptop && (
        <Grid
          size={12}
          container
          display={"flex"}
          justifyContent={"center"}
          mt={5}
          spacing={2}
        >
          {installment.map((item, index) => (
            <React.Fragment key={index}>
              <Grid
                size={6}
                display={"flex"}
                justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
              >
                <Stack
                  border={1}
                  height={96}
                  width={112}
                  borderRadius={2.5}
                  borderColor={"background.paper"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    alt=""
                    src={item}
                    width={100}
                    height={100}
                    style={{
                      objectFit: "contain",
                      width: "70%",
                      height: "55%",
                    }}
                  />
                </Stack>
              </Grid>
            </React.Fragment>
          ))}
          {certificate.map((item, index) => (
            <React.Fragment key={index}>
              <Grid
                size={6}
                key={index}
                display={"flex"}
                justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
              >
                <Stack
                  border={1}
                  height={96}
                  width={112}
                  borderRadius={2.5}
                  borderColor={"background.paper"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    alt=""
                    src={item}
                    width={100}
                    height={100}
                    style={{
                      objectFit: "contain",
                      width: "70%",
                      height: "55%",
                    }}
                  />
                </Stack>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      )}
    </>
  );
}
