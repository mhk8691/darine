'use client';

import priceFormatter from '@/app/core/PriceFormater';
import { AnyInvoiceType, PhysicalInvoiceType, TradeInvoiceType } from '@/app/core/Types';
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import type { ReactNode } from 'react';

function isPhysicalInvoice(invoice: AnyInvoiceType): invoice is PhysicalInvoiceType {
  return 'products' in invoice && Array.isArray((invoice as PhysicalInvoiceType).products);
}

interface InfoItemProps {
  label: string;
  value: ReactNode;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <Stack direction="row" spacing={0.75} flexWrap="wrap" alignItems="baseline">
      <Typography component="span" variant="body2" sx={{ color: 'text.subtitle' }}>
        {label} :
      </Typography>

      <Typography component="span" variant="body2" sx={{ color: 'text.title', fontWeight: 700 }}>
        {value || '--'}
      </Typography>
    </Stack>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <Box sx={{ mb: { xs: 2.5, sm: 3 } }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          color: 'text.title',
          mb: 1.25,
        }}
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
}

interface SalesInvoiceCardProps {
  data: AnyInvoiceType;
}

export default function SalesInvoiceCard({ data }: SalesInvoiceCardProps) {
  if (!data || !data.invoice_type) return null;

  const isBuy = data.invoice_type === 'BUY';
  const isPhysical = isPhysicalInvoice(data);

  const invoiceTitle = isPhysical
    ? `فاکتور تحویل فیزیکی `
    : isBuy
    ? 'فاکتور خرید'
    : 'فاکتور فروش';

  const totalLabel = isBuy ? 'مبلغ قابل پرداخت' : 'مبلغ قابل دریافت';

  const fullBuyerAddress = isPhysical
    ? `${data.buyer_province ? data.buyer_province + '، ' : ''}${
        data.buyer_city ? data.buyer_city + '، ' : ''
      }${data.buyer_address}`
    : data.buyer_address;

  const buyerSection = (
    <Section title="مشخصات خریدار">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="نام" value={data.buyer_name} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="شماره ملی" value={data.buyer_national_id} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="شماره تماس" value={data.buyer_phone} />
        </Grid>

        {isPhysical && (data as PhysicalInvoiceType).buyer_postal_code && (
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <InfoItem label="کد پستی" value={(data as PhysicalInvoiceType).buyer_postal_code} />
          </Grid>
        )}

        <Grid size={{ xs: 12, md: isPhysical ? 12 : 3 }}>
          <InfoItem label="آدرس" value={fullBuyerAddress} />
        </Grid>
      </Grid>
    </Section>
  );

  const sellerSection = (
    <Section title="مشخصات فروشنده">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="نام" value={data.seller_name} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="شماره ملی" value={data.seller_national_id} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <InfoItem label="شماره تماس" value={data.seller_phone} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <InfoItem label="آدرس" value={data.seller_address} />
        </Grid>
      </Grid>
    </Section>
  );

  const [firstSection, secondSection] = isBuy
    ? [buyerSection, sellerSection]
    : [sellerSection, buyerSection];

  const weight = isPhysical
    ? (data as PhysicalInvoiceType).gold_weight
    : (data as TradeInvoiceType).gold_weight;

  const pricePerGram = isPhysical
    ? (data as PhysicalInvoiceType).gold_price_per_gram
    : (data as TradeInvoiceType).gold_price_per_gram;

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        borderRadius: { xs: '16px', sm: '20px' },
        border: { xs: 'none', sm: '1px solid' },
        borderColor: { sm: 'background.border' },
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* هدر */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexWrap="wrap"
        rowGap={1}
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'text.title',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
            }}
          >
            {invoiceTitle}
          </Typography>
          {data.invoice_number && (
            <Chip label={data.invoice_number} size="small" variant="outlined" />
          )}
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.subtitle' }}>
          تاریخ : {data.invoice_date}
        </Typography>
      </Stack>

      {/* خریدار و فروشنده */}
      {firstSection}
      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />
      {secondSection}
      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />

      {/* جدول محصولات (مخصوص تحویل فیزیکی) */}
      {isPhysical && (data as PhysicalInvoiceType).products?.length > 0 && (
        <Section title="محصولات سفارشی">
          <TableContainer component={Paper} variant="outlined" sx={{ mb: 3, borderRadius: '10px' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>نام محصول</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>کد محصول</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>تعداد</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700 }}>وزن کل (گرم)</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 700 }}>قیمت کل (تومان)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(data as PhysicalInvoiceType).products.map((prod, idx) => (
                  <TableRow key={prod.product_id || idx}>
                    <TableCell>{prod.product_name}</TableCell>
                    <TableCell align="center">{prod.product_code}</TableCell>
                    <TableCell align="center">{prod.quantity}</TableCell>
                    <TableCell align="center">{prod.total_weight}</TableCell>
                    <TableCell align="left">{priceFormatter(prod.total_price)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Section>
      )}

      {/* مشخصات طلا یا معامله */}
      <Box sx={{ mb: { xs: 2.5, sm: 3 } }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: 'text.title',
            mb: 1.25,
          }}
        >
          مشخصات طلای مورد معامله
        </Typography>

        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem label="وزن کل" value={`${weight || 0} گرم`} />
          </Grid>

          {isPhysical && (
            <Grid size={{ xs: 12, sm: 3 }}>
              <InfoItem label="عیار" value={(data as PhysicalInvoiceType).gold_carat} />
            </Grid>
          )}

          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem
              label="قیمت هر گرم"
              value={`${priceFormatter(Number(pricePerGram || 0))} تومان`}
            />
          </Grid>

          {!isPhysical ? (
            <Grid size={{ xs: 12, sm: 3 }}>
              <InfoItem
                label="کارمزد"
                value={`${priceFormatter(Number((data as TradeInvoiceType).fee_amount || 0))} تومان`}
              />
            </Grid>
          ) : (
            <>
              <Grid size={{ xs: 12, sm: 3 }}>
                <InfoItem
                  label="هزینه ارسال"
                  value={`${priceFormatter((data as PhysicalInvoiceType).shipping_fee || 0)} تومان`}
                />
              </Grid>
              {(data as PhysicalInvoiceType).discount_amount > 0 && (
                <Grid size={{ xs: 12, sm: 3 }}>
                  <InfoItem
                    label="تخفیف"
                    value={`${priceFormatter((data as PhysicalInvoiceType).discount_amount)} تومان`}
                  />
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Box>

      {/* مبلغ کل */}
      <Box
        sx={{
          display: 'inline-flex',
          bgcolor: 'background.secondary',
          border: '1px solid',
          borderColor: '#C9CDCF',
          borderRadius: '10px',
          px: 2.5,
          py: 1.25,
          width: { xs: '100%', sm: 'auto' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Typography component="span" variant="body2" sx={{ color: 'text.subtitle' }}>
          {totalLabel} :&nbsp;
        </Typography>

        <Typography component="span" variant="body1" sx={{ color: 'text.title', fontWeight: 700 }}>
          {priceFormatter(data.total_amount || 0)} تومان
        </Typography>
      </Box>
    </Box>
  );
}