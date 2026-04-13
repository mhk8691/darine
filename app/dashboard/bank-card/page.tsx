import Card from "@/app/Components/Card/Card";
import { Grid, Typography, Button } from "@mui/material";
import BankCard from "./BankCard";
import { Add as AddIcon } from "@mui/icons-material";
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
          <Button
            variant="contained"
            sx={{
              fontSize: 16,
              width: "fit-content",
              borderRadius: 2,
              py: 1,
              fontWeight: 600,
              mt: 4,
            }}
            startIcon={<AddIcon />}
          >
            افزودن کارت جدید
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
