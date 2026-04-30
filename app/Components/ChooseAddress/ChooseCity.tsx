import SelectField from "@/app/Components/InputField/SelectField";
import { Stack, Button } from "@mui/material";
const ostanItems = ["قم", "تهران", "اصفهان"];
const cityItems = ["کهک", "قنوات", "تست"];
export default function ChooseCity() {
  return (
    <Stack direction={"column"} gap={2} mb={15}>
      <SelectField
        label="استان"
        itemsList={ostanItems}
        isOrederDetail={false}
        style={{ width: "100%", py: 0.7 }}
      />
      <SelectField
        label="شهر ها"
        itemsList={cityItems}
        isOrederDetail={false}
        style={{ width: "100%", py: 0.7 }}
      />
    </Stack>
  );
}
