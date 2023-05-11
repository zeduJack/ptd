import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { navItems, NavItem, linkColorOnTransparent, linkColorOnWhite } from './navitems';
import HeaderLink from './link';



type Props = {
    sidenavOpen: boolean;
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideNav = ({ sidenavOpen, setSidenavOpen }: Props) => {

    const useStyles = makeStyles(() => ({
        drawer: {
            width: 'auto'
        },
        link: {
            display: 'block',
            padding: '0.5rem 2rem',
            textDecoration: 'none',
            fontSize: '1rem'
        },
        closeButton: {
            margin: '1rem 2rem'
        }
    }));

    const classes = useStyles();

    return (
        <Drawer anchor="right" open={sidenavOpen} onClose={() => setSidenavOpen(!sidenavOpen)}>
            <div className={classes.drawer}>
                <CloseIcon onClick={() => setSidenavOpen(!sidenavOpen)} className={classes.closeButton}></CloseIcon>
                {navItems.map((item: NavItem, idx) => {

                    return (
                        <div key={idx} className={classes.link}>
                            <HeaderLink href={item.href} name={item.displayName} backgroundWhite={true}></HeaderLink>
                        </div>
                    )

                })}
            </div>
        </Drawer >
    )
}

export default SideNav