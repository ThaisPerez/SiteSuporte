import Navbar from './components/Navbar'
import Card from './components/Cards'
import Camera from './assets/camera-de-seguranca.svg'
import Manuntencao from './assets/manutencao.svg'
import Formatação from './assets/windows.png'
import Hardware from './assets/hardware.png'
import Limpeza from './assets/limpeza.svg'
import Ram from './assets/ram.png'
import Footer from './components/Footer'
import Suporte from './assets/suporte.svg'
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
          <Card titulo="Câmera de segurança" subtitulo="Instalação e manuntenção" img={Camera} />
          <Card titulo="Montagem" subtitulo="Montar seu computador" img={Manuntencao} />
          <Card titulo="Formatação" subtitulo=" Formatação para o windows 11" img={Formatação} />
          <Card titulo="Peças" subtitulo=" Peças para computador ou notebook" img={Hardware} />
          <Card titulo="Limpeza" subtitulo=" Limpeza externa e interna" img={Limpeza} />
          <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram} />
          <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram} />
          <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram} />
          <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram} />

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
      <Footer />

    </div>
  );
}

export default App;


