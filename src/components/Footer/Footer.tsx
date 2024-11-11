import './Footer.scss';

export const Footer = () => {
    return (
        <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#experience">Навыки</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
        </nav>
        <p>Сайт-визитка "Жалгасов Мерей React/Node.js/Golang разработчик"</p>
      </footer>
    )
}