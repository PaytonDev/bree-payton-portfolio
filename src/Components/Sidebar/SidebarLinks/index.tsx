import {List, ListItem, ListItemText} from '@material-ui/core'

import styles from "./styles"

type SidebarLinksProps = {
    scrollFunction: (name: string) => void
}

const SidebarLinks = (props: SidebarLinksProps) => {
    const classes = styles()

    const navLinks = [
        {
            title: 'Home',
            link: '#Home'
        },
        {
            title: 'Projects',
            link: '#Projects'
        },
        {
            title: 'Skills',
            link: '#Skills'
        },
        {
            title: 'Contact',
            link: '#Contact'
        }
    ]


    return (
        <List className={classes.list}>
            {navLinks.map((link, idx) => {
                return (
                <ListItem component='a' href={link.link} key={idx} className={classes.link} onClick={() => props.scrollFunction(link.link)}>
                    <ListItemText primary={link.title} classes={{primary: classes.linkText}} color='inherit'/>
                </ListItem>
            )})}
        </List>
    )
}

export default SidebarLinks