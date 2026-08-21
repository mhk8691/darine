'use client';

import {
  TableBody,
  TableCell,
  TableRow,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import { ArrowBackIos } from '@mui/icons-material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import priceFormater from '@/app/core/PriceFormater';
import { DatePickerValue } from '@/app/Components/DatePicker/CustomDatePicker';
import CustomModal from '@/app/Components/CustomModal/CustomModal';
import { statuses } from '../reports/DepositTable';
import OrderDetail from '@/app/Components/Tables/DetailTable/OrderDetail';
import Loading from '@/app/Components/Loading/Loading';
import { cancelInvestment } from '@/lib/investment/investment';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { isAxiosError } from 'axios';
import InvestmentDetail from './InvestmentDetail';

export interface InvestmentTableItem {
  id: number;
  plan: number;
  plan_name: string;
  gold_weight: string;
  investment_price: string;
  start_date: string;
  end_date: string;
  end_date_shamsi: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | string;
  status_display: string;
  monthly_profit: number;
  total_expected_profit: number;
  paid_profit: string;
  total_return: number;
  months_passed: number;
  remaining_months: number;
  cancellation_profit: string;
  can_cancel: boolean;
}

interface Props {
  data: InvestmentTableItem[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  dateRange: DatePickerValue | null;
  setDateRange: Dispatch<SetStateAction<DatePickerValue | null>>;
  setParams?: Dispatch<SetStateAction<string>>;
  onRowClick?: (row: InvestmentTableItem) => void;
  onRefresh?: () => void;
}

export default function InvestmentTableContainer({
  data,
  filter,
  setFilter,
  dateRange,
  setDateRange,
  setParams,
  onRowClick,
  onRefresh,
}: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // استیت‌های مربوط به مودال لغو
  const [openCancelModal, setOpenCancelModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<InvestmentTableItem | null>(null);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);

  // استیت‌های مربوط به مودال جزئیات
  const [openDetailModal, setOpenDetailModal] = useState<boolean>(false);
  const [detailItem, setDetailItem] = useState<InvestmentTableItem | null>(null);

  const handleColorStatus = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'success.main';
      case 'COMPLETED':
        return 'info.main';
      case 'CANCELLED':
        return 'error.main';
      default:
        return 'text.primary';
    }
  };

  // کلیک روی سطر برای باز کردن مودال جزئیات
  const handleRowClick = (row: InvestmentTableItem) => {
    setDetailItem(row);
    setOpenDetailModal(true);
    if (onRowClick) {
      onRowClick(row);
    }
  };

  // باز کردن مودال لغو و ذخیره آیتم انتخابی
  const handleOpenCancelModal = (e: React.MouseEvent, item: InvestmentTableItem) => {
    e.stopPropagation(); // جلوگیری از باز شدن همزمان مودال جزئیات
    setSelectedItem(item);
    setOpenCancelModal(true);
  };

  const handleConfirmCancel = async () => {
    if (!selectedItem) return;

    try {
      setIsCancelling(true);
      const res = await cancelInvestment(selectedItem.id);

      setOpenCancelModal(false);
      setSelectedItem(null);
      showSnackbar(res.message || 'سرمایه‌گذاری با موفقیت لغو شد', 'success');

      if (onRefresh) {
        await onRefresh();
      }
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        showSnackbar(err.response?.data?.message || 'خطا در لغو طرح', 'error');
      }
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <>
      <OrderDetail
        type={'chip'}
        toggleItems={[]}
        statuses={statuses}
        status={filter}
        setDateRange={setDateRange}
        setStatus={setFilter}
        dateRange={dateRange}
        key={1}
        setParams={setParams}
        tableBody={
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row?.id}
                onMouseEnter={() => !isMobile && setHoveredId(row.id)}
                onMouseLeave={() => !isMobile && setHoveredId(null)}
                onClick={() => handleRowClick(row)}
                sx={{
                  '&:last-child td': { border: 0 },
                  '&:last-child th': { border: 0 },
                  cursor: 'pointer',
                  bgcolor:
                    !isMobile && hoveredId === row.id
                      ? 'action.hover'
                      : 'transparent',
                  transition: 'background-color 0.15s ease',
                }}
              >
                {/* ID */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {row.id}
                </TableCell>

                {/* عنوان طرح */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  <Typography variant="body2" fontWeight={600}>
                    {row.plan_name}
                  </Typography>
                </TableCell>

                {/* وضعیت */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: handleColorStatus(row.status) }}
                  >
                    {row.status_display}
                  </Typography>
                </TableCell>

                {/* وزن طلا */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {priceFormater(+row.gold_weight)} گرم
                </TableCell>

                {/* مبلغ سرمایه‌گذاری */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {priceFormater(+row.investment_price)} تومان
                </TableCell>

                {/* نرخ سود */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {row.total_expected_profit * 100}% کل
                </TableCell>

                {/* سود واریزی */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {priceFormater(+row.paid_profit)} گرم
                </TableCell>

                {/* بازگشت کل */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {priceFormater(+row.total_return)} گرم
                </TableCell>

                {/* سود لغو */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {priceFormater(+row.cancellation_profit)} گرم
                </TableCell>

                {/* تاریخ پایان */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {row.end_date_shamsi || '-'}
                </TableCell>

                {/* عملیات */}
                <TableCell align="center" sx={{ py: 2, px: 1.5 }}>
                  {row.can_cancel ? (
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={(e) => handleOpenCancelModal(e, row)}
                      sx={{ borderRadius: '8px', fontSize: '12px', px: 1.5, py: 0.5 }}
                    >
                      لغو طرح
                    </Button>
                  ) : (
                    <Typography variant="caption" color="text.secondary">
                      غیرقابل لغو
                    </Typography>
                  )}
                </TableCell>

                {/* آیکون فلش هنگام هاور */}
                <TableCell
                  align="center"
                  sx={{
                    py: 2,
                    px: 0,
                    width: 0,
                    minWidth: 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <ArrowBackIos
                    sx={{
                      fontSize: 13,
                      color: 'primary.main',
                      display: 'block',
                      opacity: isMobile || hoveredId === row.id ? 1 : 0,
                      transition: isMobile
                        ? 'none'
                        : 'opacity 0.15s ease, transform 0.15s ease',
                      transform:
                        isMobile || hoveredId === row.id
                          ? 'translateX(0)'
                          : 'translateX(6px)',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        }
        tableHead={[
          'آیدی',
          'عنوان طرح',
          'وضعیت',
          'وزن طلا',
          'مبلغ سرمایه',
          'نرخ سود',
          'سود واریزی',
          'بازگشت کل',
          'سود لغو',
          'تاریخ پایان',
          'عملیات',
          '',
        ]}
        listLength={data?.length || 0}
      />

      {/* مودال جزئیات سرمایه‌گذاری */}
      <InvestmentDetail
        open={openDetailModal}
        setOpen={setOpenDetailModal}
        data={detailItem}
      />

      {/* مودال تأییدیه لغو طرح */}
      <CustomModal open={openCancelModal} setOpen={setOpenCancelModal}>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Stack alignItems="center" spacing={1.5}>
            <WarningAmberRoundedIcon sx={{ fontSize: 48, color: 'warning.main' }} />
            <Typography variant="h6" fontWeight={700}>
              تأیید لغو سرمایه‌گذاری
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lh: 1.7 }}>
              آیا از لغو سرمایه‌گذاری روی <strong>«{selectedItem?.plan_name}»</strong> اطمینان دارید؟
            </Typography>

            {selectedItem && (
              <Box
                sx={{
                  bgcolor: 'action.hover',
                  p: 2,
                  borderRadius: 2,
                  width: '100%',
                  textAlign: 'right',
                  mt: 1,
                }}
              >
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" color="text.secondary">وزن طلا:</Typography>
                    <Typography variant="caption" fontWeight={600}>{priceFormater(+selectedItem.gold_weight)} گرم</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" color="text.secondary">سود قابل تعلق در صورت لغو:</Typography>
                    <Typography variant="caption" fontWeight={600} color="error.main">{priceFormater(+selectedItem.cancellation_profit)} گرم</Typography>
                  </Stack>
                </Stack>
              </Box>
            )}

            <Stack direction="row" spacing={2} sx={{ width: '100%', mt: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                color="inherit"
                disabled={isCancelling}
                onClick={() => setOpenCancelModal(false)}
                sx={{ borderRadius: 2 }}
              >
                انصراف
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="error"
                disabled={isCancelling}
                onClick={handleConfirmCancel}
                sx={{ borderRadius: 2 }}
              >
                {isCancelling ? <Loading size={30} /> : 'تأیید و لغو طرح'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </CustomModal>
    </>
  );
}