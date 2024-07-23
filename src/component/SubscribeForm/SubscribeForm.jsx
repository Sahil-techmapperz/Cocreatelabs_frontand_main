import React, { useState } from 'react';
import { TextField, Button, Grid, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
let Baseurl = import.meta.env.VITE_API_URL;

function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const inputStyle = {
        input: { color: 'white' },
        label: { color: 'white' },
        '& label.Mui-focused': { color: 'white' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
        },
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${Baseurl}/subscribe/create`, { email });
            if (response.status === 200) {
                setMessage({ text: 'Subscription successful!', type: 'success' });
                setEmail(''); // Reset email field after successful submission
            } else {
                setMessage({ text: 'Subscription failed. Please try again.', type: 'error' });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage({ text: 'An error occurred. Please try again later.', type: 'error' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleChange}
                        sx={inputStyle}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Subscribe
                    </Button>
                </Grid>
            </Grid>
            {message.text && (
                <Snackbar open autoHideDuration={6000} onClose={() => setMessage({ text: '', type: '' })}>
                    <Alert onClose={() => setMessage({ text: '', type: '' })} severity={message.type}>
                        {message.text}
                    </Alert>
                </Snackbar>
            )}
        </form>
    );
}

export default SubscribeForm;
