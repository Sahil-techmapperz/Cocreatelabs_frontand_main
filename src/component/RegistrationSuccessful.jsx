import React from 'react';
import { FaRegSmileWink } from 'react-icons/fa'; // Importing a smiling face icon

const RegistrationSuccessful = () => {
    return (
        <div style={styles.container}>
            <FaRegSmileWink style={styles.icon}/> {/* Smiling face icon */}
            <h1 style={styles.header}>Congratulations!</h1>
            <p style={styles.text}>You have successfully registered for the event.</p>
            <p style={styles.text}>We're excited to see you there!</p>
            {/* Optionally, add a button for further action if needed */}
        </div>
    );
};

// Updated styles with more celebratory feel
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0', // Light background
    },
    icon: {
        fontSize: '50px',
        color: '#4CAF50',
        marginBottom: '20px',
    },
    header: {
        color: '#4CAF50',
        marginBottom: '20px',
        fontSize: '24px', // More prominent font size
    },
    text: {
        color: '#333',
        marginBottom: '15px', // Adjusted margin
    }
};


export default RegistrationSuccessful;
