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
                    Работал над проектом «Наше Право» - фриланс биржа для юристов. 
                    Активно участвовал в разработке системы 
                    аутентификации на основе JWT, создавая ее как на стороне backend, 
                    так и на frontend. С нуля разработал админ-панель на frontend, 
                    а также реализовал интерфейс для отображения и сортировки списка сделок. 
                    В процессе работы активно участвовал в обсуждениях, вносил предложения 
                    и идеи, что помогло проекту развиваться комплексно и эффективно. 
                    Быстро адаптируюсь к новым технологиям (google-master).
                    Стремлюсь к четкому и ясному выражению своих мыслей, 
                    идей и предложений. Всегда нацелен на продуктивное сотрудничество 
                    с другими отделами, выстраивая взаимовыгодные связи. Проявляю инициативу, 
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
