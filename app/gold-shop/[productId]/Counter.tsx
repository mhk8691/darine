'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Stack, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  onDelete?: () => void;
  handleChange?:(quantity: number) => Promise<void>
}

export default function Counter({ count, setCount, onDelete,handleChange }: Props) {
const handleAdd = () => {
  const nextCount = count + 1;
  setCount(nextCount);
  handleChange?.(nextCount); 
};

const handleRemove = () => {
  if (count === 1) {
    onDelete?.();
  } else {
    const nextCount = count - 1;
    setCount(nextCount);
    handleChange?.(nextCount);
  }
};


  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: '1px solid #333333',
        borderRadius: 2,
        width: '120px',
      }}
    >
      <IconButton onClick={handleAdd} disableRipple>
        <AddIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>

      <Typography fontWeight={600}>{count}</Typography>

      <IconButton onClick={handleRemove} disableRipple>
        {count <= 1 ? (
          <DeleteIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        ) : (
          <RemoveIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        )}
      </IconButton>
    </Stack>
  );
}
