import './Experience.scss';
import { experienceBackend, experienceFrontend } from './experienceData';

export const Experience = () => {

    const navigateToProjects = () => {
        window.location.href = './#projects';
    };

    return (
        <section id="experience">
            <p className="section__text__p1">Изучите мои</p>
            <h1 className="title">Навыки</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                <div className="details-container">
                    <h2 className="experience-sub-title">Frontend</h2>
                    <div className="article-container">
                    {experienceFrontend.map((e) => (
                        <article key={e.id}>
                            <img
                            src={e.image}
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>{e.name}</h3>
                            </div>
                        </article>
                    ))}
                    </div>
                </div>
                <div className="details-container">
                    <h2 className="experience-sub-title">Backend</h2>
                    <div className="article-container">
                    {experienceBackend.map((e) => (
                        <article key={e.id}>
                            <img
                            src={e.image}
                            alt="Experience icon"
                            className="icon"
                            />
                            <div>
                            <h3>{e.name}</h3>
                            </div>
                        </article>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            <img
                src="public/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={navigateToProjects}
            />
        </section>
    );
};
