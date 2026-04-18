import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Card from "../Container/Container";
interface Props {
  type: "dashboard" | "wallet";
}
export default function Wallet({ type }: Props) {
  return (
    <Card style={{ minHeight: 386, pb: type === "wallet" ? 4.5 : 3 }}>
      <Typography
        variant="h6"
        fontSize={22}
        sx={{ color: "text.title", mb: 4 }}
      >
        کیف پول شما
      </Typography>
      <Stack px={type === "wallet" ? 4.5 : 0}>
        <Stack
          sx={{
            height: "134px",
            bgcolor: "background.paper",
            width: "100%",
            borderRadius: 2.5,
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"} p={2}>
            {type === "dashboard" && <Stack></Stack>}
            <Stack
              direction={"column"}
              gap={1}
              alignItems={type === "wallet" ? "start" : "center"}
            >
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ color: "#C2C2BA" }}
              >
                ارزش کل دارایی
              </Typography>
              <Stack
                direction={"row"}
                gap={0.5}
                alignItems={"center"}
                fontWeight={500}
              >
                <Typography
                  variant="body1"
                  fontSize={20}
                  sx={{ color: "text.title" }}
                >
                  ***
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={500}
                  sx={{ color: "text.title" }}
                >
                  تومان
                </Typography>
              </Stack>
              {type === "wallet" && (
                <Typography variant="body2" fontSize={10}>
                  ارزش دارایی مجموع دارایی طلا و دارایی نقدی شماست
                </Typography>
              )}
            </Stack>
            <Stack>
              <VisibilityOutlinedIcon
                sx={{ color: "#C2C2BA" }}
                fontSize="small"
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <Stack
              direction={"row"}
              gap={2}
              alignItems="center"
              border={1}
              borderColor={"background.paper"}
              bgcolor={"background.default"}
              borderRadius={2.5}
              justifyContent={"center"}
              py={2}
              width={"95%"}
            >
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={0.5}
                width={"100%"}
              >
                <Image
                  alt=""
                  src={"/images/simple/goldWallet.svg"}
                  width={26}
                  height={100}
                  style={{ height: "auto" }}
                />
                <Typography
                  variant="body1"
                  fontSize={12}
                  sx={{ color: "#C2C2BA" }}
                >
                  موجودی طلا
                </Typography>
                <Stack
                  direction={"row"}
                  gap={0.5}
                  alignItems={"center"}
                  fontWeight={500}
                >
                  <Typography
                    variant="body1"
                    fontSize={16}
                    sx={{ color: "text.title" }}
                  >
                    ***
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={12}
                    fontWeight={500}
                    sx={{ color: "text.title" }}
                  >
                    گرم
                  </Typography>
                </Stack>
              </Stack>

              <Divider orientation="vertical" flexItem />

              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                gap={0.5}
              >
                <Image
                  alt=""
                  src={"/images/simple/irtWallet.svg"}
                  width={26}
                  height={100}
                  style={{ height: "auto" }}
                />
                <Typography
                  variant="body1"
                  fontSize={12}
                  sx={{ color: "#C2C2BA" }}
                >
                  موجودی تومان
                </Typography>
                <Stack
                  direction={"row"}
                  gap={0.5}
                  alignItems={"center"}
                  fontWeight={500}
                >
                  <Typography
                    variant="body1"
                    fontSize={16}
                    sx={{ color: "text.title" }}
                  >
                    ***
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={12}
                    fontWeight={500}
                    sx={{ color: "text.title" }}
                  >
                    تومان
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {type === "wallet" && (
          <Stack mt={14.5} direction={"row"} gap={2}>
            <Link href={"/dashboard/irt-transaction"} style={{ width: "100%" }}>
              <Stack
                bgcolor={"#292926"}
                width={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"1.5rem"}
                sx={{ borderEndEndRadius: "6px", borderStartEndRadius: "6px" }}
                pl={0.2}
                py={0.2}
              >
                <Stack
                  bgcolor={"background.default"}
                  borderRadius={"50%"}
                  p={1}
                >
                  <Image
                    src={"/images/simple/deposit.svg"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </Stack>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{ color: "text.title" }}
                >
                  واریز
                </Typography>
                <Stack></Stack>
              </Stack>
            </Link>
            <Link href={"/dashboard/irt-transaction"} style={{ width: "100%" }}>
              <Stack
                bgcolor={"#292926"}
                width={"100%"}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderRadius={"1.5rem"}
                pl={0.2}
                py={0.2}
                sx={{ borderEndEndRadius: "6px", borderStartEndRadius: "6px" }}
              >
                <Stack
                  bgcolor={"background.default"}
                  borderRadius={"50%"}
                  p={1}
                >
                  <Image
                    src={"/images/simple/withdraw.svg"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </Stack>
                <Typography
                  variant="body2"
                  fontSize={12}
                  sx={{ color: "text.title" }}
                >
                  برداشت
                </Typography>
                <Stack></Stack>
              </Stack>
            </Link>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
