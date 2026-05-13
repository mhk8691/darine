import { cookies } from 'next/headers';

export async function getServerToken() {
  const cookieStore = await cookies();

  return {
    access: cookieStore.get('accessToken')?.value || null,

    refresh: cookieStore.get('refreshToken')?.value || null,
  };
}
