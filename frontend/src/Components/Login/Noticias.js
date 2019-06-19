import React from "react";
import '../../css/noticias-login.css'




function Noticias() {

    return (

        <div className="noticia-login">
            <h5> Noticias:</h5>
            <hr />
            <div className="noticia-soporte">
                <label>Horarios de atención:</label>
                <span>Lunes a viernes de 7 AM a 6 PM</span>
            </div>
            <div className="noticia-soporte">
                <label>Correo para soporte:</label>
                <span>soporte-invenatios@hotmail.com</span>
            </div>
            <div className="noticia-soporte">
                <label>Telefono de contacto</label>
                <span>311-343-11-22</span>
            </div>

        </div>

    )
}
export default Noticias;