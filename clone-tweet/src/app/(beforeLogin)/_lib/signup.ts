'use server';

import { redirect } from 'next/navigation';

export default async (prevState: any, formData: FormData) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' };
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return { message: 'no_password' };
  }
  if (!formData.get('image')) {
    return { message: 'no_image' };
  }
  let shouldRedirect = false;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'post',
      body: formData,
      credentials: 'include',
    });
    console.log(response.status);
    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    console.log(await response.json());
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return { message: null };
  }
  if (shouldRedirect) {
    redirect('/home');
  }
};
