import { Divider, Grid, Stack, SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { CSSProperties } from "react";
import Card from "../Container/Container";
import { ActionButtonType } from "@/app/core/Types";
import ActionButton from "../../ActionButton/ActionButton";
interface Props {
  title: string;
  items: ActionButtonType[];
  image: string;
  style?: CSSProperties;
  cardStyle?: SxProps;
}
export default function InfoContainer({
  title,
  items,
  image,
  cardStyle,
}: Props) {
  return (
      

      <Card
        style={{
          px: {
            xs: 0,
            sm: 4,
          },
          borderColor: {
            xs: "background.default",
            sm: "background.paper",
          },
          ...cardStyle,
        }}
      >
        <Grid
          container
          alignItems={"center"}
          spacing={{ xs: 3, sm: 1 }}
        
        >
          <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 2, sm: 1 }}>
            <Typography
              variant="h6"
              fontSize={22}
              sx={{ mb: 5 }}
              display={{ xs: "none", sm: "block" }}
            >
              {title}
            </Typography>
            <Stack direction={"column"} gap={1.5}>
              {items.map((item, index) => (
                <React.Fragment key={item.link}>
                  <ActionButton
                    icon={item.icon}
                    title={item.title}
                    link={item.link}
                  />
                  {index !== items.length - 1 && (
                    <Divider
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                        },
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 1, sm: 2 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
            >
              <Stack
                width={{
                  xs: "75%",
                  sm: "100%",
                  lg: "70%",
                  xl: "60%",
                }}
              >
                <Image
                  alt=""
                  width={417}
                  height={185}
                  src={image}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Card>
  );
}
