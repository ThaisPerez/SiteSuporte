import "./styles.css";
import Footerimg from "./../../assets/footerImg.svg";
import {Headphones, Phone, At} from 'phosphor-react'


export default function Footer() {
  return (
    <div className="Footer">
         <img src={Footerimg} alt=""/>
      <div className="FooterInfo">
        <span>Entre em contato</span>
        <hr />
        <div className="Contact">
          <Headphones size={40}/>
          <div className="Description">
            <span>Carlos Andresson</span>
            <span>(69) 99314-4347</span>
          </div>
        </div>
        <div className="Contact">
          <Phone size={40}/>
          <div className="Description">
            <span>Junior Boeri</span>
            <span>(69) 99276-7866</span>
          </div>
        </div>
        <div className="Contact">
          <At size={40}/>
          <div className="Description">
            <span>contato@dataredes.com.br</span>
          </div>
        </div>
      </div>
    </div>
  );
}
