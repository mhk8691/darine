import { ToggleItemsType } from '@/app/core/Types';
import { Box, SxProps } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';

interface Props {
  items: ToggleItemsType[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  style?: SxProps;
  setMessage?: React.Dispatch<React.SetStateAction<string>>;
  setParams?:React.Dispatch<React.SetStateAction<string>>
  handleClick ?: ()=>void
}

export default function FilterToggleButton({setParams, items, active, setActive, style, setMessage,handleClick }: Props) {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      handleClick &&  handleClick()
      setActive(newAlignment);
      setParams&&setParams(newAlignment)
    }
  };

  const activeIndex = items.findIndex((i) => i.value === active);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'background.paper',
        borderRadius: '6px',
        p: '4px',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 4,
          left: 4,
          height: 'calc(100% - 8px)',
          width: `calc(${100 / items.length}% - 8px)`,
          bgcolor: 'background.paper',
          borderRadius: '6px',
          transition: 'transform 0.3s ease',
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      <ToggleButtonGroup
        value={active}
        exclusive
        onChange={handleChange}
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          minWidth: 0,
          px: 0,
          flex: '1 1 0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {items.map((item) => (
          <ToggleButton
            key={item.value}
            value={item.value}
             
            onClick={() => {
              if (setMessage) {
                setMessage(item.emptyMessage || '');
              }
            }}
            sx={{
              border: 'none',
              borderRadius: '6px !important',
              color: 'text.subtitle',
              px: { xs: 1, sm: 2, md: 1, lg: 1 },
              width: '100%',
              minWidth: { xs: '80px', sm: '80px', md: 'auto' },
              whiteSpace: 'nowrap',
              py: 0.8,
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              transition: 'all .2s ease-in',
              backgroundColor: 'background.paper',
              flex: 1,
              '&.Mui-selected': {
                color: 'text.primary',
                backgroundColor: 'background.default',
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'background.default',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              },
              ...style,
            }}
          >
            {item.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}
