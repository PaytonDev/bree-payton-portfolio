import { Grid } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import styles from './styles'
import { 
    HTMLIcon,
    CSSIcon,
    ExpressJSIcon,
    JSIcon,
    ReactIcon,
    BootstrapIcon,
    AdobeXDIcon,
    PythonIcon,
    FlaskIcon,
    MaterialUIIcon,
} from './SkillsIcons'

const Skills = () => {
    // this entire component can be refactored
    const classes = styles()
    const tablet = useMediaQuery('(max-width: 768px)')

    return (
        <section id="Skills" className={classes.skillsContainer}>
            <header className={classes.skillsHeader}>
                Skills
            </header>
            <Grid container justifyContent='center' className={classes.listGrid} spacing={2}>
                    <Grid container item className={classes.listGrid} justifyContent='center' xs={3}>
                        <Grid item xs={12} >
                            <header className={tablet ? classes.tabletHeader : classes.listHeader}>
                                Languages
                            </header>
                        </Grid>
                        <Grid item>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <JSIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Javascript
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <HTMLIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    HTML
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <CSSIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    CSS3
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <PythonIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Python
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item className={classes.listGrid} justifyContent='center' xs={3}>
                        <Grid item xs={12} >
                            <header className={tablet ? classes.tabletHeader : classes.listHeader}>
                                Frameworks
                            </header>
                        </Grid>
                        <Grid item>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <ReactIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    React
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <ExpressJSIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Express
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <FlaskIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Flask
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                <Grid container item justifyContent="center" xs={3} >
                        <Grid item xs={12}>
                            <header className={tablet ? classes.tabletHeader : classes.listHeader}>
                                Libraries & Design
                            </header>
                        </Grid>
                        <Grid item>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <MaterialUIIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    MaterialUI
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <BootstrapIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Bootstrap
                                </Grid>
                            </Grid>
                            <Grid container item alignItems="center">
                                <Grid item >
                                    <AdobeXDIcon />
                                </Grid>
                                <Grid item className={tablet ? classes.tabletText : undefined}>
                                    Adobe XD
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </section>
    )
}

export default Skills