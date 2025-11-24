import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Искусство минимализма в современном дизайне',
    excerpt: 'Как простота формы создаёт мощное визуальное высказывание и меняет восприятие пространства',
    category: 'Дизайн',
    date: '15 ноя 2024',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Будущее веб-разработки: тренды 2025',
    excerpt: 'Погружение в новые технологии, которые изменят подход к созданию цифровых продуктов',
    category: 'Технологии',
    date: '12 ноя 2024',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Психология цвета в брендинге',
    excerpt: 'Исследование того, как цветовые решения влияют на эмоции и принятие решений потребителями',
    category: 'Маркетинг',
    date: '10 ноя 2024',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Создание вовлекающего контента',
    excerpt: 'Стратегии и приёмы для написания текстов, которые захватывают внимание с первой секунды',
    category: 'Контент',
    date: '8 ноя 2024',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'UX исследования: методы и инсайты',
    excerpt: 'Практическое руководство по проведению исследований пользовательского опыта',
    category: 'UX/UI',
    date: '5 ноя 2024',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Типографика как искусство коммуникации',
    excerpt: 'Глубокое погружение в мир шрифтов и их влияние на читабельность и восприятие',
    category: 'Дизайн',
    date: '3 ноя 2024',
    readTime: '9 мин',
    image: 'https://images.unsplash.com/photo-1461958508236-9a742665a0d5?w=800&h=600&fit=crop'
  }
];

const categories = ['Все', 'Дизайн', 'Технологии', 'Маркетинг', 'Контент', 'UX/UI'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 gradient-blob rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 gradient-blob rounded-full animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="relative z-10">
        <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gradient">Креативный Блог</h1>
              <nav className="flex gap-8">
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Главная</a>
                <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Категории</a>
              </nav>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Исследуй мир <span className="text-gradient">креативных идей</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Статьи о дизайне, технологиях и творчестве от экспертов индустрии
            </p>
            
            <div className="relative max-w-2xl mx-auto animate-slide-up">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по статьям и контенту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-border/50 focus:border-primary transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              )}
            </div>
          </div>

          <div id="categories" className="flex justify-center gap-3 mb-12 flex-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`cursor-pointer px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                    : 'hover:bg-primary/10 hover:border-primary/50'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {searchQuery && (
            <p className="text-center text-muted-foreground mb-8">
              Найдено статей: <span className="text-primary font-semibold">{filteredArticles.length}</span>
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <Icon name="ArrowRight" size={18} className="text-primary group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить поисковый запрос или выбрать другую категорию
              </p>
            </div>
          )}
        </section>

        <footer className="border-t border-border/50 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gradient">Креативный Блог</h3>
                <p className="text-muted-foreground text-sm">
                  Исследуйте мир дизайна и творчества вместе с нами
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Категории</h4>
                <ul className="space-y-2 text-sm">
                  {categories.slice(1).map(cat => (
                    <li key={cat}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">О нас</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О проекте</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Авторы</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Подписка</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Получайте лучшие статьи на почту
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Email" className="bg-card border-border/50" />
                  <button className="bg-primary text-primary-foreground px-4 rounded-lg hover:opacity-90 transition-opacity">
                    <Icon name="Send" size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
              <p>© 2024 Креативный Блог. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
