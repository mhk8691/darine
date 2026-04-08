import { Stack } from "@mui/material";
import ActionButton from "./Components/ActionButton/ActionButton";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function page() {
  return (
    <Stack width={"45%"} m={5} gap={2}>
      <ActionButton
        link="/test"
        title="خرید با دیجی پی"
        icon={<AttachMoneyIcon color="primary" fontSize="large" />}
      />
      <ActionButton
        link="/test"
        title="خرید با اسنپ پی"
        icon={<AttachMoneyIcon color="primary" fontSize="large" />}
      />
      <ActionButton
        link="/test"
        title="خرید با ازکی وام"
        icon={<AttachMoneyIcon color="primary" fontSize="large" />}
      />
      <ActionButton
        link="/test"
        title="خرید با نسیبا"
        icon={<AttachMoneyIcon color="primary" fontSize="large" />}
      />
    </Stack>
  );
}
