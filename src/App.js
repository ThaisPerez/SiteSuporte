import Navbar from './components/Navbar'
import Card from './components/Cards'
import Camera from './assets/camera-de-seguranca.gif'
import Montagem from './assets/montagem.gif'
import Formatação from './assets/windows.gif'
import Servidor from './assets/servidor.gif'
import Limpeza from './assets/limpeza.gif'
import Roteador from './assets/roteador.gif'
import Impressora from './assets/impressora.gif'
import Celular from './assets/celular.gif'
import Tecnologia from './assets/tecnologia.gif'
import Footer from './components/Footer'
import Suporte from './assets/suporte.gif'
import CardSuporte from './components/CardsSuporte'
import Anydesk from './assets/anydesk.svg'
import Team from './assets/team.svg'

function App() {
  return (
    <div className='Container-Global'>
      <Navbar />
      <div name="inicio" className='Content'>
        <img src={Suporte} alt="" />
        <div className='ContentInfo'>
          <span>Empresa de suporte de TI</span>
          <p>Imagine o custo que é manter um departamento completo, e que siga padrões profissionais na área de TI? Se você tem esse tipo de preocupação, chegou a hora de consultar a HELP.</p>
        </div>
      </div>
      <div name="servicos" className='Container'>
        <h1>Solução para qualquer problema em informática</h1>
        <div className='Container-Cards'>
          <Card whats="https://wa.me/5569993144347?text=Gostaria%20de%20fazer%20or%C3%A7amento%20do%20servi%C3%A7o%20de%20forma%C3%A7%C3%A3o." titulo="Câmera de segurança" subtitulo="Instalação e manuntenção" img={Camera} click="https://wa.me/5569993144347?text=Gostaria%20de%20fazer%20or%C3%A7amento%20do%20servi%C3%A7o%20de%20forma%C3%A7%C3%A3o." />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20montagem%20do%20meu%20computador.%20"titulo="Montagem" subtitulo="Montar seu computador." img={Montagem} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20formata%C3%A7%C3%A3o%20do%20meu%20computador.%20" titulo="Formatação" subtitulo=" Formatação para o windows 11." img={Formatação} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20montagem%20ou%20manuten%C3%A7%C3%A3o%20do%20meu%20servidor.%20"titulo="Servidor" subtitulo=" Montagem e manutenção." img={Servidor} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20uma%20limpeza%20externa%20ou%20interna%20do%20meu%20computador.%20" titulo="Limpeza" subtitulo=" Limpeza externa e interna." img={Limpeza} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20uma%20limpeza%20externa%20ou%20interna%20do%20meu%20computador.%20" titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade. " img={Roteador} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20instala%C3%A7%C3%A3o%20de%20drive%20ou%20compartilhamento%20na%20impressora.%20" titulo="Impressora" subtitulo="Instalação de drive, compartilhamento, etc. " img={Impressora} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20geral%20em%20celular.%20" titulo="Celular" subtitulo="Manutenção geral em celular" img={Celular} />
          <Card whats="https://api.whatsapp.com/send?phone=5555699931443&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20outros%20servi%C3%A7os." titulo="Outros serviços" subtitulo=" Serviços com compartilhamento de informações, etc. " img={Tecnologia}  />
        </div>
      </div>
      <div name="suporte" className='Container-suporte'>
        <div className='Content-suporte'>
          <div className='Content-titulo'>
            <span>Tipos de Suporte Rápido</span>
            <p>Para resolver problemas simples temos serviços remotos</p></div>
          <div className='Container-card-suporte'>
            <CardSuporte img={Anydesk} titulo="SUPORTE WINDOWS ANYDESK" link="https://www.figma.com/exit?url=https%3A%2F%2Fwww.bind.com.br%2FAnyDesk.exe" subtitulo="Software de acesso remoto para Windows " />
            <CardSuporte img={Team} titulo="SUPORTE WINDOWS TEAM VIEWER" link="https://www.figma.com/exit?url=https%3A%2F%2Fwww.bind.com.br%2FAnyDesk.exe" subtitulo=" Software de acesso remoto para Windows" />
            <CardSuporte img={Anydesk} titulo="SUPORTE MAC ANYDESK" link="https://www.figma.com/exit?url=https%3A%2F%2Fwww.bind.com.br%2FAnyDesk.exe" subtitulo="Software de acesso remoto para Mac" />
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default App;

