import style from '@/app/(afterLogin)/home/home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import { Suspense } from 'react';
import TabDeciderSuspense from '@/app/(afterLogin)/home/_component/TabDeciderSuspense';
import Loading from '@/app/(afterLogin)/home/loading';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
