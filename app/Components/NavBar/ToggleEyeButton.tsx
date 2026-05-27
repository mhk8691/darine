'use client';
import { useAssets } from '@/app/AssetsProvider';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';

export default function ToggleEyeButton() {
  const { isVisible, setIsVisible } = useAssets();

  const handleClick = () => {
    const nextState = !isVisible; 
    setIsVisible(nextState); 
    localStorage.setItem('eyeState', String(nextState));
  };

  return (
    <IconButton onClick={handleClick}>
      {isVisible ? (
        <VisibilityOutlinedIcon sx={{ color: '#F9E387' }} fontSize="small" />
      ) : (
        <VisibilityOffOutlinedIcon sx={{ color: '#F9E387' }} fontSize="small" />
      )}
    </IconButton>
  );
}