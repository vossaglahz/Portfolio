import './Experience.scss';

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
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>HTML</h3>
                        <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>CSS</h3>
                        <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>SASS</h3>
                        <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>JavaScript</h3>
                        <p>Basic</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>TypeScript</h3>
                        <p>Basic</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>Material UI</h3>
                        <p>Intermediate</p>
                        </div>
                    </article>
                    </div>
                </div>
                <div className="details-container">
                    <h2 className="experience-sub-title">Backend</h2>
                    <div className="article-container">
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>PostgreSQL</h3>
                        <p>Basic</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>Node JS</h3>
                        <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>Express JS</h3>
                        <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="public/checkmark.png"
                        alt="Experience icon"
                        className="icon"
                        />
                        <div>
                        <h3>Git</h3>
                        <p>Intermediate</p>
                        </div>
                    </article>
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
