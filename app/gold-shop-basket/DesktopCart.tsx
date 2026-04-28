"use client";
import {
  Box,
  IconButton,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
const dataStyle: SxProps = {
  py: 1.5,
  fontSize: {
    xs: 14,
    md: "16px",
  },
  color: "text.primary",
};
const headStyle: SxProps = {
  color: "#ADADA9",
  borderBottom: "none",
  fontSize: "16px",
};

const items = [
  {
    id: 1,
    title: "شمش طلاسی 1 گرمی 18 عیار",
    weight: "۲.۶۲۵ گرم",
    price: "۴۵,۰۴۲,۰۸۶",
    count: 1,
    total: "۴۵,۰۴۲,۰۸۶ تومان",
    image: "/images/product.webp",
  },
  {
    id: 2,
    title: "شمش طلاسی 1 گرمی 18 عیار",
    weight: "۲.۶۲۵ گرم",
    price: "۴۵,۰۴۲,۰۸۶",
    count: 1,
    total: "۴۵,۰۴۲,۰۸۶ تومان",
    image: "/images/product.webp",
  },
];

const DesktopCart = () => {
  const [count, setCount] = useState(1);
  return (
    <Box dir="rtl">
      <Table
        sx={{
          borderCollapse: "separate",
          borderSpacing: "0 16px",
          tableLayout: "fixed",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                width: {
                  xs: "50%",
                  md: "35%",
                },
                ...headStyle,
              }}
            >
              محصول
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: "10%",
                  md: "15%",
                },
                ...headStyle,
              }}
            >
              مقدار طلا
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: "15%",
                  md: "20%",
                },
                ...headStyle,
              }}
            >
              ارزش تومان
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: "15%",
                },
                ...headStyle,
              }}
            >
              تعداد
            </TableCell>

            <TableCell
              align="center"
              sx={{
                width: {
                  xs: "20%",
                  md: "15%",
                },
                ...headStyle,
              }}
            >
              مبلغ کل
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                background: "rgb(16, 16, 15)",
                boxShadow: "0 0 0 1px #333",
                borderRadius: "10px",
                overflow: "hidden",
                "& td": {
                  borderBottom: "none",
                  color: "#fff",
                },
                "& td:first-of-type": {
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                },
                "& td:last-of-type": {
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                },
              }}
            >
              <TableCell align="center" sx={{ ...dataStyle }}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Stack
                    width={{
                      xs: 80,
                      md: 112,
                    }}
                    height={{
                      xs: 80,
                      md: 112,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={112}
                      height={112}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.weight}
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.price}
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    border: "1px solid #333333",
                    borderRadius: 2,
                    py: 1,
                    minWidth: "75px",
                    maxWidth: "150px",
                  }}
                >
                  <IconButton
                    onClick={() => setCount((prev) => prev + 1)}
                    disableRipple
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <Typography fontWeight={600}>{count}</Typography>

                  <IconButton
                    onClick={() => setCount((prev) => prev - 1)}
                    disableRipple
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DesktopCart;
