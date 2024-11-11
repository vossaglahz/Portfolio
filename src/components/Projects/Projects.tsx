import './Projects.scss';

export const Projects = () => {

    const navigateToContact = () => {
        window.location.href = './#contact';
    };

    const openGitHub = () => {
        window.location.href = 'https://github.com/vossaglahz';
    };

    return (
        <section id="projects">
            <p className="section__text__p1">Просмотрите мои недавние</p>
            <h1 className="title">Проекты</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src="public/project-1.png"
                        alt="Project 1"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Project One</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Github
                    </button>
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Live Demo
                    </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src="public/project-2.png"
                        alt="Project 2"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Project Two</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Github
                    </button>
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Live Demo
                    </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src="public/project-3.png"
                        alt="Project 3"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Project Three</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Github
                    </button>
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={openGitHub}
                    >
                        Live Demo
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <img
                src="public/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={navigateToContact}
            />
        </section>
    );
};
