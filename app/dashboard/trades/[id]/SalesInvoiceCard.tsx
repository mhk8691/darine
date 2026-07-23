'use client';

import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type InvoiceType = 'buy' | 'sell';

export interface SalesInvoiceData {
  type: InvoiceType; 
  invoiceDate: string; 
  buyer: {
    name: string;
    province: string;
    address: string;
  };
  seller: {
    name: string;
    nationalId: string;
    phone: string;
  };
  gold: {
    weightGrams: string; 
    purity: string;
    pricePerGram: string;
    fee: string; 
  };
  totalAmount: string; 
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
        sx={{ fontWeight: 700, color: 'text.title', mb: 1.25 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export interface SalesInvoiceCardProps {
  data: SalesInvoiceData;
}


export default function SalesInvoiceCard({ data }: SalesInvoiceCardProps) {
  const { type, buyer, seller, gold, totalAmount, invoiceDate } = data;

  const isBuy = type === 'buy';

  const invoiceTitle = isBuy ? 'فاکتور خرید' : 'فاکتور فروش';
  const totalLabel = isBuy ? 'مبلغ قابل پرداخت' : 'مبلغ قابل دریافت';

  const buyerSection = (
    <Section title="مشخصات خریدار">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="نام شخص حقیقی/حقوقی" value={buyer.name} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="استان" value={buyer.province} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="آدرس" value={buyer.address} />
        </Grid>
      </Grid>
    </Section>
  );

  const sellerSection = (
    <Section title="مشخصات فروشنده">
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="نام شخص حقیقی/حقوقی" value={seller.name} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="شماره ملی" value={seller.nationalId} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <InfoItem label="شماره تماس" value={seller.phone} />
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
          xs:'none',
          sm:'1px solid'
        },
        borderColor: {
          sm:'background.border'
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
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {invoiceTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.subtitle' }}>
          تاریخ : {invoiceDate}
        </Typography>
      </Stack>

      {firstSection}
      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />

      {secondSection}
      <Divider sx={{ borderColor: 'background.border', mb: 2 }} />

      <Box sx={{ mb: { xs: 2.5, sm: 3 } }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.title', mb: 1.25 }}>
          مشخصات طلای مورد معامله
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem label="وزن طلا" value={`${gold.weightGrams} گرم`} />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem label="عیار طلا" value={gold.purity} />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem label="قیمت هر گرم طلا" value={gold.pricePerGram} />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <InfoItem label="کارمزد" value={gold.fee} />
          </Grid>
        </Grid>
      </Box>

      {/* Total */}
      <Box
        sx={{
          display: 'inline-flex',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'background.border',
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
          {totalAmount}
        </Typography>
      </Box>
    </Box>
  );
}