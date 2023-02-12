import './styles.css'
import {InstagramLogo, WhatsappLogo } from "phosphor-react"

export default function Footer()
{
    return(
    <div className="Footer">
    <InstagramLogo size={52} />
    <WhatsappLogo size={52} />
    </div>
    )
}