import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroOffice from "@/assets/images/hero-office.jpg";
import justiceScale from "@/assets/images/justice-scale.jpg";

const timelineData = [
  {
    year: "2016",
    title: "Fundação com propósito e maturidade - sede RJ",
    description:
      "O Maneira Advogados nasceu no Rio de Janeiro sustentado pela sólida trajetória acadêmica e profissional de seu sócio fundador, Professor Dr. Eduardo Maneira, com mais de três décadas de atuação no Direito Tributário.",
    details:
      "A conjugação da expertise jurídica do Dr. Eduardo Maneira com a capacidade de gestão da Dra. Rosara e a confiança entre os amigos foi determinante para a construção de uma instituição sólida desde sua origem.",
  },
  {
    year: "2017",
    title: "Expansão estratégica e fortalecimento",
    description:
      "A abertura da unidade em São Paulo marca um movimento estratégico de expansão, ampliando a presença institucional e a capacidade de atendimento a empresas em diferentes regiões.",
    details:
      "Paralelamente, o escritório consolida sua estrutura administrativa e fortalece suas equipes, expandindo o portfólio de serviços.",
  },
  {
    year: "2018",
    title: "Consolidação e projeção internacional",
    description:
      "O crescimento da base de clientes e da equipe resulta na ampliação da sede e no fortalecimento da atuação institucional.",
    details:
      "O escritório firma acordo de cooperação estratégica com a firma europeia ECIJA, ampliando sua atuação internacional e oferecendo aos clientes suporte jurídico em operações globais.",
  },
  {
    year: "2019",
    title: "Inovação e fortalecimento da marca",
    description:
      "Investimento em tecnologia e em ferramentas de apoio à inovação jurídica, acompanhando as transformações digitais do Direito.",
    details:
      "Reforça a identidade da marca como um escritório atento às mudanças regulatórias e comprometido com a eficiência e a atualização contínua.",
  },
  {
    year: "2020",
    title: "Maturidade em cenário de crise",
    description:
      "Durante a pandemia, o escritório demonstra maturidade e capacidade de adaptação, implementando o modelo híbrido e preservando a estabilidade.",
    details:
      "A postura adotada evidenciou o propósito institucional e o respeito dedicado a cada sócio, advogado, colaborador e cliente.",
  },
  {
    year: "2021",
    title: "Integração academia e mercado",
    description:
      "Fortaleceu-se a conexão entre o ambiente acadêmico e a prática profissional, com a criação da Assessoria Acadêmica.",
    details:
      "Inauguração da unidade de Belo Horizonte, concebida de forma estratégica e padronizada, reforçando a presença em Minas Gerais.",
  },
  {
    year: "2022",
    title: "Expansão institucional e cuidado",
    description:
      "Avanço na profissionalização de setores internos, implementando parcerias especializadas em RH, ouvidoria externa e programas de educação.",
    details:
      "Mudança para a nova sede no Rio de Janeiro e abertura da unidade no Distrito Federal com foco na consultoria legislativa e contencioso.",
  },
  {
    year: "2023",
    title: "Educação como eixo transformador",
    description:
      "Inauguração de uma biblioteca especializada e programas internos de capacitação em liderança.",
    details:
      "Iniciativas voltadas à equidade racial e a projetos sociais ampliam o impacto institucional do escritório.",
  },
  {
    year: "2024",
    title: "Cultura profissional integrada",
    description:
      "O fortalecimento da produção intelectual coletiva reflete a consolidação de uma cultura profissional baseada na integração entre teoria e prática.",
    details:
      "O Professor Dr. Eduardo Maneira é nomeado Professor Titular de Direito Tributário da Faculdade Nacional de Direito da UFRJ.",
  },
  {
    year: "2025",
    title: "Reconhecimento nacional e internacional",
    description:
      "O escritório alcança expressivo reconhecimento em rankings jurídicos (Chambers, Leaders League, Legal 500), consolidando-se como referência.",
    details:
      "Dr. Eduardo Maneira recebe o título de Cidadão Honorário do Rio de Janeiro. Implementação do projeto 'Livros à Maneira'.",
  },
  {
    year: "2026",
    title: "Dez anos de trajetória e visão de futuro",
    description:
      "Ao completar dez anos, o escritório intensifica sua produção intelectual alinhada às novas demandas do mercado.",
    details:
      "Esta década representa a construção de um legado que se traduz em histórias, aprendizados e transformações que seguem orientando o presente e projetando o futuro.",
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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl leading-none">M</span>
            </div>
            <span className="font-serif text-xl tracking-wide font-medium text-primary">
              MANEIRA <span className="font-light">ADVOGADOS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-muted-foreground font-medium">
            <a href="#historia" className="hover:text-primary transition-colors">História</a>
            <a href="#linha-do-tempo" className="hover:text-primary transition-colors">Linha do Tempo</a>
            <a href="#futuro" className="hover:text-primary transition-colors">Visão de Futuro</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroOffice} 
            alt="Maneira Advogados Office" 
            className="w-full h-full object-cover opacity-[0.03]"
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
            <div className="inline-flex items-center gap-2 mb-8 border border-border/60 rounded-full px-4 py-1.5 bg-background/50 backdrop-blur-sm shadow-sm">
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
      <section id="linha-do-tempo" className="py-32 relative" ref={containerRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Evolução Institucional</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium">Os marcos da nossa história</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-border/80 transform md:-translate-x-1/2" />
            
            {/* Timeline Items */}
            <div className="space-y-24">
              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                    data-testid={`timeline-item-${item.year}`}
                  >
                    {/* Center Node */}
                    <div className="absolute left-[24px] md:left-1/2 w-3 h-3 bg-background border-2 border-accent rounded-full transform -translate-x-1/2 mt-2 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_0_4px_hsl(var(--background))]" />
                    
                    {/* Content Half */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 flex flex-col justify-center">
                      <div className={`md:px-12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="text-accent font-serif text-5xl md:text-6xl mb-4 block opacity-20 font-bold tracking-tighter">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground/80 font-light leading-relaxed border-l-2 border-border pl-4 md:border-l-0 md:pl-0 md:border-t md:pt-4 inline-block">
                          {item.details}
                        </p>
                      </div>
                    </div>

                    {/* Empty Half for layout */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="futuro" className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16 mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-white">Construindo <br/><span className="italic opacity-80">o amanhã</span></h2>
              <p className="text-primary-foreground/70 font-light max-w-md leading-relaxed">
                Mais do que registrar fatos, esta década representa a construção de um legado que se traduz em histórias, aprendizados e transformações que seguem orientando o presente e projetando o futuro.
              </p>
            </div>
            <div className="md:text-right">
              <div className="w-16 h-16 bg-white/10 rounded backdrop-blur-sm flex items-center justify-center mb-6 md:ml-auto">
                <span className="text-white font-serif font-bold text-3xl leading-none">M</span>
              </div>
              <p className="text-sm tracking-widest uppercase text-primary-foreground/50 font-medium">
                Feito por pessoas e para pessoas.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/40 font-light">
            <p>© 2016–2026 Maneira Advogados. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Rio de Janeiro</a>
              <a href="#" className="hover:text-white transition-colors">São Paulo</a>
              <a href="#" className="hover:text-white transition-colors">Brasília</a>
              <a href="#" className="hover:text-white transition-colors">Belo Horizonte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}