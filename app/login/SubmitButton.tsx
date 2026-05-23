import { Button } from '@mui/material';
import Loading from '../Components/Loading/Loading';
interface Props {
  title: string;
  isLoading: boolean;
  handleSubmit?: () => Promise<void>;
}

export default function SubmitButton({ title, handleSubmit, isLoading }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        height:60,
        fontSize: {
          xs: 16,
          md: 20,
        },
        borderRadius: 2,
        mt: 3.5,
        '&.Mui-disabled': {
          bgcolor: '#393936',
        },
      }}
       
      onClick={handleSubmit}
      disabled={isLoading}
    >
      {
        isLoading ? <Loading size={30} />:title
      }
    </Button>
  );
}
