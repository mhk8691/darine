import { Stack } from '@mui/material';
import Loading from './Components/Loading/Loading';

export default function loading() {
  return (
    <Stack direction={'row'} alignItems={'center'} height={'90vh'} justifyContent={'center'}>
      <Stack zIndex={10}>
        <Loading size={50} />
      </Stack>
    </Stack>
  );
}
