import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import priceFormater from '../core/PriceFormater';
import { ErrorArrowIcon, SuccessArrowIcon } from '../Components/CustomIcons/CustomIcons';
import { PricesDataType } from '../core/Types';
interface Props {
  title: string;
  data: PricesDataType[];
}
export default function PriceTables({ title, data }: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Stack border={1} borderColor={'background.border'} borderRadius={2}>
      <Stack
        bgcolor={'background.paper'}
        py={2}
        px={4}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      >
        <Typography variant="body1" fontSize={16} sx={{ color: 'text.subtitle' }}>
          {title}
        </Typography>
      </Stack>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Stack
            py={2}
            pl={4}
            pr={2}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="body1" fontSize={16}>
              {item.type}
            </Typography>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Typography variant="body1" fontSize={16}>
                {priceFormater(item.currentRate)}
              </Typography>
              <Chip
                variant="filled"
                label={
                  <Stack direction={'row'} gap={0.5}>
                    <Box component={'span'}>{item.dayChange} % </Box>

                    {item.dayChange > 0 ? <SuccessArrowIcon /> : <ErrorArrowIcon />}
                  </Stack>
                }
                sx={{
                  direction: 'rtl',
                  bgcolor:
                    item.dayChange < 0
                      ? isDarkMode
                        ? '#691818'
                        : '#fdc7c7'
                      : isDarkMode
                        ? '#1B4430'
                        : '#ECF7F2',
                  color: item.dayChange < 0 ? '#CC5151' : '#43AB64',
                  width: '85px',
                }}
              />
            </Stack>
          </Stack>
          {index !== data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Stack>
  );
}
