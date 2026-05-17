import BASE_URL from '@/app/core/BASE_URL';
import { cookies } from 'next/headers';

export async function getServerUser() {
  const cookieStore = await cookies();

  try {
    const cookieString = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');

    const res = await fetch(
      `${BASE_URL}/accounts/profile/`,
      {
        headers: {
          Cookie: cookieString,
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}