import React, { useState } from 'react';
import { TextField, Button, Grid, useMediaQuery, useTheme, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

let Baseurl = import.meta.env.VITE_API_URL;
function ContactForm() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [message, setMessage] = useState({ text: '', type: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        companyName: '',
        interestedIn: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit =async (event) => {
        event.preventDefault();

    try {
        const response = await axios({
          method: 'post', // Assuming you've changed the backend to accept PATCH
          url: `${Baseurl}/contact/create`,
          data: formData,
        });
  
        if (response.status === 200) {
            setMessage({ text: 'Form submitted successfully!', type: 'success' });
        } else {
            setMessage({ text: 'Form submission failed. Please try again.', type: 'error' });
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage({ text: 'An error occurred. Please try again later.', type: 'error' });
      }
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

    return (
        <>
        <div style={{ padding: isSmallScreen ? '10px' : '20px', color: 'white' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={isSmallScreen ? 1 : 2}>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="name"
                            label="Your Name" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.name}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="email"
                            label="Your Email" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.email}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="phoneNumber"
                            label="Phone Number" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="country"
                            label="Country" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.country}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="companyName"
                            label="Company Name" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.companyName}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            name="interestedIn"
                            label="Interested In" 
                            variant="outlined" 
                            fullWidth 
                            value={formData.interestedIn}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="message"
                            label="Message" 
                            variant="outlined" 
                            fullWidth 
                            multiline 
                            rows={2} 
                            value={formData.message}
                            onChange={handleChange}
                            sx={inputStyle}
                            InputLabelProps={{ style: { color: 'white' } }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>       
        </div>

        {message.text && (
                <Snackbar open autoHideDuration={6000} onClose={() => setMessage({ text: '', type: '' })}>
                    <Alert onClose={() => setMessage({ text: '', type: '' })} severity={message.type}>
                        {message.text}
                    </Alert>
                </Snackbar>
            )}

        </>
    );
}

export default ContactForm;
