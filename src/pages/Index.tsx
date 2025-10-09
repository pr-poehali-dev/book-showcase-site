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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-display font-bold tracking-wide">LITERARY AGENT</h1>
            <div className="hidden md:flex items-center gap-10">
              <a href="#home" className="text-sm tracking-wide hover:text-gold transition-colors">Главная</a>
              <a href="#books" className="text-sm tracking-wide hover:text-gold transition-colors">Книги</a>
              <a href="#articles" className="text-sm tracking-wide hover:text-gold transition-colors">Статьи</a>
              <a href="#contact" className="text-sm tracking-wide hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-black text-white text-xs tracking-[0.2em] font-medium">
                ЛИТЕРАТУРНОЕ АГЕНТСТВО
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Книги, которые<br />
                помогают больше<br />
                понять шоу бизнес
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Открываем новые имена в литературе через призму шоу-бизнеса. 
                Каждая история — это путь к знанию и пониманию.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 h-14 text-sm tracking-wide">
                  ЧИТАТЬ СТАТЬИ
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black hover:bg-black hover:text-white px-8 h-14 text-sm tracking-wide">
                  СМОТРЕТЬ КНИГИ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-neutral-900 to-neutral-700 relative overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80" 
                  alt="Books"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-end p-10">
                  <div className="text-white">
                    <div className="w-16 h-0.5 bg-gold mb-4"></div>
                    <p className="text-xs tracking-[0.25em] font-medium">НОВИНКА МЕСЯЦА</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-20">
            <div>
              <div className="text-xs tracking-[0.2em] text-muted-foreground mb-3 font-medium">КОЛЛЕКЦИЯ</div>
              <h3 className="text-5xl md:text-6xl font-display font-bold tracking-tight">Книги & Истории</h3>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2 hover:gap-3 transition-all">
              Все книги <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="space-y-32">
            {books.map((book, index) => (
              <Card key={book.id} className="overflow-hidden border-0 shadow-none group">
                <div className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted shadow-lg">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 bg-gold text-black px-4 py-1.5 text-xs font-bold tracking-[0.2em]">
                        {book.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`space-y-8 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div>
                      <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4 font-medium">КНИГА НЕДЕЛИ</div>
                      <h4 className="text-4xl md:text-5xl font-display font-bold mb-3 tracking-tight">{book.title}</h4>
                      <p className="text-xl text-muted-foreground">{book.author}</p>
                    </div>

                    <div className="border-l-2 border-gold pl-8 py-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="FileText" size={16} className="text-gold" />
                        <span className="text-xs tracking-[0.2em] font-semibold">СТАТЬЯ</span>
                      </div>
                      <h5 className="text-2xl md:text-3xl font-display font-semibold mb-4 leading-tight">{book.article.title}</h5>
                      <p className="text-muted-foreground leading-relaxed text-lg">{book.article.excerpt}</p>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <Button className="bg-black text-white hover:bg-black/90 h-12 px-6 text-sm tracking-wide">
                        ЧИТАТЬ СТАТЬЮ
                      </Button>
                      <Button variant="outline" className="border-2 h-12 px-6 text-sm tracking-wide">
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

      <section id="articles" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-3 font-medium">БЛОГ</div>
            <h3 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">Последние статьи</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Глубокие материалы о пересечении литературы и шоу-бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {articles.map((article) => (
              <Card key={article.id} className="group cursor-pointer overflow-hidden border-0 bg-white hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="tracking-[0.2em] font-semibold">{article.category}</span>
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold leading-tight group-hover:text-gold transition-colors">
                    {article.title}
                  </h4>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-sm group-hover:gap-2 transition-all flex items-center gap-1">
                    Читать далее <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <div className="text-xs tracking-[0.2em] text-gold mb-5 font-medium">СВЯЗАТЬСЯ С НАМИ</div>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">Давайте работать вместе</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Хотите предложить рукопись или обсудить сотрудничество? 
                  Мы всегда открыты для новых проектов и идей.
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-gold" />
                  <span className="text-base">info@literaryagent.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-gold" />
                  <span className="text-base">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-gold" />
                  <span className="text-base">Москва, ул. Литературная, 10</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10 h-12 w-12">
                  <Icon name="Instagram" size={22} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10 h-12 w-12">
                  <Icon name="Facebook" size={22} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-gold hover:bg-white/10 h-12 w-12">
                  <Icon name="Twitter" size={22} />
                </Button>
              </div>
            </div>

            <div>
              <form className="space-y-5">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={7}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold h-14 text-sm tracking-wide">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 bg-black text-white border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400 tracking-wide">
            © 2024 Literary Agent. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
