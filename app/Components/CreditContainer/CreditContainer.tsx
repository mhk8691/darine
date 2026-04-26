import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import Container from "../Container/Container";
import GoldBuy from "./GoldBuy";
interface Props {
  title: ReactNode;
  banner: ReactNode;
  icon: ReactNode;
  description: string;
  descriptionSize?: number;
  options?: string[];
  tooltip?: string;
  optionTitle?: string;
}
export default function CreditContainer({
  title,
  banner,
  icon,
  description,
  options,
  tooltip,
  optionTitle,
  descriptionSize,
}: Props) {
  return (
    <Container
      style={{
        pb: {
          xs: 0,
          sm: 12,
        },
        px: {
          xs: 0,
          sm: 4,
        },
        pt: {
          xs: 0,
          sm: 3,
        },
        border: {
          xs: 0,
          sm: 1,
        },
        borderColor: {
          sm: "background.paper",
        },
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        {title}
        {icon}
      </Stack>
      {banner}
      <Typography
        variant="body1"
        fontSize={{
          xs: 14,
          sm: descriptionSize || 18,
        }}
        sx={{
          color: "text.secondary",
          mt: 4.5,
          fontWeight: 500,
          lineHeight: "25.6px",
        }}
      >
        {description}
      </Typography>
      {options && (
        <>
          <Typography
            variant="body1"
            fontSize={{
              xs: 12,
              sm: 16,
            }}
            sx={{ color: "text.secondary", mt: 3.5, mb: 0.5 }}
          >
            {optionTitle || " مزایای این سرویس:"}
          </Typography>
          <Stack direction={'column'} gap={1}>
            {options.map((option) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1}
                key={option}
              >
                <FiberManualRecordIcon sx={{ width: 7, height: 25 }} />
                <Typography
                  variant="body2"
                  fontSize={{
                    xs: 12,
                    sm: 16,
                  }}
                  sx={{ color: "text.secondary" }}
                >
                  {option}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
      {tooltip && (
        <>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
            bgcolor={"#292926"}
            borderRadius={2}
            p={2}
            width={"fit-content"}
            mt={2}
          >
            <InfoOutlinedIcon sx={{ color: "#C1884E" }} />
            <Typography
              variant="body2"
              fontSize={14}
              sx={{ color: "text.secondary", fontWeight: 600 }}
            >
              {tooltip}
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"center"} width={"100%"}>
            <GoldBuy />
          </Stack>
        </>
      )}
    </Container>
  );
}
