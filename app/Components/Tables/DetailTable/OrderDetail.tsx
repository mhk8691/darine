'use client';
import { ToggleItemsType } from '@/app/core/Types';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import Card from '../../Containers/Container/Container';
import CustomDatePicker from '../../DatePicker/CustomDatePicker';
import FilterToggleButton from '../../FilterToggleButton/FilterToggleButton';
import SelectField from '../../InputField/SelectField';
import FilterButton from './FilterButton';
import CustomTable from '../CustomTable';
interface Props {
  title?: string;
  type: 'chip' | 'toggle';
  toggleItems: ToggleItemsType[];
  noCard?: boolean;
  emptyMessage?: string;
  tableBody: ReactNode;
  tableHead: string[];
  listLength: number;
  setParams?:React.Dispatch<React.SetStateAction<string>>
}
const names = ['تکمیل شده', 'در انتظار تایید', 'لغو شده'];
export default function OrderDetail({
  title,
  type,
  toggleItems,
  noCard = false,
  emptyMessage,
  tableBody,
  tableHead,
  listLength,
  setParams
}: Props) {
  const [active, setActive] = useState(toggleItems[0]?.value);
  const [select, setSelect] = useState(toggleItems[0]?.value);
  const [message, setMessage] = useState(toggleItems[0]?.emptyMessage || '');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [value, setValue] = useState('');
  return noCard ? (
    <>
      {title && (
        <Typography
          variant="h2"
          mb={4}
          fontWeight={500}
          sx={{
            color: 'text.primary',
            fontSize: {
              xs: 16,
              md: 22,
            },
          }}
        >
          {title}
        </Typography>
      )}
      {toggleItems.length != 0 && (
        <>
          {type === 'chip' ? (
            <Stack direction={'row'} gap={2} mb={3} flexWrap={'wrap'}>
              {toggleItems.map((item) => (
                <FilterButton
                  key={item.id}
                  item={item}
                  active={active}
                  setActive={setActive}
                  setMessage={setMessage}
                  setParams={setParams}
                />
              ))}
            </Stack>
          ) : (
            <Stack mb={3} width={'fit-content'}>
              <FilterToggleButton
              setParams={setParams}
                items={toggleItems}
                select={select}
                setMessage={setMessage}
                setSelect={setSelect}
                style={{
                  fontSize: {
                    xs: '12px',
                    sm: '16px',
                  },
                  px: {
                    xs: 1.5,
                    sm: 3,
                  },
                }}
              />
            </Stack>
          )}
        </>
      )}
      <Stack gap={2} direction={'row'} alignItems={'center'}>
        <Stack
          direction={'row'}
          gap={0.5}
          display={{
            xs: 'none',
            sm: 'flex',
          }}
        >
          <FilterListIcon sx={{ color: 'text.subtitle' }} />
          <Typography variant="body2" sx={{ color: 'text.subtitle' }}>
            فیلترها:
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          gap={2}
          width={'100%'}
          sx={{
            '& > *': {
              flex: 1,
            },
          }}
        >
          <SelectField label="وضعیت" itemsList={names} isOrederDetail maxWidth="260px" />
          <CustomDatePicker />
        </Stack>
      </Stack>
       {listLength > 0 ? (
        <Stack mt={5}>
          <CustomTable heads={tableHead}>{tableBody}</CustomTable>
        </Stack>
      ) : (
      <Stack
        mt={10}
        mb={8}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={4}
      >
        <Stack
          sx={{
            width: {
              xs: 184,
              sm: 300,
            },
            height: {
              xs: 166,
              sm: 270,
            },
          }}
        >
          <Image
            src={`/images/${isDarkMode ? 'emptyTableDark.png' : 'emptyTable.webp'}`}
            width={300}
            height={270}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt=""
          />
        </Stack>
        <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
          {emptyMessage || message}
        </Typography>
      </Stack>
      )}
    </>
  ) : (
    <Card
      style={{
        px: {
          xs: 0,
          sm: 4,
        },
        border: {
          xs: 0,
          sm: 1,
        },
        borderColor: {
          sm: 'background.paper',
        },
      }}
    >
      {title && (
        <Typography
          variant="h2"
          fontSize={{
            xs: 16,
            sm: 22,
          }}
          mb={{ xs: 2, sm: 4 }}
          fontWeight={500}
          sx={{ color: 'text.title' }}
        >
          {title}
        </Typography>
      )}
      {toggleItems.length != 0 && (
        <>
          {type === 'chip' ? (
            <Stack
              direction={'row'}
              gap={{
                xs: 1,
                sm: 2,
              }}
              mb={3}
              flexWrap={'wrap'}
            >
              {toggleItems.map((item) => (
                <FilterButton
                  key={item.id}
                  item={item}
                  active={active}
                  setActive={setActive}
                  setMessage={setMessage}
                  setParams={setParams}
                />
              ))}
            </Stack>
          ) : (
            <Stack mb={3} width={'fit-content'}>
              <FilterToggleButton
                items={toggleItems}
                select={select}
                setSelect={setSelect}
                setParams={setParams}
                setMessage={setMessage}
                style={{
                  fontSize: {
                    xs: '12px',
                    sm: '16px',
                  },
                }}
              />
            </Stack>
          )}
        </>
      )}
      <Stack gap={2} direction={'row'} alignItems={'center'}>
        <Stack
          direction={'row'}
          gap={0.5}
          display={{
            xs: 'none',
            sm: 'flex',
          }}
        >
          <FilterListIcon sx={{ color: 'text.subtitle' }} />
          <Typography variant="body2" sx={{ color: 'text.subtitle' }}>
            فیلترها:
          </Typography>
        </Stack>
        <Stack
          direction={'row'}
          gap={2}
          width={'100%'}
          sx={{
            '& > *': {
              flex: 1,
            },
          }}
        >
          <SelectField
            itemsList={names}
            label="وضعیت"
            isOrederDetail={true}
            maxWidth="260px"
            value={value}
            setValue={setValue}
          />
          <CustomDatePicker />
        </Stack>
      </Stack>
      {listLength > 0 ? (
        <Stack mt={5}>
          <CustomTable heads={tableHead}>{tableBody}</CustomTable>
        </Stack>
      ) : (
        <Stack
          mt={10}
          mb={8}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={4}
        >
          <Image
            src={`/images/${isDarkMode ? 'emptyTableDark.png' : 'emptyTable.webp'}`}
            width={300}
            height={270}
            alt=""
          />
          <Typography variant="body2" fontSize={12} sx={{ color: 'text.muted' }}>
            {emptyMessage || message}
          </Typography>
        </Stack>
      )}
    </Card>
  );
}
