import './Profile.scss';

export const Profile = () => {
    const openResume = () => {
        window.open('./assets/CVMereyZhalgassovFullStack.pdf', '_blank');
    };

    const navigateToContact = () => {
        window.location.href = './#contact';
    };

    const openLinkedIn = () => {
        window.location.href = 'https://linkedin.com/';
    };

    const openGitHub = () => {
        window.location.href = 'https://github.com/';
    };

    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Merey Zhalgassov</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={openResume}>
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={navigateToContact}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src="./assets/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={openLinkedIn}
                    />
                    <img
                        src="./assets/github.png"
                        alt="My Github profile"
                        className="icon"
                        onClick={openGitHub}
                    />
                </div>
            </div>
        </section>
    );
};
