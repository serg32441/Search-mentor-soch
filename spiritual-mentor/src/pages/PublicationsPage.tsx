import React, { useState } from 'react';
import { mockPosts, mockComments } from '../data/mockData';
import PostCard from '../components/PostCard';

const PublicationsPage: React.FC = () => {
  const [newComment, setNewComment] = useState('');

  const getCommentsForPost = (postId: number) => {
    return mockComments.filter(c => c.postId === postId);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      alert(`Комментарий добавлен!\n\n${newComment}`);
      setNewComment('');
    }
  };

  return (
    <div className="container posts-section">
      <h2 className="section-title">Публикации священников</h2>
      <div className="posts-grid">
        {mockPosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            comments={getCommentsForPost(post.id)}
          />
        ))}
      </div>

      <h2 className="section-title">Оставить комментарий</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label className="form-label">Ваш комментарий</label>
          <textarea
            className="form-input form-textarea"
            placeholder="Напишите ваш комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{ minHeight: '100px' }}
          />
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handleAddComment}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          💬 Добавить комментарий
        </button>
      </div>
    </div>
  );
};

export default PublicationsPage;
