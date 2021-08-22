import { useState } from "react"
import SidebarLinks from "./SidebarLinks"
import {Grid,  AppBar, Toolbar, IconButton, Drawer, ListItem, ListItemText, Divider } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import styles from "./styles"

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setOpen(!open)
    }

    const scrollToView = (name: string) => {
        document.querySelector(`${name}`)?.scrollIntoView({
            behavior: 'smooth'
        })
        setOpen(false)
    }

    const classes = styles()

    return (
        <section id="Sidebar">
            <Grid container item justifyContent='center'>
                <AppBar position='static' color='transparent'>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" >
                            <MenuIcon onClick={toggleSidebar}/>
                        </IconButton>
                            Bree Payton
                    </Toolbar>
                </AppBar>
            </Grid>
            <Drawer open={open} onClose={() => setOpen(false)} classes={{paper: classes.paper}}>
                <ListItem>
                    <ListItemText primary="💻 Bree Payton" classes={{ primary: classes.sidebarHeader }}/>
                </ListItem>
                <Divider/>
                <SidebarLinks scrollFunction={scrollToView}/>
            </Drawer>
        </section>
    )
}

export default Sidebar