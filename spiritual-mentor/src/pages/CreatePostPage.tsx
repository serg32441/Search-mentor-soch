import React, { useState } from 'react';

const CreatePostPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Публикация создана!\n\nЗаголовок: ${formData.title}\n\nСодержание: ${formData.content}`);
    setFormData({ title: '', content: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '700px', margin: '0 auto' }}>
      <h2 className="section-title">Создать публикацию</h2>
      
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Заголовок</label>
          <input
            type="text"
            name="title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
            placeholder="Введите заголовок публикации"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Содержание</label>
          <textarea
            name="content"
            className="form-input form-textarea"
            value={formData.content}
            onChange={handleChange}
            placeholder="Напишите вашу публикацию..."
            style={{ minHeight: '300px' }}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          📝 Опубликовать
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
