'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
  InputAdornment,
} from '@mui/material';
import * as React from 'react';

export interface SelectItem {
  label: string;
  value: string;
}

interface Props {
  itemsList?: SelectItem[];
  label: string;
  isOrederDetail: boolean;
  style?: SxProps;
  maxWidth?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectField({
  label,
  itemsList,
  isOrederDetail,
  style,
  maxWidth,
  value = '',
  setValue,
}: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;

    const handleScroll = () => setOpen(false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue?.(event.target.value);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue?.('');
    setOpen(false);
  };

  const selectedItem = itemsList?.find((item) => item.value === value);
  const hasValue = Boolean(value);

  return (
    <FormControl sx={{ maxWidth: maxWidth || '100%', width: '100%' }}>
      <Select
        displayEmpty
        value={value}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        input={<OutlinedInput />}
        sx={{
          borderRadius: '8px',
          color: 'text.primary',
          fontSize: '18px',
          '& .MuiSelect-icon': {
            right: 8,
            left: 'auto',
            color: 'text.primary',
          },
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            py: 0.9,
            pr: 1,
          },
          ...style,
        }}
        renderValue={() => {
          if (!selectedItem) {
            return (
              <Typography sx={{ color: '#7C7C7C' }}>
                {label}
              </Typography>
            );
          }

          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Stack direction="row" alignItems="center" gap={0.5}>
                {isOrederDetail && <Typography>{label}</Typography>}

                <Typography
                  sx={{
                    color: isOrederDetail ? '#B29727' : 'text.title',
                  }}
                >
                  {selectedItem.label}
                </Typography>
              </Stack>

              {hasValue && (
                <InputAdornment
                  position="end"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onClick={handleClear}
                  sx={{
                    cursor: 'pointer',
                    ml: 1,
                  }}
                >
                  <CloseIcon fontSize="small" />
                </InputAdornment>
              )}
            </Box>
          );
        }}
      >
        {itemsList?.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            sx={{
              color: 'text.primary',
              '&.Mui-selected': {
                bgcolor: 'background.default',
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}