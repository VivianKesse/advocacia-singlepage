import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Law from "../components/Law";
import Statistic from "../components/Statistic";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="bg-[url('/src/assets/balanca.png')] bg-cover h-screen bg-right bg-no-repeat bg-fixed flex items-center justify-center shadow-mainBlue">
        <h1 className="font-semibold text-xl w-[80%] text-center text-mainWhite md:text-3xl  md:w-[60%] tracking-wider">Defendemos seus direitos com dedicação, ética e resultados que fazem a diferença.</h1>
      </main>

      <section id="about" className="flex  min-h-screen justify-center items-center gap-10 px-2 py-5 flex-col lg:grid lg:grid-cols-2 md:p-10 ">

        <div className="w-[80%] md:w-1/2 lg:w-full">
          <img src="../src/assets/group.jpg" alt="Imagem de uma equipe" className="m-auto z-2 lg:w-full rounded-lg shadow-[10px_10px_0px_0px_#99743F]" />
        </div>

        <div className="flex justify-center items-start flex-col">
          <div className="text-center lg:text-justify">
            <h2 className="uppercase text-lg font-bold md:text-xl">Sobre Nós</h2>
            <p className="text-sm py-4 md:text-lg md:py-3 lg:py-5">Na Silva & Costa Advocacia, somos movidos pela dedicação à justiça e à excelência. Com mais de 10 anos de experiência, nosso escritório oferece soluções legais personalizadas, sempre focando nos interesses de nossos clientes. Nossa equipe é composta por profissionais especializados que atuam com ética, transparência e compromisso. Acreditamos que cada caso é único e merece atenção total para alcançar os melhores resultados possíveis.</p>
          </div>

          <button className="text-base md:text-xl bg-mainYellow px-8 w-full py-2 rounded-lg text-mainWhite font-semibold hover:bg-mainBlue transition-all ease-in duration-200">
            Saiba mais!

          </button>
        </div>


      </section>

      <section id="how" className="min-h-screen bg-mainBlue p-2 md:p-10">
        <h2 className="font-semibold text-mainWhite text-lg text-center py-5 md:text-xl uppercase md:pb-12">Como Podemos Te Ajudar</h2>
        <div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">

          <Law title="Direito de Família" text="Atuamos em processos de divórcio, guarda de filhos, pensão alimentícia e partilha de bens, sempre com sensibilidade e discrição." img="/src/assets/familia.svg" />

          <Law title="Direito Penal" text="Garantimos defesa eficiente e imparcial em processos criminais, zelando pelos seus direitos fundamentais." img="/src/assets/criminal.svg" />

          <Law title="Direito Trabalhista" text="Defendemos seus direitos como trabalhador ou empregador, garantindo soluções justas para questões trabalhistas." img="/src/assets/trabalhista.svg" />

          <Law title="Direito Civil" text="Oferecemos suporte em contratos, indenizações, direitos do consumidor e outros assuntos relacionados." img="/src/assets/civil.svg" />

          <Law title="Direito Empresarial" text="Ajudamos empresas com questões legais, desde contratos e compliance até disputas judiciais." img="/src/assets/empresarial.svg" />

          <Law title="Direito Imobiliário" text="Assessoramos compra, venda, regularização e conflitos relacionados a imóveis." img="/src/assets/imobiliario.svg" />
        </div>


      </section>

      <section id="client" className="min-h-screen p-3 md:p-10">
        <h2 className="font-semibold text-lg text-center uppercase md:text-xl">O que os nossos clientes dizem sobre nós</h2>
        <TestimonialCarousel />
      </section>

      <section className="bg-[url('/src/assets/martelo.png')] bg-cover bg-no-repeat bg-center p-2 flex flex-col gap-5 md:flex-row md:flex md:p-10">
        <div className="flex flex-wrap justify-center items-center md:grid md:grid-cols-2 md:gap-5">
          <Statistic value="12+" text="Anos de experiência no mercado." />
          <Statistic value="140" text="Clientes de confiança." />
          <Statistic value="97%" text="De êxito em casos trabalhistas." />
          <Statistic value="65+" text="Casos resolvidos com sucesso." />
        </div>

        <div className="bg-mainYellow text-mainWhite p-3 w-[90%] m-auto rounded-lg md:w-[50%] lg:w-[40%] ">
          <div className="flex items-baseline justify-center gap-2">
            <img className="h-5" src="/src/assets/balanca-icone.svg" alt="ícone de balança" />
            <p className="text-base font-semibold md:text-lg">Silva & Costa Advocacia</p>
          </div>
          <div className="flex justify-start items-center gap-2 my-3">
            <div className="bg-mainWhite h-0.5 w-10"></div>
            <p className="text-sm md:text-base">Ajude-nos a defender seus direitos e alcançar os melhores resultados</p>
          </div>

          <div className="mx-auto text-center">
            <Button background="#1C232C" color="#fafafa" title="Resolva o seu caso agora!" />
          </div>

        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>

  )
}