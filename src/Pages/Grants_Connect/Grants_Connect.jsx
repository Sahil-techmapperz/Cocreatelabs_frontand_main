import React from 'react'

const Grants_Connect = () => {
    return (
        <div>
            <div className='flex w-full px-[4rem]'>
                <div className='w-[40%]'>
                    <h1>Fuel Your Startup: Apply for Our Startup Grants!</h1>
                    <p>Looking to give your startup the boost it needs?
                        Our grants can provide the fuel your business needs to succeed. Our application process is straightforward and our team is ready to help you every step of the way. Don't miss out on this opportunity to take your startup to the next level!"</p>
                    <button>Learn More</button>
                </div>
                <div className='w-[40%] flex flex-col'>
                    <h1>Register Now</h1>
                    <form className='flex flex-col'>
                        <input placeholder='Your email'/>
                        <input type='password' placeholder='Your password'/>
                        <input type='checkbox'/>
                        <span>I agree to the Terms of Service.</span>
                        <button>Sing In</button>
                    </form>
                    <hr/>
                    <button>Login via Twitter</button>
                    <p>Do you have an Account? <span>Sing up</span></p>
                </div>
            </div>
        </div>
    )
}

export default Grants_Connect