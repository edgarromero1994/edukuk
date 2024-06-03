import React from 'react';
import "../styles/AdvancedJavascript.css";
import icon_whatsapp from "../assets/whatsapp.svg";

const AdvancedJavascript = () => {
  const openWhatsAppChat = () => {
    window.open('https://chat.whatsapp.com/I01MbyAT8JuDtOJjdmU8DL', '_blank');
  };

  const openPayPalPage = () => {
    window.open('https://www.paypal.com/paypalme/EdgarCucChocoj', '_blank');
  };

  return (
    <div className='container'>
      <div className="container-javascript-advanced">
        <h2 className='title-javascript-advanced'>Curso de JavaScript Avanzado</h2>
        <p>
          Con nuestro curso premium, no solo mejorarás tu lógica en JavaScript y crearás tu primera aplicación web, sino que también accederás a contenido exclusivo, ejercicios prácticos avanzados y soporte personalizado. Por tan solo $25.00, obtendrás una experiencia de aprendizaje completa y profundizarás tus conocimientos en el desarrollo web. ¡Inscríbete ahora y lleva tus habilidades al siguiente nivel!
        </p>
        <div className="container-social">
          <div className="icon-social">
            <img src={icon_whatsapp} alt="WhatsApp" onClick={openWhatsAppChat} style={{cursor: 'pointer'}} />
            <button onClick={openWhatsAppChat} className="whatsapp-button">Grupo de WhatsApp</button>
          </div>
        </div>

        <div className="information-social">
          <p>Para comprar el curso avanzado, simplemente haz clic en el botón "Registrarme".</p>
    
          <p>Regístrate en el grupo de WhatsApp para recibir actualizaciones e información sobre los cursos.</p>
      
        </div>

        <div className="information-other">
          <p>Aceptamos exclusivamente PayPal como método de pago.</p>
          <img className='paypal' src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" onClick={openPayPalPage} style={{cursor: 'pointer'}} />
        </div>

        <p>Disfruta de clases en vivo para interactuar con el instructor y tus compañeros en tiempo real.</p>
      </div>
    </div>
  );
};

export default AdvancedJavascript;