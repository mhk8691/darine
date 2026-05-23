'use client';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import * as React from 'react';

interface Props {
  itemsList: string[];
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
  value,
  setValue,
}: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;

    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  const MenuProps = {
    slotProps: {
      paper: {
        sx: {
          border: 1,
          borderColor: 'background.border',
          bgcolor: 'background.default',
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          mt: 0.5,
        },
      },
    },
  };

  const handleChange = (event: SelectChangeEvent) => {
    setValue && setValue(event.target.value);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue && setValue('');
  };

  return (
    <FormControl sx={{ maxWidth: maxWidth || '100%', width: '100%' }}>
      <Select
        displayEmpty
        value={value}
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
        open={open}
        IconComponent={KeyboardArrowDownIcon}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        sx={{
          borderRadius: '8px',
          color: 'text.primary',
          fontSize: '18px',
          '& .MuiSelect-icon': {
            right: 8,
            left: 'auto',
            color: 'text.primary',
            display: !isOrederDetail ? 'block' : isOrederDetail && value ? 'none' : 'block',
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
          if (!value) {
            return (
              <Typography
                sx={{
                  color: '#7C7C7C',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  position: 'absolute ',
                }}
              >
                {label}
              </Typography>
            );
          }

          return (
            value && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                  {isOrederDetail && <Typography>{label}</Typography>}
                  <Typography
                    variant="body1"
                    sx={{ color: isOrederDetail ? '#B29727' : 'text.title' }}
                  >
                    {value}
                  </Typography>
                </Stack>

                {isOrederDetail && (
                  <IconButton
                    size="small"
                    onClick={handleClear}
                    onMouseDown={(e) => e.stopPropagation()}
                     
                    sx={{
                      color: '#FFFFFF',
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            )
          );
        }}
      >
        {itemsList.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              color: 'text.primary',
              '&.Mui-selected': {
                bgcolor: 'background.default',
              },
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
