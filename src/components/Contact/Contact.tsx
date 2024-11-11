import './Contact.scss';

export const Contact = () => {

    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                <img
                    src="public/email.png"
                    alt="Email icon"
                    className="icon contact-icon email-icon"
                />
                <p><a href="mailto:mereyzhalgassov@gmail.com">mereyzhalgassov@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                <img
                    src="public/linkedin.png"
                    alt="LinkedIn icon"
                    className="icon contact-icon"
                />
                <p><a href="https://www.linkedin.com/in/merey-zhalgassov-774535330/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
};
