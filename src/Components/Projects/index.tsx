import { Grid } from "@material-ui/core";
import SpotifyShopDemo1 from "../../Assets/SpotifyShopDemo1.gif"
import HearMeOutSearch from '../../Assets/HearMeOutSearch.gif'
import ProjectRow from "./ProjectRow";
import styles from "./styles";

const Projects = () => {
    const projects = [
        {
            heading: "Spotify Shop",
            demoGif: SpotifyShopDemo1,
            stack: "React Native, TypeScript, GraphQL, AWS Amplify",
            desc: "A React Native Spotify clone with a screen for eCommerce for a user's top 10 favorite artists.",
            projectUrl: "#",
            githubUrl: "https://github.com/PaytonDev/spotify-shop",
        },
        {
            heading: "Hear Me Out",
            demoGif: HearMeOutSearch,
            stack: "React, TypeScript, Express, Spotify Web API",
            desc: "'Hear Me Out' is a minimal, dark theme music player made with React, Typescript, Express.js, and Axios that lets you search and play sample songs using Spotify's Web API.",
            projectUrl: "https://hear-me-out-spotify-api.herokuapp.com/",
            githubUrl: "https://github.com/PaytonDev/spotify-shop",
        },
        // {
        //     heading: "My Website",
        //     demoGif: SpotifyShopDemo1,
        //     stack: "React, TypeScript",
        //     desc: "The Website you're on right now!",
        //     projectUrl: "https://breepayton.dev",
        //     githubUrl: "https://github.com/PaytonDev/Hear-Me-Out",
        // },
        // {
        //     heading: "PlaceHolder",
        //     demoGif: '',
        //     stack: "React, TypeScript",
        //     desc: "Here is Where We'll Put The Dashboard",
        //     projectUrl: "https://breepayton.dev",
        //     githubUrl: "https://github.com/PaytonDev/spotify-shop",
        // },
    ]

    const projectList = projects.map((project, idx) => (
        <ProjectRow
            heading={project.heading}
            demoGif={project.demoGif}
            stack={project.stack}
            desc={project.desc}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
            key={idx}
        />
    ))

    const classes = styles()

    return (
        <section className={classes.projectSection}>
            <header className={classes.projectHeader}  id="Projects">Projects</header>
            <Grid container justifyContent="center" spacing={3}>
                {projectList}
            </Grid>
        </section>
    )
}

export default Projects