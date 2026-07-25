'use client';

import priceFormatter from '@/app/core/PriceFormater';
import { InvoiceType } from '@/app/core/Types';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

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
        {value}
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
  data: InvoiceType;
}

export default function SalesInvoiceCard({ data }: SalesInvoiceCardProps) {
  const isBuy = data.invoice_type === 'BUY';

  const invoiceTitle = isBuy ? 'فاکتور خرید' : 'فاکتور فروش';

  const totalLabel = isBuy ? 'مبلغ قابل پرداخت' : 'مبلغ قابل دریافت';

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

        <Grid size={{ xs: 12, md: 3 }}>
          <InfoItem label="آدرس" value={data.buyer_address} />
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

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        borderRadius: { xs: '16px', sm: '20px' },
        border: {
          xs: 'none',
          sm: '1px solid',
        },
        borderColor: {
          sm: 'background.border',
        },
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexWrap="wrap"
        rowGap={1}
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: 'text.title',
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem',
            },
          }}
        >
          {invoiceTitle}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.subtitle' }}>
          تاریخ : {data.invoice_date}
        </Typography>
      </Stack>

      {firstSection}

      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />

      {secondSection}

      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />

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
            <InfoItem
              label="وزن طلا"
              value={`${data.gold_weight} گرم`}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem
              label="عیار"
              value={`${data.gold_carat} عیار`}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem
              label="قیمت هر گرم"
              value={data.gold_price_per_gram}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem
              label="کارمزد"
              value={data.fee_amount}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'inline-flex',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'background.border',
          borderRadius: '10px',
          px: 2.5,
          py: 1.25,
          width: {
            xs: '100%',
            sm: 'auto',
          },
          justifyContent: {
            xs: 'center',
            sm: 'flex-start',
          },
        }}
      >
        <Typography
          component="span"
          variant="body2"
          sx={{ color: 'text.subtitle' }}
        >
          {totalLabel} :&nbsp;
        </Typography>

        <Typography
          component="span"
          variant="body1"
          sx={{
            color: 'text.title',
            fontWeight: 700,
          }}
        >
          {priceFormatter(data.total_amount || 0)} تومان
        </Typography>
      </Box>
    </Box>
  );
}