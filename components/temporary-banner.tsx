import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    snackbarContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1400, // Ensure it's above most other elements
    },
    snackbar: {
        [theme.breakpoints.up('sm')]: {
            minWidth: '300px',
            maxWidth: '600px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
}));

const TemporaryBanner: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        const endDate = new Date('2024-01-06');

        if (currentDate < endDate) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.snackbarContainer} style={{ display: open ? 'flex' : 'none' }}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                onClose={handleClose}
                message="Unser Restaurant bleibt an diesem Tag wegen einer Privatparty geschlossen. Take-Away-Bestellungen sind weiterhin möglich. Vielen Dank für Ihr Verständnis!"
                action={
                    <Button color="secondary" size="small" onClick={handleClose}>
                        OK
                    </Button>
                }
                ContentProps={{
                    classes: {
                        root: classes.snackbar,
                    },
                }}
            />
        </div>
    );
};

export default TemporaryBanner;
