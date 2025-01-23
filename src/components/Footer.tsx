export default function Footer() {
  return (
    <div className="bg-mainBlue text-mainWhite p-2 md:p-4">
      <div className="flex flex-col items-center justify-center gap-3 text-center py-2 md:grid md:grid-cols-2 md:p-5 lg:grid-cols-4">
        <div className="flex-col md:flex items-center justify-center gap-2 hidden">
          <img className="w-1/3 rounded-md md:w-1/2 lg:w-1/2" src="/src/assets/logo-completa.png" alt="Logotipo" />
          <p className="hidden lg:block text-base lg:text-lg">Defendemos seus interesses com dedicação e ética, trazendo soluções claras e eficientes para seus desafios jurídicos.</p>
        </div>

        <ul className="text-base lg:text-lg">
          <h3 className="font-semibold text-lg mb-3 lg:text-xl">Fale Conosco</h3>
          <li>Endereço: Rua das Flores, 123, Centro, Ilhéus - BA</li>
          <li>Horário de Atendimento: Segunda a Sexta, das 8h às 18h.</li>
          <li>Telefone: (73) 99999-9999</li>
          <li>E-mail: contato@silvacosta.com.br</li>
        </ul>

        <ul className="text-base lg:text-lg">
          <h3 className="font-semibold text-lg mb-3 lg:text-xl">Links Rápidos</h3>
          <li>Home</li>
          <li>Sobre Nós</li>
          <li>Áreas de Atuação</li>
          <li>Clientes</li>
          <li>Fale Conosco</li>
        </ul>

        <ul className="text-base lg:text-lg">
          <h3 className="font-semibold text-lg mb-3 lg:text-xl">Links Úteis</h3>
          <li>Termos de Uso</li>
          <li>Política de Privacidade</li>
        </ul>
      </div>
      <hr />
      <p className="text-xs font-semibold py-2 md:text-sm">Política de Privacidade | © 2025 Vivian Kesse. Todos os direitos reservados.</p>
    </div>

  )
}