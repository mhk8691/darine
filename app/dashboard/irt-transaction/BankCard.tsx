'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  Button,
  ClickAwayListener,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import * as React from 'react';
import AddCard from '../bank-card/AddCard';
import { BankCardDataType } from '@/app/core/Types';
import Image from 'next/image';
import { getBankInfoWithSheba } from 'ir-banks-info';

const CardItem = ({ item }: { item: BankCardDataType }) => {
  const bankInfo = item?.shaba_number ? getBankInfoWithSheba(item.shaba_number) : null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        gap: 0.5,
      }}
    >
      {/* بخش نام دارنده حساب - با اولویت کوچک شدن در صورت کمبود فضا */}
      <Typography
        sx={{
          fontSize: { xs: 10, sm: 12 },
          color: 'text.muted',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flexShrink: 1, // اجازه کوچکتر شدن نام در صورت کمبود فضا
          minWidth: 0,
        }}
      >
        {item.owner_full_name}
      </Typography>

      {/* بخش شماره شبا و لوگو */}
      {item.shaba_number && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: { xs: 0.5, sm: 1 },
            direction: 'ltr',
            flexShrink: 0, // شماره شبا نباید کلا محو شود
            maxWidth: '75%', // حداکثر ۷۵ درصد از کادر را اشغال کند
            overflow: 'hidden',
          }}
        >
        

          <Typography
            variant="body2"
            sx={{
              color: 'text.muted',
              fontSize: { xs: '0.68rem', sm: '0.85rem' }, // سایز دقیق و ریسپونسیو
              fontFamily: 'monospace',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              direction: 'ltr',
            }}
          >
            IR{item.shaba_number}
          </Typography>
            {bankInfo?.logo && (
            <Box
              sx={{
                width: { xs: 18, sm: 24 },
                height: { xs: 18, sm: 24 },
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <Image
                src={bankInfo.logo + ''}
                alt={bankInfo.name || 'بانک'}
                width={24}
                height={24}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default function BankCards({
  bankCardsData,
  setBankCardsData,
  setSelectedCard,
  selectedCard,
}: {
  bankCardsData: BankCardDataType[];
  setBankCardsData: React.Dispatch<React.SetStateAction<BankCardDataType[]>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
  selectedCard: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const selectedItem = bankCardsData.find((item) => item.id === selectedCard);
  const [cardValue, setCardValue] = React.useState('');

  const handleSelect = (id: number) => {
    setSelectedCard(id);
    setOpen(false);
  };

  return (
    <>
      <Stack sx={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        {bankCardsData.length > 0 && (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <FormControl
              sx={{
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
                position: 'relative',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'background.paper',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'background.paper',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'background.paper',
                },
              }}
            >
              <InputLabel
                shrink={open || !!selectedCard}
                sx={{
                  position: 'absolute',
                  right: 12,
                  bgcolor: 'background.default',
                  px: 0.8,
                  fontSize: { xs: 12, sm: 14 },
                  color: 'text.muted',
                  width: 'fit-content',
                }}
              >
                انتخاب شماره شبا
              </InputLabel>

              {/* کانتینر اصلی باکس انتخاب */}
              <Box
                onClick={() => setOpen((prev) => !prev)}
                sx={{
                  border: '1px solid',
                  borderRadius: '8px',
                  minHeight: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: { xs: 1, sm: 1.5 },
                  cursor: 'pointer',
                  transition: '0.2s',
                  borderColor: 'background.paper',
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  overflow: 'hidden', // جلوگیری از بیرون زدن محتوا از background
                  gap: 0.5,
                }}
              >
                <Box sx={{ flexGrow: 1, minWidth: 0, overflow: 'hidden' }}>
                  {selectedItem ? <CardItem item={selectedItem} /> : <Stack />}
                </Box>

                <KeyboardArrowDownIcon
                  sx={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: '0.2s',
                    color: 'text.muted',
                    zIndex: 2,
                    flexShrink: 0,
                    fontSize: { xs: 20, sm: 24 },
                  }}
                />
              </Box>

              {/* منوی بازشونده (Dropdown) - دقیقاً هم‌عرض باکس اصلی بدون زدگی */}
              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  maxWidth: '100%',
                  boxSizing: 'border-box',
                  maxHeight: '220px',
                  overflowY: 'auto',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(4px)' : 'translateY(-10px)',
                  pointerEvents: open ? 'auto' : 'none',
                  transition: '0.2s ease-in-out',
                  zIndex: 10,
                  bgcolor: 'background.default',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'divider',
                  mt: 0.5,
                }}
              >
                {bankCardsData.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    sx={{
                      py: { xs: 1.25, sm: 1.5 },
                      px: { xs: 1, sm: 2 },
                      width: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&:last-child': {
                        borderBottom: 'none',
                      },
                      '&.Mui-selected': {
                        bgcolor: 'action.selected',
                      },
                    }}
                  >
                    <CardItem item={item} />
                  </MenuItem>
                ))}
              </Paper>
            </FormControl>
          </ClickAwayListener>
        )}

        <Button
          onClick={() => setOpenModal(true)}
          variant="outlined"
          color="inherit"
          sx={{
            '&:hover': {
              bgcolor: 'background.default',
            },
            width: 'fit-content',
            fontSize: {
              xs: 11,
              sm: 14,
            },
            borderRadius: 2,
            py: { xs: 0.6, sm: 0.75 },
            px: { xs: 1.5, sm: 3 },
            mt: 2,
          }}
          startIcon={
            <SvgIcon
              sx={{
                width: {
                  xs: 18,
                  sm: 24,
                },
                height: {
                  xs: 18,
                  sm: 24,
                },
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41406 10.7715H16.3099"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.25 20.4375H9.66667"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.6875 20.4375H17.5208"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M26.5807 15.0356V19.9656C26.5807 24.2069 25.5053 25.2702 21.2157 25.2702H7.77906C3.48948 25.2702 2.41406 24.2069 2.41406 19.9656V10.0331C2.41406 5.79185 3.48948 4.72852 7.77906 4.72852H16.3099"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.9375 8.05273H26.5833"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M23.2578 11.3743V4.72852"
                  stroke="currentColor"
                  strokeWidth="1.8125"
                  strokeLinecap="round"
                ></path>
              </svg>
            </SvgIcon>
          }
        >
          افزودن شماره شبا
        </Button>
      </Stack>

      <AddCard
        open={openModal}
        setOpen={setOpenModal}
        value={cardValue}
        setValue={setCardValue}
        setBankCardData={setBankCardsData}
      />
    </>
  );
}