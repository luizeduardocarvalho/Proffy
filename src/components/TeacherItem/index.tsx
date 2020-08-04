import React from 'react';

import whatsappImg from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/42449914?s=460&v=4" alt="Luiz Carvarlho" />
        <div>
          <strong>Luiz Carvalho</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappImg} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;