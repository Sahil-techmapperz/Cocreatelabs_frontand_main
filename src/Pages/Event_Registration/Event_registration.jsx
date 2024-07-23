import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OTPInput from '../../component/OTPInput';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';

const EventRegistrationForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const initialFormData = {
    "name": '',
    "companyname": '',
    "designation": '',
    "email": '',
    "mobile": '',
    "website": '',
    "linkedin": '',
    "address": '',
    "aboutcompany": '',
    "remarks": ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    // Check if name and email exist in location.state and update formData accordingly
    if (location.state?.name || location.state?.email) {
      setFormData({
        ...initialFormData,
        name: location.state.name || '',
        email: location.state.email || ''
      });
    }
  }, [location.state]);

  const handleChange = (value, name) => {
    // Check if the function is being called with two arguments, indicating it's from PhoneInput
    if (name) {
      setFormData({ ...formData, [name]: value });
    } else {
      // Standard input field
      setFormData({ ...formData, [value.target.name]: value.target.value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();



    let apiUrl = import.meta.env.VITE_API_URL;



    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }


    setloading(true);




    try {
      const response = await axios.post(`${apiUrl}user/generate-otp`, formData);
      console.log('Response:', response.data);
      setShowOtpInput(true);
      // Handle success
    } catch (error) {
      console.error('Error submitting form:', error);
      setloading(false);
      // Handle error
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {!showOtpInput && (
        <div className="w-full max-w-lg p-4 bg-white shadow-md rounded my-4">
          <h2 className="text-2xl font-bold mb-4 text-center ">Event Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.keys(formData).map((key) => {
                if (key === "aboutcompany" || key === "remarks") {
                  return (
                    <div className="col-span-2" key={key}>
                      <TextField
                        label={key === "aboutcompany" ? "About Company" : "Remarks"}
                        multiline
                        rows={3}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                  );
                } else if (key === "mobile") {
                  return (
                    <div className="w-full px-3 mb-6 md:mb-0" key={key}>
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Mobile Number</label>
                      <div className="relative">
                        <PhoneInput
                          international
                          placeholder="Enter your mobile number"
                          defaultCountry="IN"
                          value={formData[key]}
                          onChange={(value) => handleChange({ target: { name: 'mobile', value } })}
                          className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                  );
                } else {
                  return (
                    <div className="w-full px-3 mb-6 md:mb-0" key={key}>
                      <TextField
                        label={key === "companyname" ? "Company Name" : (key === "linkedin" ? "LinkedIn ID" : key)}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={1}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded w-full mt-4`}
            >
              Next
            </button>
          </form>
        </div>
      )}

      {showOtpInput && <OTPInput data={formData} />}
    </div>




  );
};



export default EventRegistrationForm;
