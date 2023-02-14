import Navbar from './components/Navbar'
import Card from './components/Cards'
import Camera from './assets/camera-de-seguranca.png'
import Manuntencao from './assets/manutencao.png'
import Programador from './assets/programador.png'
import Formatação from './assets/windows.png'
import Conserto from './assets/Conserto.png'
import Cabo from './assets/cabo.png'
import Hardware from './assets/hardware.png'
import Limpeza from './assets/limpeza.png'
import Ram from './assets/ram.png'
import Footer from './components/Footer'
import Suporte from   './assets/suporte.svg'

function App() {
  return (
    <div className='Container-Global'>
     <Navbar/>
     <div className='Content'>
      <img src={Suporte} alt="" />
      <div className='ContentInfo'>
      <span>Empresa de suporte de TI</span>
      <p>Imagine o custo que é manter um departamento completo, e que siga padrões profissionais na área de TI? Se você tem esse tipo de preocupação, chegou a hora de consultar a HELP.</p>
      </div>
     </div>     
     <div className='Container'>
      <h1>Solução para qualquer problema em informática </h1>
      <div className='Container-Cards'>
        <Card titulo="Câmera de segurança" subtitulo="Instalação e manuntenção" img={Camera}/> 
        <Card titulo="Montagem" subtitulo="Montar seu computador" img={Manuntencao}/>
        <Card titulo="Formatação" subtitulo=" Formatação para o windows 11" img={Formatação}/>
        <Card titulo="Conserto" subtitulo=" Conserto do seu equipamento" img={Conserto}/>
        <Card titulo="Cabeamento" subtitulo=" Passagem de fios" img={Cabo}/>
        <Card titulo="Peças" subtitulo=" Peças para computador ou notebook" img={Hardware}/>
        <Card titulo="Limpeza" subtitulo=" Limpeza externa e interna" img={Limpeza}/>
        <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram}/>
        <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram}/>
        <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram}/>
        <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram}/>
        <Card titulo="Trocar de peças" subtitulo=" Substituição de peças ou upgrade " img={Ram}/>

      </div>
     </div>
     <Footer/>

     </div>
  );
}

export default App;


