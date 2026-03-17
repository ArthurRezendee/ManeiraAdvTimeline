import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";

/* ===========================
   LEGENDAS DO DOCUMENTO
=========================== */

const customCaptions: Record<string, string[]> = {
  // Ordem alfabética dos arquivos: 2016-1, 2016-2, 2016-3, 2016-4
  "2016": [
    "Instalação Sede, primeiro escritório na Av. Rio Branco - RJ",
    "Equipe dos primeiros sócios - RJ",
    "Confraternização de fim de ano com a equipe administrativa",
    "Priscila Damasceno, primeira funcionária do Maneira Advogados com a sócia Dra Rosara Maneira"
  ],

  // Ordem alfabética dos arquivos: 2017-1, 2017-2, 2017-3, 2017-4
  "2017": [
    "Equipe e sócios reunidos na unidade do Rio de Janeiro",
    "Em clima de festa, confraternização de fim de ano na Unidade do RJ",
    "Almoço de confraternização da equipe administrativa, RJ",
    "Oscar Freire - São Paulo, Localização da Unidade Maneira Advogados"
  ],

  // Ordem alfabética dos arquivos: 2018-1, 2018-2, 2018-4
  "2018": [
    "Sócios Dr. Daniel Lannes, Dr. Eduardo Lourenço, Dr. Lucas Mayall e Dr. Daniel Serra Lima",
    "Dr. Eduardo Maneira com sua esposa e sócia Dra Rosara e os filhos Luis Eduardo e João na inauguração do novo espaço da sede",
    "Almoço de confraternização da equipe administrativa do RJ"
  ],

  // Ordem alfabética dos arquivos: 1, 2, 3, 4, 6, 8  (arquivo "5._" não é imagem e não é carregado)
  "2019": [
    "Os sócios Dr. Luis Eduardo e Dr. Eduardo Maneira recebendo convidados, clientes e amigos como o navegador Amyr Klink e o músico Geraldo Carneiro em evento cultural promovido pelo Maneira Advogados",
    "Dra Rosara recebendo o selo de reconhecimento de embaixadores de apoio ao Instituto Ponte ao lado de sua fundadora Bartira Almeida em evento cultural promovido pelo Maneira Advogados no RJ",
    "Auditório com os convidados do evento cultural com palestra e lançamento de livro do navegador Amyr Klink e apoio do escritório ao Instituto Ponte",
    "Presença especial no evento da Dona Lygia, mãe do Dr. Eduardo Maneira",
    "Jovens advogados e sócios do Maneira Advogados",
    "Confraternização de final de ano, equipe administrativa do Maneira Advogados RJ"
  ],

  // Ordem alfabética dos arquivos: RIBAS@00004, RIBAS@00047, RIBAS@00087
  "2020": [
    "Escritório, RJ",
    "As reuniões passaram para o ambiente Web",
    "Os postos de trabalho foram substituídos pelo trabalho em casa, voltando paulatinamente, e de modo híbrido, conforme as recomendações da Organização Mundial da Saúde"
  ],

  // Ordem alfabética dos arquivos: 2021-1, 2021-2, 2021-3, 2021-5, 2021-6
  "2021": [
    "Instalação da nova unidade em Belo Horizonte - MG",
    "Espaço de convivência, Unidade Belo Horizonte",
    "Dra Rosara Maneira e Dr. Eduardo Maneira na confraternização de final de ano de todas as equipes do Maneira Advogados realizada em Belo Horizonte - MG",
    "Confraternização de fim de ano em Belo Horizonte - MG",
    "O casal Dr. Eduardo Maneira e Dra Rosara Maneira e os sócios de Belo Horizonte, Dr. Pedro Brito e Dr. André Brito."
  ],

  // Ordem alfabética dos arquivos: 1, 10, 2, 3, 4, 5, 6, 7, 8, 9
  // ("10" vem antes de "2" lexicograficamente, por isso a legenda da foto 10 ocupa o índice 1)
  "2022": [
    "Novo endereço da sede. Ambientes assinados pela arquiteta Germana Giannetti",
    "Sócios",
    "Palestra do Prof. Richard Fonseca na unidade do Rio de Janeiro, transmitida simultaneamente para as unidades de São Paulo, Belo Horizonte e Brasília.",
    "Em Brasília, encontro promovido pelo prof. Eduardo entre os presidentes do Senado, Rodrigo Pacheco, e da Câmara dos Deputados, Arthur Lira com o diretor da FND-UFRJ Carlos Bolonha e a vice-diretora Carolina Pizoeiro e participação do sócio Eduardo Lourenço.",
    "Sócios e o clima de amizade em confraternização de fim de ano",
    "O ambiente familiar da confraternização de fim de ano",
    "Família Maneira e a amiga e funcionária Rosa",
    "Sócios na confraternização",
    "Sócios na confraternização",
    "Dr. Eduardo Maneira e seu filho, Dr. Luis Eduardo Maneira"
  ],

  // Ordem alfabética dos arquivos: 1, 10, 2, 3, 4, 5, 6, 7
  // ("10" vem antes de "2"; a legenda da foto 10 — última do ano — ocupa o índice 1)
  "2023": [
    "Coquetel oferecido pela Embaixada do Brasil, em Roma, aos participantes do Congresso Internacional promovido pela ESA - OAB Federal",
    "Confraternização de fim de ano com as quatro unidades reunidas",
    "Dr. Eduardo Maneira e Dr. Luis Eduardo Maneira no Congresso Internacional promovido pela ESA - OAB Federal",
    "Reunião anual de sócios na sede do ECIJA em Madri-Espanha",
    "Os sócios Dr. Lucas Mayall, Dr. Pedro Ribas, Dr. Luis Eduardo e Dr. Eduardo Maneira na Espanha, para reunião anual de sócios ECIJA",
    "Almoço comemorativo com a equipe administrativa",
    "Dr. Eduardo Maneira e família",
    "Dr. Eduardo, Dra Rosara e a neta Letícia na confraternização de fim de ano do Maneira Advogados"
  ],

  // Ordem alfabética dos arquivos: 1, 2, 3, 4, 5, 6, 7, 8
  "2024": [
    "Nomeação do Dr. Eduardo Maneira como Professor Titular da Faculdade Nacional de Direito da Universidade Federal do Rio de Janeiro",
    "Sócios e convidados prestigiando a nomeação do Dr. Eduardo Maneira como Professor Titular da Faculdade Nacional de Direito da Universidade Federal do Rio de Janeiro",
    "Coquetel celebrativo na ocasião da defesa da titularidade do Dr. Eduardo Maneira, na Faculdade Nacional de Direito da Universidade Federal do Rio de Janeiro",
    "Sócios do Maneira Advogados no Seminário Internacional promovido pela ESA Nacional em parceria com a Universidade Complutense de Madrid",
    "Em clima de festa junina, equipe em evento festivo na sede, RJ.",
    "Inauguração do Clube de Leitura \"Livros à Maneira\" idealizado pela Dra Rosara. Equipe da Assessoria acadêmica com a Dra. Rosara e a gestora em informação, a bibliotecária Ana Paula de Rezende",
    "Confraternização do Maneira Advogados, RJ",
    "Confraternização de fim de ano. Com a palavra, Dra Rosara Maneira e Dr. Eduardo Maneira"
  ],

  // Ordem alfabética dos arquivos: 1, 2, 3, 4, "5- 2025 BH", "6 - 2025", "7 - Madri 2025"
  // (arquivo "8 - 2025.pdf" é excluído por ser PDF)
  "2025": [
    "Mudança de endereço da unidade de São Paulo.",
    "SP, Ambientes assinados pela arquiteta Germana Giannetti",
    "Espaço de convivência - Unidade de SP",
    "Equipe Maneira Advogados - inauguração da Unidade São Paulo",
    "Registro confraternização Unidade BH",
    "Participação dos sócios em evento internacional - Madri",
    "Selos das publicações e reconhecimentos nacionais e internacionais recebidos pelo Maneira Advogados"
  ],
};

/* ===========================
   IMPORTAÇÃO TIMELINE
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

    if (!timelineImagesMap[year]) timelineImagesMap[year] = [];

    timelineImagesMap[year].push({
      src: (mod as any).default,
      caption: ""
    });
  }
});

Object.keys(timelineImagesMap).forEach((year) => {
  timelineImagesMap[year] = timelineImagesMap[year].map((img, index) => ({
    ...img,
    caption: customCaptions[year]?.[index] || ""
  }));
});

/* ===========================
   IMPORTAÇÃO DR EDUARDO
=========================== */

const drEduardoImages: string[] = [];

const drModules = import.meta.glob(
  "/src/assets/Linha do tempo/dr_eduardo/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

Object.values(drModules).forEach((mod) => {
  drEduardoImages.push((mod as any).default);
});

/* ===========================
   CAROUSEL DR EDUARDO
=========================== */

function DrEduardoCarousel({ images }: { images: string[] }) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);

  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">

      {images.map((img, i) => (

        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />

      ))}

    </div>
  );
}

/* ===========================
   CAROUSEL TIMELINE
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

  if (!images || images.length === 0) return null;

  return (
    <div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">

        {images.map((img, i) => (

          <img
            key={i}
            src={img.src}
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
   TIMELINE DATA
=========================== */


const timelineData = [

{
year:"2016",
title:"Fundação com propósito e sólida trajetória - Sede RJ",
description:`Fundado no Rio de Janeiro, o escritório nasceu da sólida trajetória acadêmica e profissional do Prof. Dr. Eduardo Maneira, reunindo sócios qualificados unidos pelos pilares da confiança, amizade e excelência no Direito Tributário e Empresarial.`,
details:`A liderança da Dra. Rosara Maneira contribuiu para a estruturação e gestão do projeto institucional. Com o incentivo do sócio fundador, o Dr. Luis Eduardo Maneira integrou jovens advogados de sua geração, fortalecendo a construção de uma instituição sólida desde sua origem.`,
images:timelineImagesMap["2016"]||[]
},

{
year:"2017",
title:"Expansão estratégica (abertura da unidade de SP) e incorporação de novas áreas de atuação",
description:`Início do movimento planejado de expansão, com a abertura de unidades em capitais brasileiras, fortalecimento da estrutura administrativa e ampliação do portfólio de serviços.`,
details:`Incluindo áreas como corporate, telecomunicações e proteção de dados.`,
images:timelineImagesMap["2017"]||[]
},

{
year:"2018",
title:"Consolidação interna e projeção internacional",
description:`Ampliação da sede e fortalecimento institucional acompanham o crescimento da equipe e da base de clientes.`,
details:`O escritório firma acordo de cooperação estratégica com a firma europeia ECIJA, ampliando sua atuação internacional e o suporte jurídico a operações com alcance global.`,
images:timelineImagesMap["2018"]||[]
},

{
year:"2019",
title:"Inovação, educação e publicações",
description:`O escritório investe em tecnologia e em soluções jurídicas inovadoras, acompanhando as transformações digitais do Direito e avanços regulatórios como a Lei Geral de Proteção de Dados.`,
details:`Fortalece também a produção intelectual e promove eventos culturais e acadêmicos.`,
images:timelineImagesMap["2019"]||[]
},

{
year:"2020",
title:"Maturidade institucional em cenário de crise",
description:`Durante a pandemia de COVID-19 o escritório demonstrou maturidade institucional e capacidade de adaptação.`,
details:`Implementou modelo híbrido de trabalho e preservou empregos e estabilidade organizacional.`,
images:timelineImagesMap["2020"]||[]
},

{
year:"2021",
title:"Integração e expansão institucional (abertura da Unidade de BH)",
description:`O escritório amplia sua presença institucional com a inauguração da unidade de Belo Horizonte.`,
details:`O ano também foi marcado por reconhecimentos em diretórios internacionais.`,
images:timelineImagesMap["2021"]||[]
},

{
year:"2022",
title:"Estrutura, Gestão e Expansão institucional (abertura da Unidade de Brasília-DF)",
description:`O escritório fortalece sua estrutura interna com novas parcerias em gestão de pessoas e educação continuada.`,
details:`Também inaugura a unidade em Brasília ampliando a atuação institucional.`,
images:timelineImagesMap["2022"]||[]
},

{
year:"2023",
title:"Educação e pesquisa como eixo transformador",
description:`Programas internos de liderança, equidade racial e projetos sociais ampliam o compromisso institucional.`,
details:`O escritório inaugura projetos como a biblioteca especializada e fortalece a produção intelectual.`,
images:timelineImagesMap["2023"]||[]
},

{
year:"2024",
title:"Dr. Eduardo Maneira é nomeado professor titular da FND-UFRJ",
description:`O sócio fundador é nomeado Professor Titular de Direito Tributário da Faculdade Nacional de Direito da UFRJ.`,
details:`O reconhecimento reforça a credibilidade acadêmica e institucional do escritório.`,
images:timelineImagesMap["2024"]||[]
},

{
year:"2025",
title:"Reconhecimento global e cultura institucional",
description:`O escritório consolida presença em diretórios jurídicos internacionais como Chambers and Partners, Leaders League, Best Lawyers e Legal 500.`,
details:`Os reconhecimentos refletem a excelência técnica da equipe e a confiança do mercado.`,
images:timelineImagesMap["2025"]||[]
},

{
year:"2026",
title:"Dez anos de trajetória, muito trabalho e celebrações!",
description:`Ao completar dez anos, o Maneira Advogados celebra com profunda gratidão a confiança e parceria de amigos, colaboradores, sócios e clientes.`,
details:`Essa década representa a consolidação de uma trajetória marcada por trabalho, amizade, confiança e prosperidade institucional.`,
images:[]
}

];

/* ===========================
   PAGE
=========================== */

export default function Home(){

const containerRef = useRef(null);

return(

<div className="min-h-screen bg-background text-foreground">

<nav className="fixed top-0 w-full z-50 bg-primary text-white border-b border-white/10">
<div className="container mx-auto px-6 h-24 flex items-center justify-between">
<img src={logo} className="h-14"/>
</div>
</nav>

<section className="pt-40 pb-24 text-center">
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

<DrEduardoCarousel images={drEduardoImages}/>

</div>

</section>

<section className="py-32">

<div className="container mx-auto px-6 space-y-40">

{timelineData.map((item,index)=>{

const isLast = item.year==="2026";

return(

<motion.div
key={item.year}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.8}}
className={`grid ${isLast?"md:grid-cols-1 text-center":"md:grid-cols-2"} gap-16 items-center`}
>

<div className={index%2!==0 && !isLast ? "md:order-2":""}>

<span className="text-accent font-serif text-6xl font-bold block mb-6">
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

{!isLast && (

<div className={index%2!==0 ? "md:order-1":""}>
<TimelineCarousel images={item.images}/>
</div>

)}

</motion.div>

);

})}

</div>

</section>

<footer className="bg-primary text-white py-16 text-center">

<img src={logo} className="h-12 mx-auto mb-6 brightness-0 invert"/>

<p className="text-white/40 text-sm">
© 2016–2026 Maneira Advogados
</p>

</footer>

</div>

);

}