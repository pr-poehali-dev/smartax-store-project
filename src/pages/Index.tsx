import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/84acb8b6-e1e7-47a1-9edc-8bb6b1789685/files/ac662926-82ee-4a53-8e0b-e01360c7d607.jpg';

const PHONE = '+7 (925) 266-80-45';
const ADDRESS = 'Москва, ул. Юных Ленинцев, 52, ТЦ «Высота»';

const categories = [
  { name: 'Чехлы', icon: 'Smartphone' },
  { name: 'Защитные стёкла', icon: 'ShieldCheck' },
  { name: 'Гидрогелевые плёнки', icon: 'Droplets' },
  { name: 'Полиуретановые плёнки', icon: 'ShieldPlus' },
  { name: 'Антишпион-плёнки', icon: 'EyeOff' },
  { name: 'Зарядные устройства', icon: 'Zap' },
  { name: 'Кабели', icon: 'Cable' },
  { name: 'Беспроводные зарядки', icon: 'BatteryCharging' },
  { name: 'Наушники', icon: 'Headphones' },
  { name: 'Power Bank', icon: 'BatteryFull' },
  { name: 'Автодержатели', icon: 'Car' },
  { name: 'Для планшетов', icon: 'Tablet' },
];

const advantages = [
  { title: 'Более 1000 аксессуаров', desc: 'Всё в наличии на витрине', icon: 'Package' },
  { title: 'Установка за 10 минут', desc: 'Быстро и без пузырей', icon: 'Timer' },
  { title: 'Подбор под любую модель', desc: 'iPhone, Samsung, Xiaomi и др.', icon: 'Search' },
  { title: 'Гарантия качества', desc: 'Отвечаем за результат', icon: 'BadgeCheck' },
  { title: 'Актуальные новинки', desc: 'Свежие модели каждую неделю', icon: 'Sparkles' },
  { title: 'Доступные цены', desc: 'Честная стоимость без накруток', icon: 'Tag' },
];

const services = [
  { title: 'Гидрогелевая плёнка', desc: 'Самовосстанавливающаяся защита экрана с эффектом «без плёнки».', icon: 'Droplets', price: 'от 690 ₽' },
  { title: 'Полиуретановая плёнка', desc: 'Противоударная защита от падений, царапин и сколов.', icon: 'ShieldPlus', price: 'от 890 ₽' },
  { title: 'Антишпион-плёнка', desc: 'Скрывает экран от взглядов сбоку. Конфиденциальность.', icon: 'EyeOff', price: 'от 990 ₽' },
  { title: 'Защитное стекло', desc: 'Закалённое стекло 9H с идеально ровной поклейкой.', icon: 'ShieldCheck', price: 'от 490 ₽' },
  { title: 'Подбор аксессуаров', desc: 'Поможем выбрать чехол, зарядку и кабель под устройство.', icon: 'Sparkles', price: 'бесплатно' },
];

const reviews = [
  { name: 'Анна К.', text: 'Поклеили гидрогель на iPhone 15 Pro — ни одного пузырька, всё за 10 минут. Очень довольна!', device: 'iPhone 15 Pro' },
  { name: 'Дмитрий В.', text: 'Брал антишпион-плёнку и кабель. Цены адекватные, ребята реально шарят в моделях.', device: 'Samsung S24' },
  { name: 'Игорь П.', text: 'Лучший магазин аксессуаров в Кузьминках. Противоударная плёнка спасла телефон при падении.', device: 'Xiaomi 14' },
  { name: 'Мария С.', text: 'Подобрали чехол и беспроводную зарядку, всё подошло идеально. Спасибо за сервис!', device: 'Honor Magic 6' },
];

const repairs = [
  { title: 'Ремонт телефонов', desc: 'Замена экранов, аккумуляторов, разъёмов зарядки и стёкол. Любые модели.', icon: 'Smartphone', price: 'от 990 ₽' },
  { title: 'Ремонт планшетов', desc: 'Восстановление дисплеев, тачскринов, портов и батарей iPad и Android.', icon: 'Tablet', price: 'от 1 490 ₽' },
  { title: 'Ремонт ноутбуков', desc: 'Чистка от пыли, замена клавиатур, матриц, апгрейд SSD и памяти.', icon: 'Laptop', price: 'от 1 990 ₽' },
];

const brands = ['iPhone', 'Samsung', 'Xiaomi', 'Honor', 'Huawei', 'Realme'];

const Index = () => {
  const [review, setReview] = useState(0);
  const next = () => setReview((p) => (p + 1) % reviews.length);
  const prev = () => setReview((p) => (p - 1 + reviews.length) % reviews.length);

  const Nav = ({ href, children }: { href: string; children: string }) => (
    <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{children}</a>
  );

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">СА</span>
            СмартАкс
          </a>
          <nav className="hidden md:flex items-center gap-7">
            <Nav href="#catalog">Каталог</Nav>
            <Nav href="#services">Услуги</Nav>
            <Nav href="#repair">Ремонт</Nav>
            <Nav href="#advantages">Преимущества</Nav>
            <Nav href="#reviews">Отзывы</Nav>
            <Nav href="#contacts">Контакты</Nav>
          </nav>
          <a href={`tel:${PHONE}`} className="hidden sm:block">
            <Button size="sm" className="rounded-full font-semibold">
              <Icon name="Phone" size={16} /> Позвонить
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 grid-bg">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Москва · ТЦ «Высота» · Кузьминки
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Защита и аксессуары <br /> для вашего <span className="text-gradient">смартфона</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Гидрогелевые, полиуретановые и антишпион-плёнки. Чехлы, зарядки, кабели и аксессуары для всех популярных моделей смартфонов.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalog"><Button size="lg" className="rounded-full font-semibold blue-glow">Каталог <Icon name="ArrowRight" size={18} /></Button></a>
              <a href="#services"><Button size="lg" variant="secondary" className="rounded-full font-semibold">Заказать установку плёнки</Button></a>
              <a href={`tel:${PHONE}`}><Button size="lg" variant="outline" className="rounded-full font-semibold border-white/15"><Icon name="Phone" size={18} /> Позвонить</Button></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {brands.map((b) => <span key={b} className="font-display font-semibold">{b}</span>)}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full" />
            <img src={HERO_IMG} alt="Установка защитной плёнки на смартфон" className="relative rounded-3xl border border-white/10 animate-float-slow w-full object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">О нас</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              <span className="text-foreground font-semibold">СмартАкс</span> — магазин мобильных аксессуаров в Москве. Мы предлагаем качественные защитные решения для смартфонов и широкий ассортимент аксессуаров. Выполняем профессиональную установку гидрогелевых, противоударных полиуретановых и антишпион-плёнок.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {[['1000+', 'аксессуаров'], ['10 мин', 'на установку'], ['5.0', 'рейтинг клиентов'], ['100%', 'гарантия качества']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display font-black text-3xl md:text-4xl text-gradient">{n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl">Каталог товаров</h2>
              <p className="text-muted-foreground mt-2">Всё для вашего смартфона и планшета</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <button key={b} className="px-4 py-1.5 rounded-full text-sm glass hover:bg-primary hover:text-primary-foreground transition-colors">{b}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <a key={c.name} href="#contacts" className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 0.04}s` }}>
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={c.icon} size={24} />
                </div>
                <div className="font-display font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Смотреть <Icon name="ArrowRight" size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20">
        <div className="container">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-12">Почему выбирают СмартАкс</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a, i) => (
              <div key={a.title} className="glass rounded-2xl p-7 hover:border-primary/40 transition-colors animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <Icon name={a.icon} size={28} className="text-primary mb-4" />
                <div className="font-display font-bold text-lg">{a.title}</div>
                <div className="text-muted-foreground mt-1">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-3">Популярные услуги</h2>
          <p className="text-muted-foreground mb-10">Профессиональная установка и подбор</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={s.title} className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/50 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between">
                  <Icon name={s.icon} size={30} className="text-primary" />
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{s.price}</span>
                </div>
                <div className="font-display font-bold text-xl mt-5">{s.title}</div>
                <p className="text-muted-foreground mt-2">{s.desc}</p>
                <a href="#contacts"><Button variant="ghost" className="mt-4 px-0 text-primary hover:text-primary hover:bg-transparent">Записаться <Icon name="ArrowRight" size={16} /></Button></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair */}
      <section id="repair" className="py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Wrench" size={28} className="text-primary" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl">Ремонт техники</h2>
          </div>
          <p className="text-muted-foreground mb-10">Чиним телефоны, планшеты и ноутбуки — диагностика бесплатно</p>
          <div className="grid md:grid-cols-3 gap-5">
            {repairs.map((r, i) => (
              <div key={r.title} className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/50 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={r.icon} size={28} />
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{r.price}</span>
                </div>
                <div className="font-display font-bold text-xl mt-5">{r.title}</div>
                <p className="text-muted-foreground mt-2">{r.desc}</p>
                <a href="#contacts"><Button variant="ghost" className="mt-4 px-0 text-primary hover:text-primary hover:bg-transparent">Сдать в ремонт <Icon name="ArrowRight" size={16} /></Button></a>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Icon name="ShieldCheck" size={22} className="text-primary" />
              Гарантия на ремонт · Оригинальные комплектующие · Срочный ремонт при вас
            </div>
            <a href={`tel:${PHONE}`}><Button className="rounded-full font-semibold"><Icon name="Phone" size={18} /> Узнать стоимость</Button></a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-12">Отзывы клиентов</h2>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center relative">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" size={22} className="text-primary fill-primary" />)}
              </div>
              <p className="text-xl md:text-2xl font-display font-medium leading-relaxed">«{reviews[review].text}»</p>
              <div className="mt-6">
                <div className="font-semibold">{reviews[review].name}</div>
                <div className="text-sm text-muted-foreground">{reviews[review].device}</div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={prev} className="grid place-items-center w-11 h-11 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"><Icon name="ChevronLeft" size={20} /></button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button key={i} onClick={() => setReview(i)} className={`h-2 rounded-full transition-all ${i === review ? 'w-6 bg-primary' : 'w-2 bg-white/20'}`} />
                  ))}
                </div>
                <button onClick={next} className="grid place-items-center w-11 h-11 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"><Icon name="ChevronRight" size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container">
          <div className="glass rounded-3xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6">Контакты</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={22} className="text-primary mt-0.5" />
                  <div><div className="font-semibold">Адрес</div><div className="text-muted-foreground">{ADDRESS}</div></div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={22} className="text-primary mt-0.5" />
                  <div><div className="font-semibold">Телефон</div><a href={`tel:${PHONE}`} className="text-muted-foreground hover:text-foreground">{PHONE}</a></div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={22} className="text-primary mt-0.5" />
                  <div><div className="font-semibold">Часы работы</div><div className="text-muted-foreground">Ежедневно 10:00 — 21:00</div></div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                <a href="https://yandex.ru/maps/?text=Москва, улица Юных Ленинцев, 52" target="_blank" rel="noopener"><Button className="w-full rounded-full font-semibold"><Icon name="Navigation" size={18} /> Построить маршрут</Button></a>
                <a href={`tel:${PHONE}`}><Button variant="secondary" className="w-full rounded-full font-semibold"><Icon name="Phone" size={18} /> Позвонить</Button></a>
                <a href="https://wa.me/79252668045" target="_blank" rel="noopener"><Button variant="outline" className="w-full rounded-full font-semibold border-white/15"><Icon name="MessageCircle" size={18} /> WhatsApp</Button></a>
                <a href="https://t.me/smartax" target="_blank" rel="noopener"><Button variant="outline" className="w-full rounded-full font-semibold border-white/15"><Icon name="Send" size={18} /> Telegram</Button></a>
              </div>
            </div>
            <div className="min-h-[320px] lg:min-h-full">
              <iframe
                title="Карта СмартАкс"
                src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20улица%20Юных%20Ленинцев%2C%2052&z=16"
                className="w-full h-full min-h-[320px] grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-extrabold text-foreground">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-xs">СА</span>
            СмартАкс
          </div>
          <div>{ADDRESS}</div>
          <div>© {new Date().getFullYear()} СмартАкс. Магазин мобильных аксессуаров в Москве.</div>
        </div>
      </footer>

      {/* Floating chat buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/79252668045" target="_blank" rel="noopener" aria-label="WhatsApp" className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform">
          <Icon name="MessageCircle" size={26} />
        </a>
        <a href="https://t.me/smartax" target="_blank" rel="noopener" aria-label="Telegram" className="grid place-items-center w-14 h-14 rounded-full bg-[#229ED9] text-white shadow-lg hover:scale-110 transition-transform">
          <Icon name="Send" size={24} />
        </a>
      </div>
    </div>
  );
};

export default Index;