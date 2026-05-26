'use client';
import { ToggleItemsType } from '@/app/core/Types';
import { Button, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  item: ToggleItemsType;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  setMessage?: Dispatch<SetStateAction<string>>;
  setParams:React.Dispatch<React.SetStateAction<string>>
}
export default function FilterButton({ setParams,active, setActive, item, setMessage }: Props) {
  const theme = useTheme();
  
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Button
      variant="outlined"
      color="inherit"
       
      onClick={() => {
        setActive(item.value);
        setParams(item.value)
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
        borderColor: active === item.value ? 'primary.main' : 'background.paper',
        bgcolor: active === item.value ? (isDarkMode ? '#3F3817' : '#FEF2C0') : 'background.default',
        color:
          active === item.value ? (isDarkMode ? 'primary.main' : 'text.secondary') : 'text.secondary',
      }}
    >
      {item.title}
    </Button>
  );
}
