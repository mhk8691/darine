'use client';

import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import { RefrraDataType } from '@/app/core/Types';
import { Stack, SvgIcon, Typography, useTheme, SxProps, alpha } from '@mui/material';

const CopyIcon = () => (
  <SvgIcon sx={{ fontSize: 18 }} color="primary">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.168 11.1666V13.6666C14.168 17 12.8346 18.3333 9.5013 18.3333H6.33464C3.0013 18.3333 1.66797 17 1.66797 13.6666V10.5C1.66797 7.16665 3.0013 5.83331 6.33464 5.83331H8.83464"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1693 11.1666H11.5026C9.5026 11.1666 8.83594 10.5 8.83594 8.49998V5.83331L14.1693 11.1666Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66797 1.66669H13.0013"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83203 4.16669C5.83203 2.78335 6.9487 1.66669 8.33203 1.66669H10.5154"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3339 6.66669V11.825C18.3339 13.1167 17.2839 14.1667 15.9922 14.1667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.332 6.66669H15.832C13.957 6.66669 13.332 6.04169 13.332 4.16669V1.66669L18.332 6.66669Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
);

export default function RefralButton({ referralData }: { referralData: RefrraDataType }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar('کپی شد', 'success');
    } catch (err) {
      console.error('failed to copy', err);
    }
  };

  const cardStyle: SxProps = {
    cursor: 'pointer',
    borderRadius: 3,
    py: { xs: 1.5, sm: 2.25 },
    px: { xs: 1.5, sm: 2.5 },
    flex: 1,
    minWidth: 0,
    bgcolor: isDarkMode
      ? alpha(theme.palette.primary.main, 0.08)
      : alpha(theme.palette.primary.main, 0.05),
    border: '1px solid',
    borderColor: isDarkMode
      ? alpha(theme.palette.primary.main, 0.25)
      : alpha(theme.palette.primary.main, 0.15),
    transition: 'all 0.2s ease',
    '&:hover': {
      bgcolor: isDarkMode
        ? alpha(theme.palette.primary.main, 0.14)
        : alpha(theme.palette.primary.main, 0.1),
      borderColor: theme.palette.primary.main,
    },
  };

  const iconWrapStyle: SxProps = {
    width: { xs: 26, sm: 32 },
    height: { xs: 26, sm: 32 },
    borderRadius: '50%',
    bgcolor: alpha(theme.palette.primary.main, 0.12),
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{
        width: '100%',
        gap: { xs: 1.25, sm: 2 },
        alignItems: 'stretch',
        mt: 3,
      }}
    >
      <Stack component="div" onClick={() => handleClick(referralData.referral_code)} sx={cardStyle}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          sx={{ minWidth: 0 }}
        >
          <Stack direction="row" alignItems="center" gap={1} sx={{ flexShrink: 0 }}>
            <Stack sx={iconWrapStyle}>
              <CopyIcon />
            </Stack>
            <Typography
              sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}
              fontSize={{ xs: 12.5, sm: 15 }}
            >
              کد دعوت
            </Typography>
          </Stack>

          <Typography
            fontSize={{ xs: 13, sm: 20 }}
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
              flex: '0 1 auto',
              letterSpacing: 0.5,
              direction: 'rtl',
            }}
          >
            {referralData.referral_code}
          </Typography>
        </Stack>
      </Stack>

      {/* کپی لینک */}
      <Stack component="div" onClick={() => handleClick(referralData.referral_link)} sx={cardStyle}>
        <Stack direction="row" alignItems="center" gap={1} sx={{ minWidth: 0 }}>
          <Stack sx={iconWrapStyle}>
            <CopyIcon />
          </Stack>
          <Typography
            sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}
            fontSize={{ xs: 12.5, sm: 15 }}
          >
            لینک دعوت
          </Typography>
        </Stack>

        <Typography
          dir="ltr"
          fontSize={{ xs: 11, sm: 13 }}
          sx={{
            mt: 0.75,
            color: 'text.disabled',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
            display: 'block',
          }}
        >
          {referralData.referral_link}
        </Typography>
      </Stack>
    </Stack>
  );
}
