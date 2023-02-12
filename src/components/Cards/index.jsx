import './styles.css'

export default function  Card (props){
    return (
        <div className="Card">
        <span>{props.titulo}</span>
        <img src={props.img} alt="" />
        <p>{props.subtitulo}</p>
        </div>
    )
}
