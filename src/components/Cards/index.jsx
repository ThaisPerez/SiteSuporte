import './styles.css'
import Whatsapp1 from './../../assets/whatsapp1.png'

export default function Card(props) {
    return (
        <a href={props.whats} className="Card"><img src={props.img} alt="" />
            <span>{props.titulo}</span>
            <p className="Container-card-subtitilo">{props.subtitulo}</p>
            <a href={props.click} className="click"><img src={Whatsapp1} alt="" /> Whatsapp</a>
        </a>
    )
}
