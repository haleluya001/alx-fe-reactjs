import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['posts'],
    fetchPosts,
    {
      staleTime: 1000 * 60,           // 1 minute
      cacheTime: 1000 * 60 * 5,       // 5 minutes
      refetchOnWindowFocus: true,     // refetch when window gains focus
      keepPreviousData: true          // keep old data while fetching new data
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: '10px' }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
