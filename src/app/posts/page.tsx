'use client';

import { useEffect, useState } from 'react';

import { getPostsApi } from '@/network/apis/posts';

const FakePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await getPostsApi();
      setPosts(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <div>{post.title}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FakePosts;
