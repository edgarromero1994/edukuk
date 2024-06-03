import React from 'react';
import "../styles/AdvancedJavascript.css";
import icon_whatsapp from "../assets/whatsapp.svg";

const CourseReactj = () => {
  const openWhatsAppChat = () => {
    window.open('https://chat.whatsapp.com/IKSA81kGJzY28rGimAACxD', '_blank');
  };

  const openPayPalPage = () => {
    window.open('https://www.paypal.com/paypalme/EdgarCucChocoj', '_blank');
  };

  return (
    <div className='container'>
      <div className="container-javascript-advanced">
        <h2 className='title-javascript-advanced'>Curso de React.js</h2>
        <p>
          Con nuestro curso premium de React.js, aprenderás a construir interfaces de usuario dinámicas y altamente interactivas. Accede a contenido exclusivo, ejercicios prácticos avanzados y soporte personalizado por tan solo $30.00. ¡Inscríbete ahora y lleva tus habilidades de desarrollo web al siguiente nivel!
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

export default CourseReactj;