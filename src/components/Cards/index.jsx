import './styles.css'

export default function  Card (props){
    return (
        <a href={props.whats} className="Card">
        <img src={props.img} alt="" />
        <span>{props.titulo}</span>
        <p className="Container-card-subtitilo">{props.subtitulo}</p>
        </a>
    )
}
