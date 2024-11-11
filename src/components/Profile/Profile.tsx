import './Profile.scss';

export const Profile = () => {
    const openResume = () => {
        window.open('/CVMereyZhalgassovFullStack.pdf', '_blank');
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

    const openTelegram = () => {
        window.location.href = 'https://t.me/mereyzhalgassov';
    };

    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="/profile-pics.jpg" alt="Merey Zhalgassov profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Здравствуйте, меня зовут</p>
                <h1 className="title">Жалгасов Мерей</h1>
                <p className="section__text__p2">React/Node.js/Golang Fullstack разработчик</p>
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
                        src="/linkedin.png"
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={openLinkedIn}
                    />
                    <img
                        src="/github.png"
                        alt="My Github profile"
                        className="icon"
                        onClick={openGitHub}
                    />
                    <img
                        src="/telegram.png"
                        alt="My Telegram profile"
                        className="icon"
                        onClick={openTelegram}
                    />
                </div>
            </div>
        </section>
    );
};
