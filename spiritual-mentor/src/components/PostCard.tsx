import React from 'react';
import { Post, Comment } from '../types';

interface PostCardProps {
  post: Post;
  comments: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({ post, comments }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-author">{post.priestName}</span>
        <span className="post-date">{post.date}</span>
      </div>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
      
      {comments.length > 0 && (
        <div className="comments-section">
          <h4>Комментарии ({comments.length})</h4>
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-author">{comment.authorName}</div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-date">{comment.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
