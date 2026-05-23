import { Button } from '@mui/material';
interface Props {
  title: string;
  isDisable?: boolean;
  handleSubmit?: () => Promise<void>;
}
export default function SubmitButton({ title, handleSubmit, isDisable }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        py: 1.4,
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
      disabled={isDisable}
    >
      {title}
    </Button>
  );
}
