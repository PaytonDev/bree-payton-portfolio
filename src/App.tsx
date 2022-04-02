import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <HashRouter basename="/">
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    className="layout"
                >
                    <Sidebar />
                    <Grid item md={10} component="main">
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="skills" element={<Skills />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </Grid>
                </Grid>
            </HashRouter>
        </div>
    );
}

export default App;
