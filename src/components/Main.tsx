import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { About } from "./About/About";
import { Experience } from "./Experience/Experience";
import { Footer } from "./Footer/Footer";

export const Main = () => {
    return (
        <div>
            <Header />
            <Profile />
            <About />
            <Experience />
            <Footer />
        </div>
    )
};