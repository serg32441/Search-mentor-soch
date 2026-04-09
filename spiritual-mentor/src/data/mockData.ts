import { Priest, Post, Comment, User } from '../types';

export const mockPriests: Priest[] = [
  {
    id: 1,
    name: 'Отец Александр Петров',
    confession: 'Православие',
    denomination: 'Русская Православная Церковь',
    location: 'Москва, Россия',
    bio: 'Служу в храме уже 15 лет. Специализируюсь на духовном окормлении семей и молодежи. Провожу индивидуальные беседы и групповые занятия.',
    imageUrl: 'https://placehold.co/300x400/4a90d9/ffffff?text=👨‍✝️',
    rating: 4.9,
    experienceYears: 15,
  },
  {
    id: 2,
    name: 'Отец Михаил Иванов',
    confession: 'Православие',
    denomination: 'Русская Православная Церковь',
    location: 'Санкт-Петербург, Россия',
    bio: 'Богослов, кандидат наук. Помогаю людям найти путь к Богу через молитву и изучение Священного Писания.',
    imageUrl: 'https://placehold.co/300x400/5b9bd5/ffffff?text=👨‍✝️',
    rating: 4.8,
    experienceYears: 20,
  },
  {
    id: 3,
    name: 'Отец Томас Мюллер',
    confession: 'Католицизм',
    denomination: 'Римско-Католическая Церковь',
    location: 'Мюнхен, Германия',
    bio: 'Священник ордена иезуитов. Специализируюсь на духовных упражнениях и ретритах. Говорю на нескольких языках.',
    imageUrl: 'https://placehold.co/300x400/d9534f/ffffff?text=👨‍✝️',
    rating: 4.9,
    experienceYears: 18,
  },
  {
    id: 4,
    name: 'Пастор Джон Смит',
    confession: 'Протестантизм',
    denomination: 'Баптистская церковь',
    location: 'Лондон, Великобритания',
    bio: 'Пастор более 10 лет. Веду библейские исследования и помогаю людям укрепить свою веру через изучение Слова Божьего.',
    imageUrl: 'https://placehold.co/300x400/5cb85c/ffffff?text=👨‍✝️',
    rating: 4.7,
    experienceYears: 12,
  },
  {
    id: 5,
    name: 'Отец Андрей Соколов',
    confession: 'Православие',
    denomination: 'Украинская Православная Церковь',
    location: 'Киев, Украина',
    bio: 'Занимаюсь миссионерской деятельностью и катехизацией. Помогаю людям в трудных жизненных ситуациях.',
    imageUrl: 'https://placehold.co/300x400/4a90d9/ffffff?text=👨‍✝️',
    rating: 4.8,
    experienceYears: 10,
  },
  {
    id: 6,
    name: 'Отец Франциск Росси',
    confession: 'Католицизм',
    denomination: 'Римско-Католическая Церковь',
    location: 'Рим, Италия',
    bio: 'Служу в Ватикане. Специализируюсь на духовном сопровождении паломников и организации религиозных мероприятий.',
    imageUrl: 'https://placehold.co/300x400/d9534f/ffffff?text=👨‍✝️',
    rating: 5.0,
    experienceYears: 25,
  },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    priestId: 1,
    priestName: 'Отец Александр Петров',
    title: 'Как начать молитвенную практику',
    content: 'Молитва — это разговор с Богом. Начните с малого: выделите 5-10 минут утром и вечером...',
    date: '2024-01-15',
  },
  {
    id: 2,
    priestId: 3,
    priestName: 'Отец Томас Мюллер',
    title: 'Духовные упражнения святого Игнатия',
    content: 'Духовные упражнения — это способ углубить отношения с Богом через молитву, размышление и созерцание...',
    date: '2024-01-12',
  },
  {
    id: 3,
    priestId: 4,
    priestName: 'Пастор Джон Смит',
    title: 'Сила веры в повседневной жизни',
    content: 'Вера — это не просто убеждение, а образ жизни. Как применять библейские принципы каждый день...',
    date: '2024-01-10',
  },
];

export const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    authorName: 'Мария К.',
    content: 'Спасибо за полезные советы! Начала молиться по утрам, чувствую мир в душе.',
    date: '2024-01-16',
  },
  {
    id: 2,
    postId: 1,
    authorName: 'Алексей П.',
    content: 'Очень вовремя наткнулся на эту статью. Именно то, что искал.',
    date: '2024-01-17',
  },
  {
    id: 3,
    postId: 2,
    authorName: 'Елена В.',
    content: 'Проходила эти упражнения в прошлом году. Действительно помогают приблизиться к Богу.',
    date: '2024-01-13',
  },
];

export const mockUser: User = {
  id: 1,
  name: 'Гость',
  email: '',
  role: 'user',
  favorites: [],
};
