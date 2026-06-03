import { PricesDataType } from '@/app/core/Types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactNode } from 'react';

export function createData({
  type,
  currentRate,
  minPriceDay,
  maxPriceDay,
  dayChange,
  percentChange,
  // weeklyChart,
}: PricesDataType) {
  return {
    type,
    currentRate,
    minPriceDay,
    maxPriceDay,
    dayChange,
    percentChange,
    // weeklyChart,
  };
}

interface Props {
  heads: string[];
  children: ReactNode;
}
export default function CustomTable({ heads, children }: Props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: 'transparent',
        border: 1,
        borderColor: 'background.border',
        borderRadius: 3,
        boxShadow: 'none',
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: 'transparent' }}>
          <TableRow>
            {heads?.map((head, index) => (
              <TableCell
                align="center"
                key={index}
                sx={{
                  color: 'text.subtitle',
                  fontSize: '16px',
                  px: 2,
                  py: 2.5,
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </Table>
    </TableContainer>
  );
}
