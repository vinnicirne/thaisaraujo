/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen, 
  Zap, 
  ArrowRight, 
  Users, 
  HelpCircle,
  Menu,
  X,
  CreditCard,
  Target,
  Sparkles,
  Heart,
  EyeOff,
  UserX,
  RefreshCw,
  Award
} from 'lucide-react';

// --- Components ---

const BookCover = ({ className = "" }: { className?: string }) => (
  <img 
    src="/capa-livro.jpg" 
    alt="Capa do eBook O Fim do Jogo Narcisista"
    className={`w-full max-w-[340px] mx-auto rounded-lg shadow-2xl object-cover ${className}`}
  />
);

const AppFadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string, key?: React.Key }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AppSection = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const AppButton = ({ children, className = "", variant = "primary", onClick }: { children: React.ReactNode, className?: string, variant?: "primary" | "gold" | "outline", onClick?: () => void }) => {
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-brand-medium shadow-lg hover:shadow-xl",
    gold: "gold-gradient text-brand-dark font-bold hover:scale-105 shadow-lg",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`px-8 py-4 rounded-full transition-all duration-300 uppercase tracking-wider text-sm font-semibold flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// --- Sections ---

const Hero = () => (
  <AppSection className="relative overflow-hidden pt-36 md:pt-48 pb-32 hero-burgundy-texture text-white">
    {/* Visual Elements - Simple Background depth */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
      <AppFadeIn direction="right">
        <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold tracking-widest uppercase mb-6">
          Reconhecer • Romper • Renascer
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-md">
          O Fim do Jogo <br/>
          <span className="text-brand-gold">Narcisista</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed drop-shadow-sm">
          Descubra como identificar, romper e se libertar de relações marcadas por manipulação emocional, gaslighting e abuso silencioso.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <AppButton variant="gold" className="w-full sm:w-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            QUERO ME LIBERTAR AGORA
            <ArrowRight size={18} />
          </AppButton>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-brand-gold" />
            <span>Guia Completo</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-brand-gold" />
            <span>Espiritualidade & Ciência</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-brand-gold" />
            <span>Acesso Vitalício</span>
          </div>
        </div>
      </AppFadeIn>

      <AppFadeIn direction="left" className="relative flex justify-center">
        <div className="relative z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] transform hover:scale-[1.03] transition-all duration-700 w-full max-w-[340px]">
           <BookCover />
        </div>
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-8 text-brand-gold opacity-40"
        >
          <Sparkles size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-12 -left-8 text-brand-accent opacity-30"
        >
          <Target size={64} />
        </motion.div>

        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-brand-gold/5 rounded-full blur-[120px] -z-10" />
      </AppFadeIn>
    </div>
  </AppSection>
);

const Identification = () => {
  const symptoms = [
    { icon: <Heart className="text-brand-accent" />, text: "Vive se culpando por tudo o que acontece de errado." },
    { icon: <EyeOff className="text-brand-purple" />, text: "Duvida da própria percepção e sanidade (Gaslighting)." },
    { icon: <Sparkles className="text-brand-gold" />, text: "Sente-se emocionalmente exausta e sem energia para nada." },
    { icon: <UserX className="text-brand-accent" />, text: "Foi isolada de amigos e familiares importantes." },
    { icon: <RefreshCw className="text-brand-purple" />, text: "Recebeu amor intenso e desprezo cruel da mesma pessoa." },
  ];

  return (
    <AppSection className="bg-brand-light relative overflow-hidden">
      {/* Decorative Chain bits */}
      <div className="absolute top-10 right-[-50px] opacity-10 rotate-45 hidden md:block">
        <Zap size={200} strokeWidth={1} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AppFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-dark">
              Você sente que está perdendo a si mesma?
            </h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-6" />
            <p className="text-lg text-brand-medium italic">
              O abuso narcisista é invisível, mas suas cicatrizes são profundas.
            </p>
          </div>
        </AppFadeIn>

        <div className="grid gap-4">
          {symptoms.map((symptom, idx) => (
            <AppFadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-brand-gold/10 flex items-center gap-6 hover:shadow-md hover:bg-white transition-all">
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shadow-inner">
                  {symptom.icon}
                </div>
                <p className="text-lg text-brand-dark font-medium">{symptom.text}</p>
              </div>
            </AppFadeIn>
          ))}
        </div>
      </div>
    </AppSection>
  );
};

const AboutBook = () => (
  <AppSection className="bg-white overflow-hidden">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <AppFadeIn direction="right">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-2xl" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark leading-tight">
            Mais que um livro, <br/>um <span className="text-brand-gold italic">mapa para a liberdade</span>.
          </h2>
          <p className="text-lg text-brand-medium leading-relaxed mb-6">
            "O Fim do Jogo Narcisista" não é apenas teoria. É um guia prático de conscientização, fortalecimento emocional e reconstrução da identity fragmentada pelo abuso.
          </p>
          <p className="text-lg text-brand-medium leading-relaxed mb-8">
            Escrito por quem entende as nuances da manipulação, este eBook oferece as ferramentas necessárias para você deixar de ser combustível emocional e voltar a ser a protagonista da sua própria vida.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-brand-dark">Conscientização</span>
              <span className="text-sm text-brand-medium/60">Entenda o que aconteceu com você.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-brand-dark">Fortalecimento</span>
              <span className="text-sm text-brand-medium/60">Recupere sua força psicológica.</span>
            </div>
          </div>
        </div>
      </AppFadeIn>
      
      <AppFadeIn direction="left">
        <div className="bg-brand-dark p-8 md:p-12 rounded-[40px] text-white relative">
          <Sparkles className="absolute top-8 right-8 text-brand-gold opacity-50" size={32} />
          <h3 className="text-2xl font-bold mb-6 text-brand-gold">O Despertar</h3>
          <ul className="space-y-4">
            {[
              "Identifique o narcisista oculto na sua vida",
              "Entenda o ciclo do trauma e como quebrá-lo",
              "Aprenda a estabelecer limites inegociáveis",
              "Reconstrua sua autoestima do zero"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-gold shrink-0 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AppFadeIn>
    </div>
  </AppSection>
);

const WhatYouWillLearn = () => {
  const topics = [
    { title: "O Nascimento do Narcisista", desc: "As raízes psicológicas por trás do transtorno." },
    { title: "O Empata e a Criança Ferida", desc: "Por que atraímos esse tipo de perfil e como curar." },
    { title: "Gaslighting", desc: "Como identificar a forma mais cruel de manipulação mental." },
    { title: "Narcisista Oculto", desc: "A face 'prestativa' e 'sofrida' que esconde o abuso." },
    { title: "Narcisista Messiânico", desc: "Quando o abuso veste a máscara da espiritualidade." },
    { title: "Pais Narcisistas", desc: "As feridas da infância que ainda ditam suas escolhas." },
    { title: "Renascimento Pós-Abuso", desc: "O passo a passo para se tornar indestrutível." },
  ];

  return (
    <AppSection className="bg-brand-light">
      <AppFadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark">O Que Você Vai Aprender</h2>
          <p className="text-brand-medium max-w-2xl mx-auto">Um conteúdo estruturado para te levar da confusão à clareza absoluta.</p>
        </div>
      </AppFadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => (
          <AppFadeIn key={idx} delay={idx * 0.05}>
            <div className="h-full bg-white p-8 rounded-3xl border border-brand-medium/5 hover:border-brand-gold/50 transition-all group">
              <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{topic.title}</h3>
              <p className="text-brand-medium/70 leading-relaxed">{topic.desc}</p>
            </div>
          </AppFadeIn>
        ))}
      </div>
    </AppSection>
  );
};

const Benefits = () => {
  const benefits = [
    "Identificar padrões abusivos instantaneamente",
    "Recuperar a autoestima massacrada",
    "Estabelecer limites claros e inegociáveis",
    "Romper vínculos destrutivos sem culpa",
    "Recomeçar com ferramentas reais e esperança"
  ];

  return (
    <AppSection className="bg-brand-dark text-white text-center">
      <AppFadeIn>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Benefícios da Sua Jornada</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <AppButton variant="gold" className="mx-auto">
            QUERO ESSES RESULTADOS
            <ArrowRight size={18} />
          </AppButton>
        </div>
      </AppFadeIn>
    </AppSection>
  );
};

const ImpactQuote = () => (
  <AppSection className="py-0 overflow-hidden bg-brand-light">
    <div className="bg-white max-w-4xl mx-auto my-20 p-12 md:p-24 rounded-[60px] text-center border-2 border-brand-gold shadow-2xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark p-4 rounded-full">
        <Target size={32} />
      </div>
      <AppFadeIn>
        <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-6 block">Reflexão Profunda</span>
        <blockquote className="text-3xl md:text-5xl font-serif italic text-brand-dark leading-tight mb-8">
          “O empata torna-se o combustível emocional que alimenta o ego do narcisista.”
        </blockquote>
        <div className="w-16 h-1 bg-brand-gold mx-auto" />
      </AppFadeIn>
    </div>
  </AppSection>
);


const Testimonials = () => {
  const reviews = [
    { name: "Maria S.", text: "Eu achava que o problem era eu. Este livro me deu os 'olhos' que eu precisava para ver a teia de mentiras em que eu vivia. Recomendo a todas!", rating: 5 },
    { name: "Fernanda L.", text: "A parte sobre 'Narcisista Oculto' mudou tudo. Consegui finalmente entender por que me sentia tão mal mesmo quando tudo 'parecia' bem.", rating: 5 },
    { name: "Julia M.", text: "Escrita acolhedora e direta ao ponto. Senti como se as autoras estivessem segurando minha mão durante a leitura.", rating: 5 }
  ];

  return (
    <AppSection className="bg-brand-light">
      <AppFadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Relatos de Transformação</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Sparkles key={i} className="text-brand-gold" size={20} />)}
          </div>
        </div>
      </AppFadeIn>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <AppFadeIn key={i} delay={i * 0.1}>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-medium/5 relative h-full">
              <p className="text-brand-medium italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center font-bold text-brand-dark">
                  {review.name[0]}
                </div>
                <span className="font-bold text-brand-dark">{review.name}</span>
              </div>
            </div>
          </AppFadeIn>
        ))}
      </div>
    </AppSection>
  );
};

const Pricing = () => (
  <AppSection className="text-center overflow-hidden relative py-32">
    {/* Background decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
    
    <AppFadeIn>
      <div className="max-w-2xl mx-auto bg-white p-12 md:p-20 rounded-[50px] shadow-3xl border-2 border-brand-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 gold-gradient px-8 py-2 text-xs font-bold text-brand-dark rounded-bl-3xl uppercase tracking-widest shadow-md">
          Acesso Imediato
        </div>
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Escolha a sua libertação</h2>
          <p className="text-brand-medium text-lg">Receba o eBook "O Fim do Jogo Narcisista" agora mesmo em seu e-mail.</p>
        </div>
        
        <div className="mb-12 p-8 bg-brand-light rounded-[30px] border border-brand-gold/10">
          <span className="text-brand-accent/60 line-through block text-xl mb-4 font-medium">De R$ 147,00</span>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-brand-dark font-medium uppercase tracking-tighter">Por apenas</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand-dark">R$</span>
              <span className="text-7xl md:text-8xl font-black text-brand-dark tracking-tighter">47,00</span>
            </div>
          </div>
        </div>

        <AppButton variant="gold" className="w-full mb-8 py-7 text-xl shadow-[0_20px_40px_rgba(212,175,55,0.4)]">
          QUERO COMEÇAR MINHA CURA
          <Zap size={24} fill="currentColor" />
        </AppButton>

        <div className="grid grid-cols-2 gap-6 text-[10px] text-brand-medium/60 font-bold uppercase tracking-widest">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck size={24} className="text-brand-gold" />
            <span>Compra Segura</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CreditCard size={24} className="text-brand-gold" />
            <span>Vários Métodos</span>
          </div>
        </div>
      </div>
    </AppFadeIn>
  </AppSection>
);

const Guarantee = () => (
  <AppSection className="bg-brand-light text-center">
    <AppFadeIn>
      <div className="max-w-2xl mx-auto">
        <div className="inline-block p-4 rounded-full bg-brand-gold/20 mb-8">
           <Award className="text-brand-gold" size={48} />
        </div>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Garantia Incondicional</h2>
        <p className="text-brand-medium text-lg leading-relaxed mb-6">
          Você tem **7 dias** para ler e aplicar o guia. Se por qualquer motivo você sentir que este livro não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
        </p>
        <span className="text-brand-dark font-bold uppercase tracking-widest text-xs">Risco Zero para Você</span>
      </div>
    </AppFadeIn>
  </AppSection>
);

const FAQ = () => {
  const faqs = [
    { q: "Como vou receber o livro?", a: "Após a confirmação do pagamento, você receberá um link de acesso imediato diretamente no seu e-mail." },
    { q: "Posso ler no meu celular?", a: "Sim! O eBook está em formato PDF de alta qualidade, compatível com celulares, tablets, computadores e e-readers." },
    { q: "O pagamento é seguro?", a: "Absolutamente. Utilizamos as maiores plataformas de infoprodutos do Brasil, com criptografia de ponta a ponta." },
    { q: "Este livro serve para quem ainda está na relação?", a: "Sim. O livro é fundamental para que você primeiro ganhe clareza e força interna para tomar as melhores decisões para sua vida." },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <AppSection>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark text-center mb-16">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-medium/10 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-colors">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 bg-white text-left font-bold text-brand-dark focus:outline-none"
              >
                <span>{faq.q}</span>
                <HelpCircle className={`text-brand-gold transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-medium italic leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AppSection>
  );
};

const ContactCTA = () => (
  <AppSection className="bg-brand-dark text-white text-center pb-32">
    <AppFadeIn>
      <Sparkles className="mx-auto text-brand-gold mb-8" size={60} />
      <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
        Está na hora de pôr fim ao jogo e <br/>
        <span className="text-brand-gold">permitir-se renascer</span>.
      </h2>
      <p className="text-brand-light/70 text-xl max-w-xl mx-auto mb-12">
        Abrace a jornada para a sua versão mais forte e livre que já existiu.
      </p>
      <AppButton variant="gold" className="mx-auto py-6 px-12 text-lg">
        QUERO COMEÇAR MINHA CURA
        <Sparkles size={20} />
      </AppButton>
    </AppFadeIn>
  </AppSection>
);


// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Minimal and Transparent */}
      <nav className="absolute top-0 left-0 w-full z-[100] px-6 py-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-brand-dark shadow-lg">
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-xl font-bold tracking-tight leading-none drop-shadow-md">O Fim do Jogo</span>
              <span className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.2em] drop-shadow-sm">Narcisista</span>
            </div>
          </div>
          <AppButton variant="gold" className="hidden md:flex px-8 py-3 text-xs shadow-xl">
            Comprar eBook
          </AppButton>
          <div className="md:hidden">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      <Hero />
      <Identification />
      <AboutBook />
      <WhatYouWillLearn />
      <Benefits />
      <ImpactQuote />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <ContactCTA />

      <footer className="bg-[#0F1D30] py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/60 text-sm">
            &copy; 2024 - O Fim do Jogo Narcisista. Todos os direitos reservados.
          </div>
          <div className="flex gap-6 text-white/40 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-brand-gold">Políticas de Privacidade</a>
            <a href="#" className="hover:text-brand-gold">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
