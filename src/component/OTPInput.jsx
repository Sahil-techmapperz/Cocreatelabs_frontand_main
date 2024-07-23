import axios from 'axios';
import React, { useState, useRef } from 'react';
import RegistrationSuccessful from './RegistrationSuccessful';

function OTPInput({ data }) {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [emailsuccess, setEmailsuccess] = useState("Check your email for the OTP that has been sent to you");
    const inputsRef = useRef([]);
    let apiUrl=import.meta.env.VITE_API_URL;
    const handleOtpChange = (element, index) => {
        const value = element.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError(""); // Clear error on new input

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };


    const CreateNewuser = async (data) => {
        try {
            const response = await axios.post(`${apiUrl}user/signup`, data);

            // Check the status code here
            if (response.status === 201) {
                setSuccess(response.data.message);
                // Reload the page after a short delay
                setTimeout(() => {
                    window.location.href = "/"; // Redirect to the home page
                }, 3200);
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            }
            return false;
        }
    };


    const handleOtpSubmit = async () => {
        setLoading(true);
        const otpString = otp.join("");

        // Check if the OTP is 6 digits
        if (otpString.length !== 6 || otp.includes("")) {
            setError("Please enter a 6-digit OTP.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}user/verify-otp`, {
                otp: otpString,
                email: data.email
            });

            let res = response.data;
            console.log("Response:", res);

            if (res.message == "Email verified successfully") {
                CreateNewuser(data);
            }

            // Handle successful verification here
        } catch (error) {
            setError(error.response.data.message); // Set error message
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
       {!success && <div className="flex flex-col items-center justify-center space-y-4 h-[60vh]">
            <div className=' shadow-lg flex flex-col gap-3 p-4'>
                <h2 className="text-2xl font-bold">Enter Your OTP</h2>
                <div className="flex space-x-2">
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            className={`w-10 h-12 text-center text-xl border ${error ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500`}
                            maxLength="1"
                            value={otp[index]}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            ref={el => inputsRef.current[index] = el}
                            disabled={loading}
                        />
                    ))}
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    onClick={handleOtpSubmit}
                    disabled={loading}
                >
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {emailsuccess && <p className="text-[#4CAF50]">{emailsuccess}</p>}
                
            </div>
        </div>}
        {success && <RegistrationSuccessful/>}
        </>

    );
}

export default OTPInput;
