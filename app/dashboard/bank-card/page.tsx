import Card from "@/app/Components/Container/Container";
import { Grid, Typography } from "@mui/material";
import AddCard from "./AddCard";
import BankCard from "./BankCard";
import AddCardContainer from "./AddCardContainer";
export default function page() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card>
          <Typography variant="h6" fontSize={20} sx={{ color: "text.title" }}>
            کارت های بانکی شما
          </Typography>
          <Grid size={12} spacing={2} container mt={2}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid size={12 / 4} key={item}>
                <BankCard />
              </Grid>
            ))}
          </Grid>
          <AddCardContainer />
        </Card>
      </Grid>
    </Grid>
  );
}
