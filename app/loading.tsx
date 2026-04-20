import { CSSProperties, Stack } from "@mui/material";
import { DotLoader } from "react-spinners";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function loading() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      height={"90vh"}
      justifyContent={"center"}
    >
      <Stack zIndex={10}>
        <DotLoader
          color={"#FCD535"}
          loading={true}
          cssOverride={override}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Stack>
    </Stack>
  );
}
