import { Grid, Stack } from "@mui/material";
import GoldCard from "./Components/GoldCard/Card";

export default function page() {
  return (
    <Stack height={"200vh"} m={3}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid size={12 / 5} key={item}>
            <GoldCard />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
