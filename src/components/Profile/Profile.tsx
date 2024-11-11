import './Profile.scss';

export const Profile = () => {
    const openResume = () => {
        window.open('public/CVMereyZhalgassovFullStack.pdf', '_blank');
    };

    const navigateToContact = () => {
        window.location.href = './#contact';
    };

    const openLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/merey-zhalgassov-774535330/';
    };

    const openGitHub = () => {
        window.location.href = 'https://github.com/vossaglahz';
    };

    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="public/profile-pic.png" alt="John Doe profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Здравствуйте, меня зовут</p>
                <h1 className="title">Жалгасов Мерей</h1>
                <p className="section__text__p2">React/Go разработчик</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={openResume}>
                        Резюме
                    </button>
                    <button className="btn btn-color-1" onClick={navigateToContact}>
                        Контакты
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src="public/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={openLinkedIn}
                    />
                    <img
                        src="public/github.png"
                        alt="My Github profile"
                        className="icon"
                        onClick={openGitHub}
                    />
                </div>
            </div>
        </section>
    );
};
