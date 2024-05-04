'use client';

import { Post as IPost } from '@/model/Post';
import Post from '@/app/(afterLogin)/_component/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserPosts } from '@/app/(afterLogin)/[username]/_lib/getUserPosts';

type Props = { username: string };

export default function UserPosts({ username }: Props) {
  const { data } = useQuery<IPost[], object, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh -> stale
    gcTime: 5 * 60 * 1000, // 기본값이 5분이다.
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]);

  if (user) {
    return (
      <>
        {data?.map((post) => {
          return <Post key={post.postId} post={post} />;
        })}
      </>
    );
  }

  return null;
}
