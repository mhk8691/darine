import React, { CSSProperties } from "react";
import Card from "../Card/Card";
import Typography from "@mui/material/Typography";
import { Grid, Stack, SxProps } from "@mui/material";
import ActionButton, { ActionButtonType } from "../ActionButton/ActionButton";
import Image from "next/image";
interface Props {
  title: string;
  items: ActionButtonType[];
  image: string;
  style?:CSSProperties
  cardStyle?:SxProps
}
export default function InfoContainer({ title, items, image, style, cardStyle }: Props) {
  return (
    <Card style={cardStyle}>
      <Grid container alignItems={"center"}>
        <Grid size={6}>
          <Typography variant="h6" fontSize={22} sx={{ mb: 5 }}>
            {title}
          </Typography>
          <Stack direction={"column"} gap={1.5}>
            {items.map((item) => (
              <ActionButton
                key={item.link}
                icon={item.icon}
                title={item.title}
                link={item.link}
              />
            ))}
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack direction={"row"} justifyContent={"center"}>
            <Image alt="" width={417} height={185} src={image} style={style} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
