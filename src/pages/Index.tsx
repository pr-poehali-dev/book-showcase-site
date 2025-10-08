import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const books = [
    {
      id: 1,
      title: "Stage Shadows",
      author: "Elena Sokolova",
      category: "Showbiz",
      image: "https://v3b.fal.media/files/b/monkey/CFUBkA8q0cAaqozgyWFFk_output.png",
      article: {
        title: "How a Theater Career Influenced the Novel Creation",
        excerpt: "The author shares her experience working with famous actors and how these encounters inspired her to write this year's main bestseller."
      }
    },
    {
      id: 2,
      title: "Stardust",
      author: "Maxim Volkov",
      category: "Biography",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80",
      article: {
        title: "Behind the Scenes of the Big Show: Author Interview",
        excerpt: "Exclusive interview about how the book about the lives of Russian pop stars was created and what secrets were revealed in the process."
      }
    },
    {
      id: 3,
      title: "The Final Act",
      author: "Anna Morozova",
      category: "Drama",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      article: {
        title: "From Screenplay to Novel: A Screenwriter's Journey",
        excerpt: "The story of how working on a series about the music industry turned into a literary thriller that won over critics."
      }
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Literature and Cinema: A New Alliance",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Top 10 Books About Stars",
      category: "Collections",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      date: "March 12, 2024"
    },
    {
      id: 3,
      title: "Interview with Publishers of the Year",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      date: "March 8, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold tracking-tight">LITERARY AGENT</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-gold transition-colors">Home</a>
              <a href="#books" className="text-sm hover:text-gold transition-colors">Books</a>
              <a href="#articles" className="text-sm hover:text-gold transition-colors">Articles</a>
              <a href="#contact" className="text-sm hover:text-gold transition-colors">Contact</a>
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
                LITERARY AGENCY
              </div>
              <h2 className="text-6xl md:text-7xl font-display font-bold leading-none mb-6">
                Books<br />
                Born from<br />
                the Stars
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Discovering new names in literature through the lens of showbiz. 
                Every story is a journey from stage to page.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  READ ARTICLES
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gold text-black hover:bg-gold hover:text-black">
                  VIEW BOOKS
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
                    <p className="text-sm tracking-widest">NEW RELEASE</p>
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
              <div className="text-xs tracking-widest text-muted-foreground mb-2">COLLECTION</div>
              <h3 className="text-5xl font-display font-bold">Books & Stories</h3>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              All Books <Icon name="ArrowRight" size={20} />
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
                      <div className="text-xs tracking-widest text-muted-foreground mb-3">BOOK OF THE WEEK</div>
                      <h4 className="text-4xl font-display font-bold mb-2">{book.title}</h4>
                      <p className="text-lg text-muted-foreground">{book.author}</p>
                    </div>

                    <div className="border-l-2 border-gold pl-6 py-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="FileText" size={16} className="text-gold" />
                        <span className="text-xs tracking-widest font-semibold">ARTICLE</span>
                      </div>
                      <h5 className="text-2xl font-display font-semibold mb-3">{book.article.title}</h5>
                      <p className="text-muted-foreground leading-relaxed">{book.article.excerpt}</p>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-black text-white hover:bg-black/90">
                        READ ARTICLE
                      </Button>
                      <Button variant="outline" className="border-2">
                        ABOUT BOOK
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
            <div className="text-xs tracking-widest text-muted-foreground mb-2">BLOG</div>
            <h3 className="text-5xl font-display font-bold mb-4">Latest Articles</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth coverage of the intersection between literature and showbiz
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
                    Read More <Icon name="ArrowRight" size={16} />
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
              <div className="text-xs tracking-widest text-gold mb-4">GET IN TOUCH</div>
              <h3 className="text-4xl font-display font-bold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Want to submit a manuscript or discuss collaboration? 
                We're always open to new projects and ideas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-gold" />
                  <span>info@literaryagent.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-gold" />
                  <span>+1 (212) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-gold" />
                  <span>New York, Literary St, 10</span>
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
                    placeholder="Your Name" 
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
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black text-white border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2024 Literary Agent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;