'use client';

import { CartIcon } from '@/app/Components/CustomIcons/CustomIcons';
import { showSnackbar } from '@/app/Components/Snackbar/Snackbar';
import FilterButton from '@/app/Components/Tables/DetailTable/FilterButton';
import {
  CartItem,
  CategoriesDataType,
  ToggleItemsType,
} from '@/app/core/Types';
import { getCategories } from '@/lib/getCategories/getCategories';
import { Badge, BadgeProps, IconButton, Stack, styled } from '@mui/material';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

interface Props {
  cart: CartItem[];
  setProductParams: Dispatch<SetStateAction<string>>;
}

export default function Filter({
  cart,
  setProductParams,
}: Props) {
  const router = useRouter();

  const [toggleItems, setToggleItems] = useState<ToggleItemsType[]>([]);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();

        const items: ToggleItemsType[] = response.data.map(
          (item: CategoriesDataType) => ({
            id: item.id,
            title: item.name,
            value: item.slug,
          })
        );

        setToggleItems(items);

        if (items.length > 0) {
          setActive(items[0].value);
          setProductParams(items[0].value);
        }
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          showSnackbar(
            error.response?.data?.message ||
              'خطا در دریافت دسته‌بندی‌ها'
          );
        } else {
          showSnackbar('خطایی رخ داد');
        }
      }
    };

    fetchCategories();
  }, [setProductParams]);

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Stack direction="row" gap={1.5}>
        {toggleItems.map((item) => (
          <FilterButton
            key={item.id}
            active={active}
            setActive={setActive}
            item={item}
            setParams={setProductParams}
          />
        ))}
      </Stack>

      <IconButton
        onClick={() => router.push('/gold-shop-basket')}
      >
        <StyledBadge
          badgeContent={totalQuantity}
          color="error"
        >
          <CartIcon />
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}