import { motion } from "framer-motion";
import { useRef } from "react";
import { Search, Globe } from "lucide-react";
import heroOffice from "@/assets/images/hero-office.jpg";
import justiceScale from "@/assets/images/justice-scale.jpg";

const timelineData = [
  {
    year: "2016",
    title: "Fundação com propósito e maturidade - sede RJ",
    description: "O Maneira Advogados nasceu no Rio de Janeiro sustentado pela sólida trajetória acadêmica e profissional de seu sócio fundador, Professor Dr. Eduardo Maneira.",
    details: "A conjugação da expertise jurídica do Dr. Eduardo Maneira com a capacidade de gestão da Dra. Rosara foi determinante."
  },
  {
    year: "2017",
    title: "Expansão estratégica (unidade SP)",
    description: "Abertura da unidade em São Paulo marca um movimento estratégico de expansão nacional.",
    details: "Consolidação da estrutura administrativa e fortalecimento das equipes multidisciplinares."
  },
  {
    year: "2018",
    title: "Consolidação e projeção internacional",
    description: "Ampliação da sede e fortalecimento da atuação institucional com acordo de cooperação global.",
    details: "Firma acordo estratégico com a firma europeia ECIJA, ampliando atuação internacional."
  },
  {
    year: "2019",
    title: "Inovação e fortalecimento da marca",
    description: "Investimento em tecnologia e ferramentas de apoio à inovação jurídica.",
    details: "Acompanhando transformações digitais e aprimorando processos internos continuamente."
  },
  {
    year: "2020",
    title: "Maturidade institucional em cenário de crise",
    description: "Adaptação ao modelo híbrido durante a pandemia, preservando estabilidade e empregos.",
    details: "Intensificação da produção intelectual e participação em debates de relevância nacional."
  },
  {
    year: "2021",
    title: "Integração entre academia e mercado",
    description: "Criação da Assessoria Acadêmica e inauguração da unidade de Belo Horizonte.",
    details: "Estreitamento de relações com a UFRJ e participação ativa em feiras de estágio."
  },
  {
    year: "2022",
    title: "Expansão institucional e cuidado com pessoas",
    description: "Profissionalização de setores internos e mudança para nova sede no Rio de Janeiro.",
    details: "Abertura da unidade no Distrito Federal com foco em consultoria legislativa."
  },
  {
    year: "2023",
    title: "Educação como eixo transformador",
    description: "Inauguração de biblioteca especializada e programas de capacitação em liderança.",
    details: "Iniciativas voltadas à equidade racial e projetos sociais de impacto."
  },
  {
    year: "2024",
    title: "Cultura profissional integrada",
    description: "Dr. Eduardo Maneira é nomeado Professor Titular de Direito Tributário da UFRJ.",
    details: "Consolidação da cultura profissional baseada na integração entre teoria e prática."
  },
  {
    year: "2025",
    title: "Reconhecimento nacional e internacional",
    description: "Liderança em rankings como Chambers, Leaders League e Legal 500.",
    details: "Implementação do projeto 'Livros à Maneira' e títulos honorários significativos."
  },
  {
    year: "2026",
    title: "Dez anos de trajetória e visão de futuro",
    description: "Celebração de uma década com foco em compliance, tecnologia e sustentabilidade.",
    details: "Construção de um legado que orienta o presente e projeta o futuro do escritório."
  }
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-white text-[#404b5a] font-sans">
      {/* Header - Matching the screenshot style */}
      <header className="bg-[#404b5a] text-white fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-light tracking-[0.2em]">MANEIRA</span>
            <span className="text-[10px] tracking-[0.3em] opacity-80 -mt-1 uppercase">Advogados</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-medium tracking-widest uppercase">
            <a href="#" className="hover:text-white/70 transition-colors border-b-2 border-[#e35a44] pb-1">Sobre nós</a>
            <a href="#" className="hover:text-white/70 transition-colors pb-1">Áreas de atuação</a>
            <a href="#" className="hover:text-white/70 transition-colors pb-1">Equipe</a>
            <a href="#" className="hover:text-white/70 transition-colors pb-1">Direito em foco</a>
            <a href="#" className="hover:text-white/70 transition-colors pb-1">Publicações</a>
            <a href="#" className="hover:text-white/70 transition-colors pb-1">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center opacity-80">
              <Globe className="w-4 h-4" />
              <span className="text-xs">PT</span>
            </div>
            <Search className="w-4 h-4 opacity-80 cursor-pointer hover:opacity-100" />
          </div>
        </div>
      </header>

      {/* Hero Section - Matching screenshot layout */}
      <section className="pt-40 pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="text-[#e35a44] text-sm font-medium mb-6 block">Sobre nós</span>
              <h1 className="text-4xl lg:text-6xl font-semibold text-[#404b5a] leading-[1.1] mb-8">
                O Maneira Advogados atua nas mais relevantes áreas do direito empresarial
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Referência entre os escritórios brasileiros, o Maneira Advogados é um escritório com atuação abrangente e conta com equipes especializadas para assessoria em diferentes áreas, como direito tributário, resoluções de disputas cíveis e societário.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-[#e35a44] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#c94b38] transition-all shadow-md">
                  Saiba mais
                </button>
                <a href="#" className="text-gray-400 hover:text-[#404b5a] underline underline-offset-4 text-sm font-medium transition-colors">
                  Trabalhe conosco
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-[#e35a44]/20 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={heroOffice} 
                  alt="Maneira Advogados Office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Adapted to the visual style */}
      <section id="linha-do-tempo" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#404b5a] mb-4">Nossa Trajetória</h2>
            <div className="w-12 h-1 bg-[#e35a44] mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 lg:gap-12 mb-16 relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-[#e35a44] leading-none mb-2">{item.year}</div>
                  <div className="w-px h-full bg-gray-200 group-last:bg-transparent mt-2" />
                  <div className="w-3 h-3 rounded-full bg-[#e35a44] absolute top-1.5 -left-1.5 hidden lg:block shadow-[0_0_0_4px_rgba(227,90,68,0.1)]" />
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#404b5a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-gray-50 text-sm text-gray-500 italic">
                    {item.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Matching Header Style */}
      <footer className="bg-[#404b5a] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
            <div>
              <div className="flex flex-col mb-6">
                <span className="text-xl font-light tracking-[0.2em]">MANEIRA</span>
                <span className="text-[10px] tracking-[0.3em] opacity-80 -mt-1 uppercase">Advogados</span>
              </div>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                Compromisso com a excelência técnica e com a defesa dos princípios constitucionais em todas as nossas áreas de atuação.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#e35a44]">Unidades</h4>
              <ul className="text-sm space-y-3 opacity-80 font-light">
                <li>Rio de Janeiro</li>
                <li>São Paulo</li>
                <li>Belo Horizonte</li>
                <li>Brasília</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#e35a44]">Contato</h4>
              <p className="text-sm opacity-80 font-light mb-4">Fale conosco para soluções jurídicas integradas e multidisciplinares.</p>
              <button className="border border-white/20 hover:bg-white/10 px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-colors">
                Enviar Mensagem
              </button>
            </div>
          </div>
          <div className="text-[11px] opacity-40 text-center tracking-widest uppercase">
            © 2016—2026 Maneira Advogados. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
