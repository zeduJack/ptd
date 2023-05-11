import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

import HeaderLink from './link';
import { navItems, NavItem, linkColorOnTransparent, linkColorOnWhite } from './navitems';

import { InferProps } from 'prop-types';


function HideOnScroll({ children }: InferProps<typeof HideOnScroll.propTypes>) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px'
    },
    appBar: {
        backgroundColor: 'white'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none'
    },
    nav: {
        display: "flex",
        justifyContent: 'space-between'
    },
    spacer: {
        flexGrow: 1,
    },
    icon: {
        height: '1.25rem',
        paddingRight: '0.25rem'
    },
    menuItem: {
        marginLeft: '2rem'
    }
}));

type Props = {
    sidenavOpen: boolean;
    setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ sidenavOpen, setSidenavOpen }: Props) => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={[classes.appBar, (scrollPosition === 0 ? classes.appBarTransparent : '')].join(' ')} >
                    <Container maxWidth="md">
                        <Toolbar className={classes.root}>
                            <Typography variant="h6">
                                <HeaderLink isNavLink={false} href="/" name="Padthai Dietikon" backgroundWhite={scrollPosition !== 0}></HeaderLink>
                            </Typography>
                            <div className={classes.spacer}>&nbsp;</div>
                            {!isMobile &&
                                <div className={classes.nav}>
                                    <span style={{display: 'none'}}>desktop display none bla</span>
                                    {navItems.map((item: NavItem, idx) => {
                                        return (
                                            <div key={idx} className={classes.menuItem}><HeaderLink  href={item.href} name={item.displayName} backgroundWhite={scrollPosition !== 0}></HeaderLink></div>
                                        )

                                    })}
                                </div>
                            }
                            {isMobile &&
                                <React.Fragment>
                                    <span style={{display: 'none'}}>mobile display none bla</span>
                                    <IconButton onClick={() => setSidenavOpen(!sidenavOpen)} style={{ color: (scrollPosition === 0 ? linkColorOnTransparent : linkColorOnWhite) }} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                </React.Fragment>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}

export default Header;
