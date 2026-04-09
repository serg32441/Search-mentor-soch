// Моковые данные священников
const priests = [
    {
        id: 1,
        name: "Отец Александр Петров",
        denomination: "Православие",
        city: "Москва",
        experience: 15,
        rating: 4.9,
        description: "Духовник с большим опытом пастырского служения. Специализируется на семейном консультировании и духовном окормлении молодежи.",
        avatar: "👨‍🦱"
    },
    {
        id: 2,
        name: "Отец Михаил Иванов",
        denomination: "Католицизм",
        city: "Санкт-Петербург",
        experience: 20,
        rating: 4.8,
        description: "Богослов и проповедник. Проводит регулярные встречи для молодых семей и изучающих католическую традицию.",
        avatar: "🧔"
    },
    {
        id: 3,
        name: "Пастор Дмитрий Смирнов",
        denomination: "Протестантизм",
        city: "Екатеринбург",
        experience: 12,
        rating: 4.7,
        description: "Проповедник Евангелия, руководитель молодежного служения. Помогает людям обрести веру и смысл жизни.",
        avatar: "👨"
    },
    {
        id: 4,
        name: "Отец Сергий Козлов",
        denomination: "Православие",
        city: "Казань",
        experience: 25,
        rating: 5.0,
        description: "Опытный духовник, автор книг по духовной жизни. Принимает всех желающих для беседы и исповеди.",
        avatar: "🧓"
    },
    {
        id: 5,
        name: "Отец Андрей Волков",
        denomination: "Католицизм",
        city: "Новосибирск",
        experience: 18,
        rating: 4.6,
        description: "Миссионер и катехизатор. Проводит занятия по основам веры для взрослых и детей.",
        avatar: "👨‍🦰"
    },
    {
        id: 6,
        name: "Пастор Елена Морозова",
        denomination: "Протестантизм",
        city: "Москва",
        experience: 10,
        rating: 4.8,
        description: "Служитель женского служения, консультант по семейным вопросам. Помогает женщинам в их духовном росте.",
        avatar: "👩"
    }
];

// Моковые данные публикаций
const publications = [
    {
        id: 1,
        authorId: 1,
        title: "Как найти свой путь к Богу?",
        content: "В современном мире многие люди ищут духовную опору. Важно помнить, что путь к Богу начинается с искреннего желания изменить свою жизнь к лучшему...",
        comments: [
            { author: "Анна К.", text: "Спасибо за мудрые слова! Очень помогло в трудную минуту." },
            { author: "Игорь М.", text: "Статья затронула глубины души. Буду читать еще." }
        ]
    },
    {
        id: 2,
        authorId: 2,
        title: "Таинство исповеди: зачем оно нужно?",
        content: "Исповедь - это не просто формальность, а встреча с милосердным Богом, который ждет нас с распростертыми объятиями...",
        comments: [
            { author: "Мария С.", text: "Никогда не понимала смысла исповеди, но после этой статьи многое стало ясно." }
        ]
    },
    {
        id: 3,
        authorId: 3,
        title: "Молитва в повседневной жизни",
        content: "Молитва не должна быть чем-то отдельным от нашей жизни. Она может сопровождать нас в каждом деле, в каждой ситуации...",
        comments: [
            { author: "Петр В.", text: "Попробую применять эти советы на практике." },
            { author: "Ольга Д.", text: "Очень практичные рекомендации, спасибо!" }
        ]
    }
];

// Избранные священники
let favorites = new Set();

// Текущий священник для сообщения
let currentPriestId = null;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderPriests(priests);
    renderPublications();
});

// Рендер карточек священников
function renderPriests(priestsToRender) {
    const grid = document.getElementById('priestsGrid');
    grid.innerHTML = '';
    
    priestsToRender.forEach(priest => {
        const card = document.createElement('div');
        card.className = 'priest-card';
        card.innerHTML = `
            <div class="priest-avatar">${priest.avatar}</div>
            <h3 class="priest-name">${priest.name}</h3>
            <div class="priest-denomination">${priest.denomination}</div>
            <div class="priest-city">📍 ${priest.city}</div>
            <div class="priest-experience">⏳ Опыт: ${priest.experience} лет</div>
            <div class="priest-rating">⭐ ${priest.rating}</div>
            <p class="priest-description">${priest.description}</p>
            <div class="priest-actions">
                <button class="btn btn-message" onclick="openMessageModal(${priest.id})">✉️ Написать</button>
                <button class="btn btn-favorite ${favorites.has(priest.id) ? 'active' : ''}" onclick="toggleFavorite(${priest.id})">
                    ${favorites.has(priest.id) ? '❤️' : '🤍'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Рендер публикаций
function renderPublications() {
    const list = document.getElementById('publicationsList');
    list.innerHTML = '';
    
    publications.forEach(pub => {
        const author = priests.find(p => p.id === pub.authorId);
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-header">
                <div class="post-author-avatar">${author?.avatar || '👤'}</div>
                <div class="post-author-info">
                    <h4>${author?.name || 'Неизвестный автор'}</h4>
                    <span>${author?.denomination || ''}</span>
                </div>
            </div>
            <h3 class="post-title">${pub.title}</h3>
            <p class="post-content">${pub.content}</p>
            <div class="post-comments">
                ${pub.comments.map(comment => `
                    <div class="comment">
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-text">${comment.text}</div>
                    </div>
                `).join('')}
            </div>
        `;
        list.appendChild(card);
    });
}

// Фильтрация священников
function filterPriests() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const denominationFilter = document.getElementById('denominationFilter').value;
    
    const filtered = priests.filter(priest => {
        const matchesSearch = priest.name.toLowerCase().includes(searchText) || 
                             priest.city.toLowerCase().includes(searchText);
        const matchesDenomination = !denominationFilter || priest.denomination === denominationFilter;
        
        return matchesSearch && matchesDenomination;
    });
    
    renderPriests(filtered);
}

// Открытие модального окна
function openMessageModal(priestId) {
    const priest = priests.find(p => p.id === priestId);
    if (!priest) return;
    
    currentPriestId = priestId;
    document.getElementById('modalPriestName').textContent = `Получатель: ${priest.name}`;
    document.getElementById('messageModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
    document.getElementById('messageForm').reset();
    currentPriestId = null;
}

// Отправка сообщения
function sendMessage(event) {
    event.preventDefault();
    
    const messageText = document.getElementById('messageText').value;
    const priest = priests.find(p => p.id === currentPriestId);
    
    if (priest && messageText.trim()) {
        alert(`Сообщение отправлено ${priest.name}!\n\nТекст: ${messageText}\n\n(В демо-режиме сообщение не сохраняется)`);
        closeModal();
    }
}

// Переключение избранного
function toggleFavorite(priestId) {
    if (favorites.has(priestId)) {
        favorites.delete(priestId);
    } else {
        favorites.add(priestId);
    }
    
    // Перерисовываем текущий список
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const denominationFilter = document.getElementById('denominationFilter').value;
    
    const filtered = priests.filter(priest => {
        const matchesSearch = priest.name.toLowerCase().includes(searchText) || 
                             priest.city.toLowerCase().includes(searchText);
        const matchesDenomination = !denominationFilter || priest.denomination === denominationFilter;
        
        return matchesSearch && matchesDenomination;
    });
    
    renderPriests(filtered);
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
