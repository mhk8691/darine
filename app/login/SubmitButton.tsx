import { Button } from '@mui/material';
import Loading from '../Components/Loading/Loading';
interface Props {
  title: string;
  isLoading: boolean;
  handleSubmit?: () => Promise<void>;
  type?:'submit' | 'button'
}

export default function SubmitButton({ title, handleSubmit, isLoading,type='button' }: Props) {
  return (
    <Button
    type={type}
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
        width:'100%'
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
