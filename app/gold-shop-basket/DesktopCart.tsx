import {
  Box,
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

const dataStyle: SxProps = {
  py: 1.5,
  fontSize: "16px",
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
  return (
    <Box dir="rtl">
      <Table
        sx={{
          borderCollapse: "separate",
          borderSpacing: "0 16px",
          tableLayout: "fixed",
        }}
      >
        {/* HEADER */}
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ width: "35%", ...headStyle }}>
              محصول
            </TableCell>

            <TableCell align="center" sx={{ width: "15%", ...headStyle }}>
              مقدار طلا
            </TableCell>

            <TableCell align="center" sx={{ width: "20%", ...headStyle }}>
              ارزش تومان
            </TableCell>

            <TableCell align="center" sx={{ width: "10%", ...headStyle }}>
              تعداد
            </TableCell>

            <TableCell align="center" sx={{ width: "20%", ...headStyle }}>
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={112}
                    height={112}
                  />
                  <Typography variant="body1">{item.title}</Typography>
                </Stack>
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.weight}
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.price}
              </TableCell>

              <TableCell align="center" sx={dataStyle}>
                {item.count}
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
