import BASE_URL from '@/app/core/BASE_URL';
import { cookies } from 'next/headers';

export async function getServerUser() {
  const cookieStore = await cookies();
  
  // استفاده از نام صحیح کوکی: accessToken
  const accessToken = cookieStore.get('accessToken');

  if (!accessToken) return null;

  try {
    const res = await fetch(
      `${BASE_URL}/accounts/profile/`,
      {
        headers: {
          Cookie: `accessToken=${accessToken.value}`,
        },
        cache: 'no-store', // همیشه اطلاعات تازه بگیر
      },
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching user on server:', error);
    return null;
  }
}