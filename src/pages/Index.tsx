import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const books = [
    {
      id: 1,
      title: "Тени сцены",
      author: "Елена Соколова",
      category: "Шоу-бизнес",
      image: "https://v3b.fal.media/files/b/monkey/CFUBkA8q0cAaqozgyWFFk_output.png",
      article: {
        title: "Как карьера в театре повлияла на создание романа",
        excerpt: "Автор делится своим опытом работы с известными актёрами и тем, как эти встречи вдохновили её на написание главного бестселлера года."
      }
    },
    {
      id: 2,
      title: "Звёздная пыль",
      author: "Максим Волков",
      category: "Биография",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80",
      article: {
        title: "Закулисье большого шоу: интервью с автором",
        excerpt: "Эксклюзивное интервью о том, как создавалась книга о жизни звёзд российской эстрады и какие секреты открылись в процессе работы."
      }
    },
    {
      id: 3,
      title: "Последний акт",
      author: "Анна Морозова",
      category: "Драма",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      article: {
        title: "От сценария к роману: путь сценариста",
        excerpt: "История о том, как работа над сериалом о музыкальной индустрии превратилась в литературный триллер, покоривший критиков."
      }
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Литература и кино: новый альянс",
      category: "Тренды",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      date: "15 марта 2024"
    },
    {
      id: 2,
      title: "Топ-10 книг о звёздах",
      category: "Подборки",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      date: "12 марта 2024"
    },
    {
      id: 3,
      title: "Интервью с издателями года",
      category: "Индустрия",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      date: "8 марта 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold tracking-tight">LITERARY AGENT</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-gold transition-colors">Главная</a>
              <a href="#books" className="text-sm hover:text-gold transition-colors">Книги</a>
              <a href="#articles" className="text-sm hover:text-gold transition-colors">Статьи</a>
              <a href="#contact" className="text-sm hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-xs tracking-widest mb-6">
                ЛИТЕРАТУРНОЕ АГЕНТСТВО
              </div>
              <h2 className="text-6xl md:text-7xl font-display font-bold leading-none mb-6">
                Книги, которые<br />
                помогают больше<br />
                понять шоу бизнес
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Открываем новые имена в литературе через призму шоу-бизнеса. 
                Каждая история — это путь к знанию и пониманию.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  ЧИТАТЬ СТАТЬИ
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gold text-black hover:bg-gold hover:text-black">
                  СМОТРЕТЬ КНИГИ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-black to-gray-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80" 
                  alt="Books"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <div className="w-12 h-1 bg-gold mb-4"></div>
                    <p className="text-sm tracking-widest">НОВИНКА МЕСЯЦА</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs tracking-widest text-muted-foreground mb-2">КОЛЛЕКЦИЯ</div>
              <h3 className="text-5xl font-display font-bold">Книги & Истории</h3>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              Все книги <Icon name="ArrowRight" size={20} />
            </Button>
          </div>

          <div className="space-y-20">
            {books.map((book, index) => (
              <Card key={book.id} className="overflow-hidden border-0 shadow-none">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 text-xs font-bold tracking-wider">
                        {book.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div>
                      <div className="text-xs tracking-widest text-muted-foreground mb-3">КНИГА НЕДЕЛИ</div>
                      <h4 className="text-4xl font-display font-bold mb-2">{book.title}</h4>
                      <p className="text-lg text-muted-foreground">{book.author}</p>
                    </div>

                    <div className="border-l-2 border-gold pl-6 py-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="FileText" size={16} className="text-gold" />
                        <span className="text-xs tracking-widest font-semibold">СТАТЬЯ</span>
                      </div>
                      <h5 className="text-2xl font-display font-semibold mb-3">{book.article.title}</h5>
                      <p className="text-muted-foreground leading-relaxed">{book.article.excerpt}</p>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-black text-white hover:bg-black/90">
                        ЧИТАТЬ СТАТЬЮ
                      </Button>
                      <Button variant="outline" className="border-2">
                        О КНИГЕ
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs tracking-widest text-muted-foreground mb-2">БЛОГ</div>
            <h3 className="text-5xl font-display font-bold mb-4">Последние статьи</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Глубокие материалы о пересечении литературы и шоу-бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group cursor-pointer overflow-hidden border-0 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="tracking-widest font-semibold">{article.category}</span>
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold leading-tight group-hover:text-gold transition-colors">
                    {article.title}
                  </h4>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-sm group-hover:gap-2 transition-all">
                    Читать далее <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs tracking-widest text-gold mb-4">СВЯЗАТЬСЯ С НАМИ</div>
              <h3 className="text-4xl font-display font-bold mb-6">Давайте работать вместе</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Хотите предложить рукопись или обсудить сотрудничество? 
                Мы всегда открыты для новых проектов и идей.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-gold" />
                  <span>info@literaryagent.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-gold" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-gold" />
                  <span>Москва, ул. Литературная, 10</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black text-white border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2024 Literary Agent. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
