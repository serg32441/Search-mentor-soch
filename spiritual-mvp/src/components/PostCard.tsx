import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onAddComment: (postId: number, text: string) => void;
}

export default function PostCard({ post, onAddComment }: PostCardProps) {
  const newCommentRef = {} as React.RefObject<HTMLTextAreaElement>;
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const textarea = document.getElementById(`comment-${post.id}`) as HTMLTextAreaElement;
    if (textarea && textarea.value.trim()) {
      onAddComment(post.id, textarea.value);
      textarea.value = '';
    }
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className="post-author">✍️ {post.authorName}</p>
      <p className="post-date">{post.date}</p>
      <p className="post-content">{post.content}</p>
      
      <div className="comments-section">
        <h4>Комментарии ({post.comments.length})</h4>
        {post.comments.map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <span className="comment-date">{comment.date}</span>
            <p>{comment.text}</p>
          </div>
        ))}
        
        <form onSubmit={handleSubmitComment} className="comment-form">
          <textarea 
            id={`comment-${post.id}`}
            placeholder="Оставить комментарий..." 
            rows={3}
          />
          <button type="submit" className="btn-submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}
