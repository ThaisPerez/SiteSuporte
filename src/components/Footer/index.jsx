import './styles.css'
import Instagram from './../../assets/instagram.png'
import Whatsapp from './../../assets/whatsapp.png'

export default function Footer()
{
    return(
        
    <div className="Footer">
          <h1>Nossas Redes Socias </h1>
        <img src={Instagram} alt="" />
        <img src={Whatsapp} alt="" />
    </div>
    )
}