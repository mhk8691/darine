import { Grid, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import BackLink from '../BackLink';
import Invite from './Invite';
export const metadata: Metadata = {
  title: 'طلا فروش شو | دارینه',
  description: '',
};
export default function page() {
  return (
    <Grid container spacing={3}>
      <BackLink title="طلا فروش شو" />

      <Grid
        size={12}
        container
        bgcolor={'background.default'}
        border={{
          xs: 0,
          sm: 1,
        }}
        borderColor={{
          sm: 'background.paper',
        }}
        py={3}
        px={{
          xs: 0,
          sm: 4,
        }}
        alignItems={'center'}
        borderRadius={2.5}
      >
        <Grid
          size={12}
          display={{
            xs: 'none',
            sm: 'block',
            md: 'none',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'text.title',
            }}
            fontSize={{
              xs: 16,
              sm: 22,
            }}
          >
            طلا فروش شو
          </Typography>
        </Grid>
       <Invite/>
        <Grid
          size={{
            xs: 12,
            md: 5,
            lg: 5,
          }}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Stack
              width={{
                xs: '90%',
                sm: '60%',
                md: '100%',
              }}
            >
              <Image
                alt=""
                width={417}
                height={185}
                src={'/images/mainDark.webp'}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
