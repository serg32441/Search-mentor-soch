import { useState } from 'react';
import { posts as initialPosts } from '../data/mockData';
import PostCard from '../components/PostCard';
import { Post } from '../types';

export default function PublicationsPage() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddComment = (postId: number, text: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now(),
                  author: 'Гость',
                  text,
                  date: new Date().toISOString().split('T')[0],
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <div className="publications-page">
      <header className="page-header">
        <h1>📚 Публикации</h1>
        <p>Статьи и размышления от духовных наставников</p>
      </header>

      <div className="posts-list">
        {posts.map(post => (
          <PostCard key={post.id} post={post} onAddComment={handleAddComment} />
        ))}
      </div>
    </div>
  );
}
