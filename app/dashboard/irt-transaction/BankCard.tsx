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



const CardItem = ({ item }: { item: BankCardDataType}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      width: '100%',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {/* <Image src={item.icon} width={24} height={24} alt="" /> */}
      <Typography fontSize={12} sx={{ color: 'text.muted' }}>
        {item.bank_name}
      </Typography>
    </Box>

    <Typography fontSize={16} sx={{ color: 'text.title', direction: 'rtl' }}>
      {item.card_number}
    </Typography>
  </Box>
);

export default function BankCards({bankCardsData,setBankCardsData,setSelectedCard,selectedCard}:{bankCardsData:BankCardDataType[],setBankCardsData:React.Dispatch<React.SetStateAction<BankCardDataType[]>>,setSelectedCard:React.Dispatch<React.SetStateAction<number>>,selectedCard:number}) {
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
      <Stack>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <FormControl
            sx={{
              width: '100%',
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
              borderColor: 'background.paper !imporant',
            }}
          >
            <InputLabel
              shrink={open || !!selectedCard}
              sx={{
                position: 'absolute',
                right: 12,
                bgcolor: 'background.default',
                px: 1,
                fontSize: 16,
                color: 'text.muted',
                width: 'fit-content',
              }}
            >
              انتخاب کارت بانکی
            </InputLabel>

            <Box
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                border: '1px solid',
                borderRadius: '8px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 1.5,
                cursor: 'pointer',
                transition: '0.2s',
                borderColor: 'background.paper',
              }}
            >
              {selectedItem ? <CardItem item={selectedItem} /> : <Stack></Stack>}

              <KeyboardArrowDownIcon
                style={{
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: '0.2s',
                  color: 'text.muted',
                  zIndex: 2,
                }}
              />
            </Box>

            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '98%',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(-10px)' : 'translateY(-40px)',
                pointerEvents: open ? 'auto' : 'none',
                transition: '0.25s',
                zIndex: 10,
                bgcolor: 'background.default',
                borderRadius: 0,
                mx: 0.5,
              }}
            >
              {bankCardsData.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  sx={{
                    py: 2,
                    px: 2,
                    '&.Mui-selected': {
                      bgcolor: 'background.default',
                    },
                  }}
                >
                  <CardItem item={item} />
                </MenuItem>
              ))}
            </Paper>
          </FormControl>
        </ClickAwayListener>
        <Button
          onClick={() => setOpenModal(true)}
          variant="outlined"
          color="inherit"
          disableRipple
          sx={{
            '&:hover': {
              bgcolor: 'background.default',
            },
            width: 'fit-content',
            fontSize: {
              xs: 12,
              sm: 16,
            },
            borderRadius: 2,
            py: 0.75,
            px: 3,
            mt: 2.5,
          }}
          startIcon={
            <SvgIcon
              sx={{
                width: {
                  xs: 20,
                  sm: 30,
                },
                height: {
                  xs: 20,
                  sm: 30,
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
          افزودن کارت
        </Button>
      </Stack>
      <AddCard open={openModal} setOpen={setOpenModal} value={cardValue} setValue={setCardValue} setBankCardData={setBankCardsData} />
    </>
  );
}
