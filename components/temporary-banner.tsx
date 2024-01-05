import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    snackbar: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'fixed',
        minWidth: '300px',
        maxWidth: '600px',
        width: '80%',
    },
}));

const TemporaryBanner: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const eventDate = new Date('2024-01-06');
        const isEventDay = currentDate.toDateString() === eventDate.toDateString();

        if (currentDate <= eventDate) {
            setOpen(true);
            setMessage(
                isEventDay
                    ? 'Unser Restaurant bleibt heute wegen einer Privatparty geschlossen. Take-Away-Bestellungen sind weiterhin möglich. Vielen Dank für Ihr Verständnis!'
                    : 'Unser Restaurant bleibt am 06.01.2024 wegen einer Privatparty geschlossen. Take-Away-Bestellungen sind weiterhin möglich. Vielen Dank für Ihr Verständnis!'
            );
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            message={message}
            action={
                <Button color="secondary" size="small" onClick={handleClose}>
                    OK
                </Button>
            }
            className={classes.snackbar}
        />
    );
};

export default TemporaryBanner;
