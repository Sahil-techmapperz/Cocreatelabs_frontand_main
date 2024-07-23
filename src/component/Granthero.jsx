import React, { useEffect, useState } from "react";
import "./granthero.css";

const Granthero = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSignIn = () => {
        if (isChecked) {
            // Perform sign-in logic here, e.g., sending data to a backend API
            console.log("Signing in...");
        } else {
            console.log("Please agree to the terms and conditions.");
        }
    };
    return (
        <>
            <div className="granthero-parent-container ml-[2rem] mr-[2rem] font-sans ">
                <div className=" granthero-content  flex gap-[5%]">
                    <div className=" left-grant">
                        <h1 className="mt-[30px]">Fuel Your Startup: Apply for Our <br /> <high>Startup Grants!</high></h1>
                        <p>Looking to give your startup the boost it needs?</p>
                        <p>
                            Our grants can provide the fuel your business needs to succeed.
                            Our application process is straightforward and our team is ready
                            to help you every step of the way. Don't miss out on this
                            opportunity to take your startup to the next level!"
                        </p>
                        <button className="lrn-more">Learn More</button>
                    </div>

                    <div className=" right-grant">
                        <div className="form-box">
                            <h1 className="mt-[40px]">Register Now</h1>
                            <form className="register-form">
                                <div>
                                    {/* <label>Email:</label> */}
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder="Your Email"
                                        onChange={handleEmailChange}
                                        style={{ color: 'black', borderColor: 'black' }}
                                    />
                                </div>
                                <div>
                                    {/* <label>Password:</label> */}
                                    <input
                                        type="password"
                                        value={password}
                                        placeholder="Your Password"
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="terms">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                                <button type="button" onClick={handleSignIn}>
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Granthero;
