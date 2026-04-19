"use client";

import priceFormater from "@/app/core/PriceFormater";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CartItem, Product } from "@/app/core/Types";
import CustomModal from "../CustomModal/CustomModal";
import { getCart, saveCart } from "./cartStorage";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const product: Product = {
  id: "gold-1",
  title: "شمش طلاسی ۱ گرمی ۱۸ عیار",
  price: 19330693,
};
export default function GoldCard() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const item = cart.find((i) => i.id === product.id);
  const router = useRouter();
  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    saveCart(newCart);
  };

  const addToCart = () => {
    const current = getCart();

    const exists = current.find((i) => i.id === product.id);

    let newCart: CartItem[];

    if (exists) {
      newCart = current.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
      );
    } else {
      newCart = [...current, { ...product, quantity: 1 }];
    }

    updateCart(newCart);
  };

  const removeItem = () => {
    const current = getCart();
    const updated = current.filter((i) => i.id !== product.id);
    updateCart(updated);
  };

  return (
    <>
      <Card
        sx={{
          border: 1,
          borderColor: "#393936",
          background: "rgb(28, 28, 27)",
          p: 1.5,
          borderRadius: 1.5,
        }}
      >
        <Stack bgcolor={"background.default"} px={0} py={4} borderRadius={2}>
          {" "}
          <Link href={"/gold-shop/test"}>
            {" "}
            <CardMedia
              sx={{ height: 140, p: 0 }}
              image="/images/product.webp"
              title="green iguana"
            />{" "}
          </Link>{" "}
        </Stack>{" "}
        <CardContent sx={{ px: 0 }}>
          {" "}
          <Link href={"/gold-shop/test"}>
            {" "}
            <Typography
              gutterBottom
              variant="h5"
              fontSize={18}
              sx={{ px: 0.5 }}
            >
              {" "}
              شمش طلاسی ۱ گرمی ۱۸ عیار{" "}
            </Typography>{" "}
          </Link>{" "}
          <Stack direction={"column"} gap={1} sx={{ mt: 3.5 }}>
            {" "}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {" "}
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ color: "#C2C2BA" }}
              >
                {" "}
                وزن{" "}
                <Box component={"span"} fontSize={10}>
                  {" "}
                  (معادل ۱۸ عیار){" "}
                </Box>{" "}
                :{" "}
              </Typography>{" "}
              <Typography variant="body1" fontSize={16}>
                {" "}
                ۲.۵{" "}
                <Box component={"span"} fontSize={14}>
                  {" "}
                  گرم{" "}
                </Box>{" "}
              </Typography>{" "}
            </Stack>{" "}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {" "}
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ color: "#C2C2BA" }}
              >
                {" "}
                گرم طلا:{" "}
              </Typography>{" "}
              <Typography variant="body1" fontSize={16}>
                {" "}
                ۱.۰۷۵{" "}
                <Box component={"span"} fontSize={14}>
                  {" "}
                  گرم{" "}
                </Box>{" "}
              </Typography>{" "}
            </Stack>{" "}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {" "}
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ color: "#C2C2BA" }}
              >
                {" "}
                ارزش تومان:{" "}
              </Typography>{" "}
              <Typography variant="body1" fontSize={16}>
                {" "}
                {priceFormater(19330693)}{" "}
                <Box component={"span"} fontSize={14}>
                  {" "}
                  تومان{" "}
                </Box>{" "}
              </Typography>{" "}
            </Stack>{" "}
          </Stack>{" "}
        </CardContent>
        {!item ? (
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderRadius: 2,
              width: "100%",
              mt: 3,
              py: 1.5,
              "&:hover": {
                bgcolor: "#1C1C1B",
              },
            }}
            onClick={() => {
              addToCart();
              setOpen(true);
            }}
            disableRipple
          >
            افزودن به سبد خرید
          </Button>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              border: "1px solid #FFD700",
              borderRadius: 2,
              mt: 3,
              px: 1,
              py: 0.5,
            }}
          >
            <IconButton onClick={addToCart} disableRipple>
              <AddIcon />
            </IconButton>
            <Typography fontWeight={600}>{item.quantity}</Typography>

            <IconButton onClick={removeItem} disableRipple>
              <DeleteIcon />
            </IconButton>
          </Stack>
        )}
      </Card>
      <CustomModal open={open} setOpen={setOpen} modalStyle={{ p: 2 }}>
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <IconButton onClick={() => setOpen(false)} disableRipple>
            <Close />
          </IconButton>
        </Stack>
        <Typography variant="h6" fontSize={22} sx={{ color: "#43AB79", mb: 4 }}>
          این محصول به سبد خرید شما افزوده شد.
        </Typography>
        <Typography variant="body1" fontSize={16}>
          {item?.title}
        </Typography>
        <Stack direction={"row"} gap={2} mt={5}>
          <Button
            onClick={() => {
              router.push("/gold-shop-basket");
              setOpen(false);
            }}
            variant="contained"
            color="primary"
            sx={{
              width: "50%",
              color: "#10100F",
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "primary.main",
              },
            }}
            disableRipple
          >
            سبد خرید
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            color="inherit"
            sx={{
              width: "50%",
              py: 1.3,
              borderRadius: 2,
              fontSize: 16,
              fontWeight: 600,
              "&:hover": {
                bgcolor: "background.default",
              },
            }}
            disableRipple
          >
            ادامه خرید
          </Button>
        </Stack>
      </CustomModal>
    </>
  );
}
