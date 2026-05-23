'use client';
import { ToggleItemsType } from '@/app/core/Types';
import { Button, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  item: ToggleItemsType;
  active: number | null;
  setActive: Dispatch<SetStateAction<number | null>>;
  setMessage?: Dispatch<SetStateAction<string>>;
}
export default function FilterButton({ active, setActive, item, setMessage }: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Button
      variant="outlined"
      color="inherit"
       
      onClick={() => {
        setActive(item.id);
        if (setMessage) {
          setMessage(item.emptyMessage || '');
        }
      }}
      sx={{
        py: 0.75,
        fontSize: {
          xs: 12,
          sm: 16,
        },
        width: 'fit-content',
        borderRadius: '999px',
        px: 2,
        borderColor: active === item.id ? 'primary.main' : 'background.paper',
        bgcolor: active === item.id ? (isDarkMode ? '#3F3817' : '#FEF2C0') : 'background.default',
        color:
          active === item.id ? (isDarkMode ? 'primary.main' : 'text.secondary') : 'text.secondary',
      }}
    >
      {item.title}
    </Button>
  );
}
