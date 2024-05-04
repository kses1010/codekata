'use client';

import { useQuery } from '@tanstack/react-query';
import Post from '@/app/(afterLogin)/_component/Post';
import { Post as IPost } from '@/model/Post';
import { getFollowingPosts } from '@/app/(afterLogin)/home/_lib/getFollowingPosts';

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale
    gcTime: 5 * 60 * 1000, // 기본값이 5분이다.
  });

  return (
    <>
      {data?.map((post) => {
        return <Post key={post.postId} post={post} />;
      })}
    </>
  );
}
