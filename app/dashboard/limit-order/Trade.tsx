"use client";
import Card from "@/app/Components/Container/Container";
import FilterToggleButton from "@/app/Components/FilterToggleButton/FilterToggleButton";
import InputField from "@/app/Components/InputField/InputField";
import { ToggleItemsType } from "@/app/core/Types";
import { Button, Stack, SvgIcon } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  type: "buy" | "sell";
}
const items: ToggleItemsType[] = [
  { title: "در قیمت بالاتر", value: "max", id: 1 },
  { title: "در قیمت پایین تر", value: "min", id: 2 },
];
export default function Trade({ type }: Props) {
  const [price, setPrice] = useState<number | null>(null);
  const [gold, setGold] = useState<number | null>(null);
  const [TargetPrice, setTargetPrice] = useState<number | null>(null);
  const [select, setSelect] = useState(
    type === "sell" ? items[0].value : items[1].value,
  );
  useEffect(() => {
    if (!price) {
      setGold(null);
    } else {
      const result = price / 17999000;
      setGold(result);
    }
  }, [price, setPrice]);
  useEffect(() => {
    if (!gold) {
      setPrice(null);
    } else {
      const result = gold * 17999000;
      setPrice(result);
    }
  }, [gold, setGold]);
  return (
    <Card style={{ gap: 3.5, border: "none", p: 1 }}>
      <FilterToggleButton
        items={items}
        select={select}
        setSelect={setSelect}
        style={{ fontSize: 20 }}
      />
      <Stack gap={3.5}>
        <Stack>
          <InputField
            placeholder={
              type === "buy" ? "قیمت مد نظر خرید" : "قیمت مد نظر فروش"
            }
            title={"تومان"}
            value={TargetPrice}
            setValue={setTargetPrice}
          />
        </Stack>
        <Stack
          gap={1.5}
          flexDirection={type === "buy" ? "column" : "column-reverse"}
        >
          <Stack>
            <InputField
              placeholder={"ملبغ به تومان"}
              title={"تومان"}
              value={price}
              setValue={setPrice}
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"}>
            <SvgIcon
              sx={{
                bgcolor: "#FEF2C0",
                borderRadius: "50%",
                color: "black",
                width: "35px",
                height: "35px",
                p: 1,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96781 4.47998L4.48779 2L2.00781 4.47998"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.48438 14V2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.03125 11.5195L11.5113 13.9995L13.9913 11.5195"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.5156 2V14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </SvgIcon>
          </Stack>
          <Stack>
            <InputField
              placeholder={"وزن طلا"}
              title={"گرم"}
              value={gold}
              setValue={setGold}
            />
          </Stack>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 2, fontSize: 16, py: 1.4 }}
      >
        ثبت سفارش
      </Button>
    </Card>
  );
}
