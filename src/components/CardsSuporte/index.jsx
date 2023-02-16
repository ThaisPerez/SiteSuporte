import './styles.css'

export default function CardSuporte(props){
return(
   <div  className='CardSuporte'>
   <img className='imgSuporte' src={props.img} alt=""></img>
   <span>{props.titulo}</span>
   <a href={props.link}>{props.subtitulo}</a>

  </div>
)
}
