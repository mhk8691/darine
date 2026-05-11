'use client';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(1);
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
      <IconButton onClick={() => setCount((prev) => prev + 1)} disableRipple>
        <AddIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>
      <Typography fontWeight={600}>{count}</Typography>

      <IconButton onClick={() => setCount((prev) => prev - 1)} disableRipple>
        <DeleteIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>
    </Stack>
  );
}
