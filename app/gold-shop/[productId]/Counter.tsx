'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Stack, Typography } from '@mui/material';
import {  useState } from 'react';


export default function Counter() {
  const [count,setCount] = useState(0)
  
const handleAdd = () => {
  const nextCount = count + 1;
  setCount(nextCount);
};

const handleRemove = () => {
  if (count === 1) {
  } else {
    const nextCount = count - 1;
    setCount(nextCount);
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
      <IconButton onClick={handleAdd}  >
        <AddIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
      </IconButton>

      <Typography fontWeight={600}>{count}</Typography>

      <IconButton onClick={handleRemove}  >
        {count <= 1 ? (
          <DeleteIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        ) : (
          <RemoveIcon fontSize="small" sx={{ color: 'text.subtitle' }} />
        )}
      </IconButton>
    </Stack>
  );
}
