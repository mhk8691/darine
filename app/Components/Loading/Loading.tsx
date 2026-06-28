import { CSSProperties } from '@mui/material';
import {  HashLoader } from 'react-spinners'
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};
export default function Loading({size}:{size:number}) {
  return (
    <HashLoader
          color={'#FCD535'}
          loading={true}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
  )
}
