import './About.scss';

export const About = () => {

    const navigateToExperience = () => {
        window.location.href = './#experience';
    };

    return (
        <section id="about">
            <p className="section__text__p1">Узнайте больше</p>
            <h1 className="title">Обо мне</h1>
            <div className="section-container">
                <div className="section__pic-container">
                <img
                    src="/about-pic.jpg"
                    alt="Profile picture"
                    className="about-pic"
                />
                </div>
                <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                    <img
                        src="/experience.png"
                        alt="Experience icon"
                        className="icon"
                    />
                    <h3>Школа программирования</h3>
                    <p>Attractor 15 месяцев<br />React/Node.js Fullstack разработчик</p>
                    </div>
                    <div className="details-container">
                    <img
                        src="/education.png"
                        alt="Education icon"
                        className="icon"
                    />
                    <h3>Университет</h3>
                    <p>Карагандинский Государственный Технический Университет<br />Архитектура</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                    Работал над проектом «Adal zań» - фриланс биржа для юристов.
                    Fullstack разработчик с опытом разработки Frontend на React и Redux.
                    Разрабатывал Backend на Node.js с использованием Express.js, создавая RESTful API.
                    Использовал GitLab для контроля версий и совместной разработки.
                    Реализовывал аутентификацию и авторизацию на основе JWT.
                    Создавал чаты в реальном времени с использованием Socket.io.
                    Интегрировал функционал искусственногоинтеллекта через сторонние API. 
                    Разрабатывал административные панели для управления контентом и пользователями. 
                    Писал тесты для обеспечения качества кода с использованием Jest.
                    Документировал API с помощью Swagger для удобного взаимодействия разработчиков.
                    В процессе работы активно участвовал в обсуждениях, вносил предложения 
                    и идеи, что помогло проекту развиваться комплексно и эффективно. 
                    Быстро адаптируюсь к новым технологиям (google-master).
                    Стремлюсь к четкому и ясному выражению своих мыслей, 
                    идей и предложений. Проявляю инициативу, 
                    активно принимая участие в рабочих и нерабочих обсуждениях.
                    </p>
                </div>
                </div>
            </div>
            <img
                src="/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={navigateToExperience}
            />
        </section>
    );
};
