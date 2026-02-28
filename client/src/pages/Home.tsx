import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroOffice from "@/assets/images/hero-office.jpg";
import justiceScale from "@/assets/images/justice-scale.jpg";
import logo from "@/assets/images/logo.png";

// Images for checkpoints
import img2016 from "@/assets/images/2016-sede-rj.jpg";
import img2017 from "@/assets/images/2017-unidade-sp.jpg";
import img2018 from "@/assets/images/2018-internacional.jpg";
import img2019 from "@/assets/images/2019-inovacao.jpg";
import img2020 from "@/assets/images/2020-pandemia.jpg";
import img2021 from "@/assets/images/2021-academia.jpg";
import img2022 from "@/assets/images/2022-expansao.jpg";
import img2023 from "@/assets/images/2023-educacao.jpg";
import img2024 from "@/assets/images/2024-cultura.jpg";
import img2025 from "@/assets/images/2025-reconhecimento.jpg";
import img2026 from "@/assets/images/2026-futuro.jpg";

const timelineData = [
  {
    year: "2016",
    title: "Fundação com propósito e maturidade - sede RJ",
    description:
      "O Maneira Advogados nasceu no Rio de Janeiro sustentado pela sólida trajetória acadêmica e profissional de seu sócio fundador, Professor Dr. Eduardo Maneira, com mais de três décadas de atuação no Direito Tributário e mais de vinte anos dedicados ao magistério.",
    details:
      "A conjugação da expertise jurídica do Dr. Eduardo Maneira com a capacidade de gestão da Dra. Rosara e a confiança entre os amigos foi determinante para a construção de uma instituição sólida desde sua origem.",
    image: img2016
  },
  {
    year: "2017",
    title: "Expansão estratégica (unidade SP) e fortalecimento institucional",
    description:
      "A abertura da unidade em São Paulo marca um movimento estratégico de expansão, ampliando a presença institucional e a capacidade de atendimento a empresas em diferentes regiões do país.",
    details:
      "Paralelamente, o escritório consolida sua estrutura administrativa e fortalece suas equipes, expandindo o portfólio de serviços para áreas como corporate, telecomunicações e proteção de dados.",
    image: img2017
  },
  {
    year: "2018",
    title: "Consolidação e projeção internacional",
    description:
      "O crescimento da base de clientes e da equipe resulta na ampliação da sede e no fortalecimento da atuação institucional.",
    details:
      "Nesse contexto, o escritório firma acordo de cooperação estratégica com a firma europeia ECIJA, ampliando sua atuação internacional e oferecendo aos clientes suporte jurídico em operações globais.",
    image: img2018
  },
  {
    year: "2019",
    title: "Inovação e fortalecimento da marca",
    description:
      "O Maneira Advogados investe em tecnologia e em ferramentas de apoio à inovação jurídica, acompanhando as transformações digitais do Direito e aprimorando seus processos internos.",
    details:
      "Esse movimento reforça a identidade da marca como um escritório atento às mudanças regulatórias e comprometido com a eficiência e a atualização contínua.",
    image: img2019
  },
  {
    year: "2020",
    title: "Maturidade institucional em cenário de crise",
    description:
      "Durante o período da pandemia, o escritório demonstra maturidade e capacidade de adaptação, implementando o modelo híbrido de trabalho e preservando a estabilidade financeira e institucional.",
    details:
      "A postura adotada durante a pandemia evidenciou o propósito institucional do Maneira Advogados e o respeito dedicado a cada sócio, advogado, colaborador e cliente.",
    image: img2020
  },
  {
    year: "2021",
    title: "Integração entre academia e mercado de trabalho",
    description:
      "Em 2021, fortaleceu-se a conexão entre o ambiente acadêmico e a prática profissional, com a criação no escritório da Assessoria Acadêmica.",
    details:
      "No mesmo ano, foi inaugurada a unidade de Belo Horizonte, concebida de forma estratégica e padronizada, reforçando a presença institucional em Minas Gerais.",
    image: img2021
  },
  {
    year: "2022",
    title: "Expansão institucional e cuidado com as pessoas",
    description:
      "O escritório avança na profissionalização de seus setores internos, implementando parcerias especializadas, como a Alcançarh Soluções em RH e ouvidoria externa.",
    details:
      "A mudança para a nova sede no Rio de Janeiro amplia a estrutura física e reforça a organização administrativa. A abertura da unidade no Distrito Federal com foco ampliado na consultoria legislativa.",
    image: img2022
  },
  {
    year: "2023",
    title: "Educação como eixo transformador",
    description:
      "A formação de equipes multidisciplinares é reforçada com a inauguração de uma biblioteca especializada, equipada com recursos tecnológicos e suporte profissional.",
    details:
      "Programas internos de capacitação em liderança e iniciativas voltadas à equidade racial e a projetos sociais ampliam o impacto institucional do escritório.",
    image: img2023
  },
  {
    year: "2024",
    title: "Cultura profissional integrada entre teoria e prática",
    description:
      "O fortalecimento da produção intelectual coletiva reflete a consolidação de uma cultura profissional baseada na integração entre teoria e prática.",
    details:
      "Nesse contexto, o Professor Dr. Eduardo Maneira é nomeado Professor Titular de Direito Tributário da Faculdade Nacional de Direito da UFRJ.",
    image: img2024
  },
  {
    year: "2025",
    title: "Reconhecimento nacional e internacional",
    description:
      "O Maneira Advogados alcança expressivo reconhecimento em rankings jurídicos nacionais e internacionais, consolidando-se como referência nas áreas Tributária e Empresarial.",
    details:
      "Em 2025, o Dr. Eduardo Maneira recebeu o título de Cidadão Honorário do Rio de Janeiro, além de reconhecimentos em rankings como Chambers & Partners e Legal 500.",
    image: img2025
  },
  {
    year: "2026",
    title: "Dez anos de trajetória e visão de futuro",
    description:
      "Ao completar dez anos, o escritório intensifica sua produção intelectual voltada a temas centrais do Direito Empresarial e Tributário, alinhada às novas demandas do mercado.",
    details:
      "Esta década representa a construção de um legado que se traduz em histórias, aprendizados e transformações que seguem orientando o presente e projetando o futuro.",
    image: img2026
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary text-white border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Maneira Advogados" className="h-10 w-auto" />
            <span className="font-serif text-xl tracking-wide font-medium hidden sm:block">
              MANEIRA <span className="font-light">ADVOGADOS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.2em] uppercase text-white/80 font-medium">
            <a href="#historia" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#linha-do-tempo" className="hover:text-white transition-colors">Trajetória</a>
            <a href="#futuro" className="hover:text-white transition-colors">Visão</a>
            <button className="bg-accent px-4 py-2 rounded-full text-white text-[10px] hover:bg-accent/90 transition-all">Contato</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroOffice} 
            alt="Maneira Advogados Office" 
            className="w-full h-full object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-8 border border-accent/20 rounded-full px-4 py-1.5 bg-background/50 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">2016 — 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8">
              Uma década de <br className="hidden md:block" />
              <span className="italic text-foreground">excelência e propósito</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              A história do Maneira Advogados insere-se no contexto mais amplo da advocacia empresarial e tributária brasileira, marcada pelo compromisso com a excelência técnica e com a defesa dos princípios constitucionais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="historia" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">A origem de uma trajetória sólida</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Embora a constituição formal da sociedade tenha ocorrido em 2016, essa trajetória começa muito antes, consolidada no percurso profissional e acadêmico de seu sócio fundador, Professor Dr. Eduardo Maneira.
                </p>
                <p>
                  Em suma, apresenta-se a consolidação do que foi conquistado nestes dez primeiros anos, uma trajetória que evoluiu acompanhando o direito e as necessidades de seus clientes. Diante de todas as transformações pelas quais o mundo passa, a certeza de que somente um escritório que já nasceu com marca e propósito constrói uma trajetória tão consistente e responsável.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={justiceScale} 
                alt="Balança da Justiça" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="linha-do-tempo" className="py-32 relative bg-muted/10 overflow-x-auto hide-scrollbar select-none" ref={containerRef}>
        <div className="container mx-auto px-6 mb-24 sticky left-0">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Evolução Institucional</h2>
            <div className="w-12 h-1 bg-accent mx-auto" />
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium mt-4">Nossa trajetória em movimento</p>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-0 items-start px-[20vw] pb-32 min-w-max relative">
          {/* Continuous Background Line */}
          <div className="absolute top-[180px] left-0 right-0 h-px bg-accent/20 -z-10" />
          
          {timelineData.map((item, index) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px -100px 0px -100px" }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 w-[500px] md:w-[650px] group relative flex flex-col items-center px-20"
              data-testid={`timeline-item-${item.year}`}
            >
              {/* Year & Dot Container (Centralized) */}
              <div className="relative mb-12 flex flex-col items-center">
                <span className="text-accent font-serif text-8xl md:text-9xl mb-4 block font-bold tracking-tighter transition-all group-hover:scale-105 duration-700 leading-none">
                  {item.year}
                </span>
                
                {/* Central Dot on the line */}
                <div className="w-5 h-5 bg-accent rounded-full shadow-[0_0_25px_rgba(227,90,68,0.6)] z-10 transition-transform duration-500 group-hover:scale-150 relative">
                  <div className="absolute inset-0 bg-white rounded-full scale-[0.3]" />
                </div>
              </div>
              
              <div className="w-full">
                <div className="mb-10 rounded-sm overflow-hidden aspect-[16/9] shadow-2xl group-hover:shadow-[0_20px-60px_rgba(0,0,0,0.3)] transition-all duration-700">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  />
                </div>
                
                <div className="text-center max-w-lg mx-auto">
                  <h3 className="text-3xl font-serif text-primary mb-6 min-h-[4rem] flex items-center justify-center leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-base text-muted-foreground/70 font-light leading-relaxed border-t border-accent/20 pt-6 italic mx-auto max-w-md">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="futuro" className="bg-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16 mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-white">Construindo <br/><span className="italic opacity-80 text-accent">o amanhã</span></h2>
              <p className="text-white/70 font-light max-w-md leading-relaxed">
                Mais do que registrar fatos, esta década representa a construção de um legado que se traduz em histórias, aprendizados e transformações que seguem orientando o presente e projetando o futuro do Maneira Advogados.
              </p>
            </div>
            <div className="md:text-right">
              <img src={logo} alt="Maneira Advogados" className="h-12 w-auto mb-6 md:ml-auto brightness-0 invert" />
              <p className="text-sm tracking-widest uppercase text-white/50 font-medium">
                Feito por pessoas e para pessoas.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 font-light">
            <p>© 2016–2026 Maneira Advogados. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Rio de Janeiro</a>
              <a href="#" className="hover:text-accent transition-colors">São Paulo</a>
              <a href="#" className="hover:text-accent transition-colors">Brasília</a>
              <a href="#" className="hover:text-accent transition-colors">Belo Horizonte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}