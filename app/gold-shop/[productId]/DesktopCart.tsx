"use client";
import Container from "@/app/Components/Containers/Container/Container";
import { WarrantyIcon } from "@/app/Components/CustomIcons/CustomIcons";
import priceFormater from "@/app/core/PriceFormater";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function DesktopCart() {
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  if (!isUpMd) return null;
  return (
    <Container style={{ px: 0, borderColor: "background.border", width: "100%" }}>
      <Stack direction={"column"} gap={1} alignItems={"center"} px={1.5}>
        <Stack sx={{ mt: 0.3 }}>
         <WarrantyIcon/> 
        </Stack>
        <Typography variant="body1" fontSize={14} sx={{ color: "text.muted" }}>
          همه محصولات دارای ضمانت اصالت و سلامت کالا می‌باشند.
        </Typography>
      </Stack>
      <Stack direction={"column"} gap={2} mt={6} px={1.5}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body1" fontSize={14}>
            قیمت:
          </Typography>
          <Typography
            variant="body1"
            fontSize={22}
            sx={{ color: "text.title" }}
          >
            {priceFormater(19303549)}{" "}
            <Box component={"span"} fontSize={16}>
              تومان
            </Box>
          </Typography>
        </Stack>
      </Stack>
      <Stack px={1.5}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: 16,
            py: 1.5,
            fontWeight: "600",
            borderRadius: 2,
            mt: 4,
          }}
        >
          افزودن به سبد خرید
        </Button>
      </Stack>
    </Container>
  );
}
