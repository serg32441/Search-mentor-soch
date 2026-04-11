import { Priest } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  priest: Priest | null;
  onSend: (message: string) => void;
}

export default function Modal({ isOpen, onClose, priest, onSend }: ModalProps) {
  if (!isOpen || !priest) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textarea = document.getElementById('message-text') as HTMLTextAreaElement;
    if (textarea && textarea.value.trim()) {
      onSend(textarea.value);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>✉️ Сообщение {priest.name}</h2>
        <form onSubmit={handleSubmit}>
          <textarea 
            id="message-text"
            placeholder="Введите ваше сообщение..." 
            rows={5}
            required
          />
          <div className="modal-actions">
            <button type="submit" className="btn-send">Отправить</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
}
