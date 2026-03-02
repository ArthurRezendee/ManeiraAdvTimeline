import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import justiceScale from "@/assets/images/justice-scale.jpg";
import logo from "@/assets/images/logo.png";

/* ===========================
   LEGENDAS PERSONALIZADAS
=========================== */

const customCaptions: Record<string, string[]> = {
  "2016": [
    "Instalação Sede Av. Rio Branco. RJ/RJ",
    "Confraternização equipe administrativo RJ",
    "Equipe RJ"
  ],
  "2017": [
    "Inauguração da unidade São Paulo"
  ],
  "2018": [
    "Expansão da sede",
    "Parceria internacional firmada"
  ],
  "2019": [
    "Investimento em inovação jurídica"
  ],
  "2020": [
    "Atuação durante a pandemia",
    "Implementação do modelo híbrido"
  ],
  "2021": [
    "Criação da Assessoria Acadêmica",
    "Inauguração da unidade BH"
  ],
  "2022": [
    "Nova sede RJ",
    "Unidade no Distrito Federal"
  ],
  "2023": [
    "Inauguração da biblioteca especializada"
  ],
  "2024": [
    "Nomeação como Professor Titular"
  ],
  "2025": [
    "Reconhecimento nacional e internacional"
  ],
  "2026": [
    "10 anos de trajetória institucional"
  ],
};

/* ===========================
   IMPORTAÇÃO DAS IMAGENS
=========================== */

type TimelineImage = {
  src: string;
  caption: string;
};

const timelineImagesMap: Record<string, TimelineImage[]> = {};

const modules = import.meta.glob(
  "/src/assets/Linha do tempo/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

Object.entries(modules).forEach(([path, mod]) => {
  const match = path.match(/\/([0-9]{4})\//);

  if (match) {
    const year = match[1];

    if (!timelineImagesMap[year]) {
      timelineImagesMap[year] = [];
    }

    timelineImagesMap[year].push({
      src: (mod as any).default,
      caption: "",
    });
  }
});

/* Aplica legendas personalizadas */
Object.keys(timelineImagesMap).forEach((year) => {
  timelineImagesMap[year] = timelineImagesMap[year].map((img, index) => ({
    ...img,
    caption:
      customCaptions[year]?.[index] ||
      "Registro institucional",
  }));
});

/* ===========================
   CAROUSEL
=========================== */

function TimelineCarousel({ images }: { images: TimelineImage[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-muted/20 rounded-sm shadow-inner flex items-center justify-center">
        <span className="text-muted-foreground text-sm">
          Sem imagens
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 text-sm text-muted-foreground text-center italic">
        {images[index]?.caption}
      </div>
    </div>
  );
}

/* ===========================
   DADOS COMPLETOS
=========================== */

const timelineDataBase = [
  {
    year: "2016",
    title: "Fundação com propósito e maturidade - sede RJ",
    description:
      "O Maneira Advogados nasceu no Rio de Janeiro sustentado pela sólida trajetória acadêmica e profissional de seu sócio fundador, Professor Dr. Eduardo Maneira, com mais de três décadas de atuação no Direito Tributário e mais de vinte anos dedicados ao magistério.",
    details:
      "A conjugação da expertise jurídica do Dr. Eduardo Maneira com a capacidade de gestão da Dra. Rosara e a confiança entre os amigos foi determinante para a construção de uma instituição sólida desde sua origem.",
  },
  {
    year: "2017",
    title: "Expansão estratégica (unidade SP) e fortalecimento institucional",
    description:
      "A abertura da unidade em São Paulo marca um movimento estratégico de expansão, ampliando a presença institucional e a capacidade de atendimento a empresas em diferentes regiões do país.",
    details:
      "Paralelamente, o escritório consolida sua estrutura administrativa e fortalece suas equipes, expandindo o portfólio de serviços para áreas como corporate, telecomunicações e proteção de dados.",
  },
  {
    year: "2018",
    title: "Consolidação e projeção internacional",
    description:
      "O crescimento da base de clientes e da equipe resulta na ampliação da sede e no fortalecimento da atuação institucional.",
    details:
      "Nesse contexto, o escritório firma acordo de cooperação estratégica com a firma europeia ECIJA, ampliando sua atuação internacional e oferecendo aos clientes suporte jurídico em operações globais.",
  },
  {
    year: "2019",
    title: "Inovação e fortalecimento da marca",
    description:
      "O Maneira Advogados investe em tecnologia e em ferramentas de apoio à inovação jurídica, acompanhando as transformações digitais do Direito e aprimorando seus processos internos.",
    details:
      "Esse movimento reforça a identidade da marca como um escritório atento às mudanças regulatórias e comprometido com a eficiência e a atualização contínua.",
  },
  {
    year: "2020",
    title: "Maturidade institucional em cenário de crise",
    description:
      "Durante o período da pandemia, o escritório demonstra maturidade e capacidade de adaptação, implementando o modelo híbrido de trabalho e preservando a estabilidade financeira e institucional.",
    details:
      "A postura adotada durante a pandemia evidenciou o propósito institucional do Maneira Advogados e o respeito dedicado a cada sócio, advogado, colaborador e cliente.",
  },
  {
    year: "2021",
    title: "Integração entre academia e mercado de trabalho",
    description:
      "Em 2021, fortaleceu-se a conexão entre o ambiente acadêmico e a prática profissional, com a criação no escritório da Assessoria Acadêmica.",
    details:
      "No mesmo ano, foi inaugurada a unidade de Belo Horizonte, concebida de forma estratégica e padronizada, reforçando a presença institucional em Minas Gerais.",
  },
  {
    year: "2022",
    title: "Expansão institucional e cuidado com as pessoas",
    description:
      "O escritório avança na profissionalização de seus setores internos, implementando parcerias especializadas, como a Alcançarh Soluções em RH e ouvidoria externa.",
    details:
      "A mudança para a nova sede no Rio de Janeiro amplia a estrutura física e reforça a organização administrativa. A abertura da unidade no Distrito Federal com foco ampliado na consultoria legislativa.",
  },
  {
    year: "2023",
    title: "Educação como eixo transformador",
    description:
      "A formação de equipes multidisciplinares é reforçada com a inauguração de uma biblioteca especializada, equipada com recursos tecnológicos e suporte profissional.",
    details:
      "Programas internos de capacitação em liderança e iniciativas voltadas à equidade racial e a projetos sociais ampliam o impacto institucional do escritório.",
  },
  {
    year: "2024",
    title: "Cultura profissional integrada entre teoria e prática",
    description:
      "O fortalecimento da produção intelectual coletiva reflete a consolidação de uma cultura profissional baseada na integração entre teoria e prática.",
    details:
      "Nesse contexto, o Professor Dr. Eduardo Maneira é nomeado Professor Titular de Direito Tributário da Faculdade Nacional de Direito da UFRJ.",
  },
  {
    year: "2025",
    title: "Reconhecimento nacional e internacional",
    description:
      "O Maneira Advogados alcança expressivo reconhecimento em rankings jurídicos nacionais e internacionais, consolidando-se como referência nas áreas Tributária e Empresarial.",
    details:
      "Em 2025, o Dr. Eduardo Maneira recebeu o título de Cidadão Honorário do Rio de Janeiro, além de reconhecimentos em rankings como Chambers & Partners e Legal 500.",
  },
  {
    year: "2026",
    title: "Dez anos de trajetória e visão de futuro",
    description:
      "Ao completar dez anos, o escritório intensifica sua produção intelectual voltada a temas centrais do Direito Empresarial e Tributário, alinhada às novas demandas do mercado.",
    details:
      "Esta década representa a construção de um legado que se traduz em histórias, aprendizados e transformações que seguem orientando o presente e projetando o futuro.",
  },
];

const timelineData = timelineDataBase.map((item) => ({
  ...item,
  images: timelineImagesMap[item.year] || [],
}));

/* ===========================
   PAGE COMPLETA
=========================== */

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">

      <nav className="fixed top-0 w-full z-50 bg-primary text-white border-b border-white/10">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <img src={logo} className="h-14" alt="Logo" />
        </div>
      </nav>

      <section className="relative pt-40 pb-24 text-center">
        <h1 className="text-2xl md:text-6xl font-serif text-primary">
          Uma década de <span className="italic">excelência</span>
        </h1>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">
              A origem de uma trajetória sólida
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              Embora a constituição formal tenha ocorrido em 2016, essa trajetória começa muito antes.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <img src={justiceScale} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container mx-auto px-6 space-y-40 relative">

          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-orange-500" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-background z-10" />

              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <span className="text-6xl font-bold block mb-6 text-primary">
                  {item.year}
                </span>
                <h3 className="text-3xl font-serif text-primary mb-6">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <p className="italic text-muted-foreground/70 border-t pt-6">
                  {item.details}
                </p>
              </div>

              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <TimelineCarousel images={item.images} />
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <footer className="bg-primary text-white py-16 text-center">
        <img src={logo} className="h-12 mx-auto mb-6 brightness-0 invert" />
        <p className="text-white/40 text-sm">
          © 2016–2026 Maneira Advogados.
        </p>
      </footer>

    </div>
  );
}