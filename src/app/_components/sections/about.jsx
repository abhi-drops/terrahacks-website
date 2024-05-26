import ContentRight from "../content/contentRight.jsx";
import HeaderRight from "../headers/headerRight.jsx";

export default function About() {
    return (
        <div className="hidden lg:block">
            <HeaderRight title="About TerraHacks" top="27%" />
            <ContentRight text="Formed from the passion of making tech opportunities open to all, TerraHacks was 
            created to provide an inclusive platform for everyone interested in technology to further their skills.
            <br /> <br />
            Over the 36-hour period, you'll collaborate with fellow participants, tackle intriguing challenges, and 
            bring your ideas to life . Prepare to immerse yourself in a challenging, creative, and exciting weekend!
            <br /> <br />
            And lastly, no experience is required! This event is for anyone and everyone; regardless 
            of your background or skill level, come join us! See you all in August 😉" top="28.1%" />
        </div>
    );
}