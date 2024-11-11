import { projectsList } from './projectsData';
import './Projects.scss';

export const Projects = () => {

    const navigateToContact = () => {
        window.location.href = './#contact';
    };

    const openGitHub = (github: string) => {
        window.location.href = github;
    };

    const openDeploy = (deploy: string) => {
        window.location.href = deploy;
    };

    return (
        <section id="projects">
            <p className="section__text__p1">Просмотрите мои недавние</p>
            <h1 className="title">Проекты</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {projectsList.map((p) => (
                        <div key={p.id} className="details-container color-container">
                        <div className="article-container">
                        <img
                            src={p.image}
                            alt="Project"
                            className="project-img"
                        />
                        </div>
                        <h2 className="experience-sub-title project-title">{p.name}</h2>
                        <h3 className="experience-sub-title project-description">{p.description}</h3>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => openGitHub(p.github)}
                        >
                            Github
                        </button>
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => openDeploy(p.deploy)}
                        >
                            Deploy
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <img
                src="/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={navigateToContact}
            />
        </section>
    );
};
