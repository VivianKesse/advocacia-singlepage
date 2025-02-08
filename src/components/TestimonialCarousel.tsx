import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";


interface Testimonial {
  name: string;
  title: string;
  text: string;
  img: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Profissionais extremamente qualificados!",
    text: "Fui muito bem atendido pelo Martins & Oliveira. Desde o primeiro contato, demonstraram profissionalismo e conhecimento. Resolveram meu caso trabalhista com rapidez e eficiência. Recomendo a todos!",
    name: "André S., Cliente",
    img: "/assets/andre.png",
    color: "#1C232C",
  },
  {
    title: "Atendimento transparente e humanizado",
    text: "Estava passando por um momento difícil com um processo de divórcio, e a equipe do escritório me guiou com muito profissionalismo e empatia. Me senti segura e bem assistida durante todo o processo.",
    name: "Carla M., Cliente",
    img: "/assets/carla.png",
    color: "#99743F",
  },
  {
    title: "Excelente suporte para empresas",
    text: "Precisei de assessoria jurídica para minha empresa e fiquei impressionado com a clareza e objetividade do atendimento. Resolveram questões contratuais e tributárias de forma eficiente. Ótima parceria!",
    name: "Renato T., Empresário",
    img: "/assets/renato.png",
    color: "#000000",
  },
  {
    title: "Rapidez e eficiência na solução do meu problema",
    text: "Tive um problema sério com uma herança e não sabia como resolver. Os advogados foram claros e objetivos, e conseguiram agilizar todo o processo sem complicações. Muito obrigado!",
    name: "Fernanda L., Cliente",
    img: "/assets/fernandaM.png",
    color: "#C0B596",
  },
  {
    title: "Profissionais de confiança",
    text: "Honestos, éticos e extremamente competentes. Contratei para revisar um contrato importante e evitar problemas no futuro. Serviço impecável!",
    name: "Marcos D., Cliente",
    img: "/assets/ana.png",
    color: "#1C232C",
  },
  {
    title: "Meu direito foi garantido",
    text: "Após ser demitida injustamente, procurei o escritório e consegui meus direitos sem precisar me preocupar com burocracias. Eles cuidaram de tudo!",
    name: "Juliana F., Cliente",
    img: "/assets/juliana.png",
    color: "#99743F",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Imagem do comentarista */}
          <div className="relative mx-auto text-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <div
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{ backgroundColor: testimonials[activeIndex].color }}
              ></div>
              <div className="relative rounded-b-full overflow-hidden">
                <img
                  src={testimonials[activeIndex].img}
                  alt="Imagem do comentarista"
                  className="w-48 mx-auto lg:w-56"
                />
              </div>
            </div>
          </div>

          {/* Carrossel de depoimentos */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1} // GARANTINDO QUE APENAS UM DEPOIMENTO APAREÇA
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="my-2 text-base font-semibold text-gray-900 lg:text-lg">
                      {testimonial.name} -{" "}
                      <span className="text-gray-600">{testimonial.title}</span>
                    </h3>
                    <p className="text-sm text-gray-700 italic md:text-base lg:text-lg">
                      "{testimonial.text}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
