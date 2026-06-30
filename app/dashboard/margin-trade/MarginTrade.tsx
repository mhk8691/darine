'use client';
import Card from '@/app/Components/Containers/Container/Container';
import CustomTabs from '@/app/Components/Tabs/CustomTabs';
import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';
import Trading from './Trading';
import Link from 'next/link';
import BackLink from '../BackLink';

const tabs = [{ title: 'فروش ' }];
const children: ReactNode[] = [<Trading key={1} />];

export default function MarginTrade() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('eyeState');
    if (stored !== null) {
      setVisible(stored === 'true');
    }
  }, []);

  return (
    <>
 {!isDesktop &&   <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} mb={2}>
                <BackLink title="سفارش با قیمت" />
               <Typography component={Link} href={'/'}  variant="h2" fontSize={18} sx={{cursor:'pointer',textDecoration:'underline',color:'#0091F8'}}>
               راهنما
              </Typography>
             </Stack>}
    <Card style={{ px: 0 }}>
      <Stack px={4}>
        {isDesktop && (
         
               <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}  mb={2}>
           <Typography variant="h2" fontSize={22}>
             سفارش تعهدی
          </Typography>
           <Typography component={Link} href={'/'}  variant="h2" fontSize={22} sx={{textDecoration:'underline',color:'#0091F8',cursor:'pointer'}}>
           راهنما
          </Typography>
         </Stack>
        )}
      </Stack>

      {isDesktop ? <CustomTabs tabList={tabs}>{children}</CustomTabs> : <>{children}</>}
    </Card>
    </>
  );
}
