import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { About } from "./About/About";
import { Experience } from "./Experience/Experience";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

export const Main = () => {
    return (
        <>
            <Header />
            <Profile />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
};