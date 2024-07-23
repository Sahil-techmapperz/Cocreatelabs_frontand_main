import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MentorConnect from './Pages/MentorConnect';
import GrantsConnect from './Pages/GrantsConnect';
import Investorconnect from './Pages/Investorconnect';
import Build from './component/Build';
import Glob from './component/Glob';
import Mentor from './component/Mentor';
import AbouPage from './component/AbouPage';
import AboutHome from './component/AboutHome';
import BuildCon from './component/BuildCon';
import Process from './component/Process';
import Mission from './component/Mission';
import Credit from './component/Credit';
import Team from './component/Team';
import Investhero from './component/Investhero';
import Investorform from './component/Investorform';
import { About } from './Pages/About';
import Connect from './Pages/Connect';
import Investapply from './component/Investapply';
import Investpitch from './component/Investpitch';
import Testimonial from './component/Testimonial';
import Granthero from './component/Granthero';
import Steps from './component/Steps';
import Services from './Pages/Services';
import FeedbackForm from './component/FeedbackForm';
import Gettingstarted from './component/Gettingstarted';
import Join from './component/Join';
import Knowledge from './component/knowledge';
import Movinglogo from './component/Movinglogo';
import Newslatter from './component/Newslatter';
import Offering from './component/Offering';
import SignUp from './component/SignUp';
import Cards from './component/cards';
import Upcomingevents from './component/upcomingevents';
import Whyjoin from './component/Whyjoin';
import Changemaker from './component/Changemaker';
import Bluerectangle from './component/Bluerectangle';
import Youtubeplay from './component/Youtubeplay';
import FAQ from './component/Accordian';
import Myacoordion from './component/Myaccordian';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mentor_selection from './Pages/Mentor_Selection/Mentor_selection';
import Registration from './Pages/Registration/Registration';
import Registration_step_1_form from './Pages/Registration_step_1_form/Registration_step_1_form';
import Registration_step_2_form from './Pages/Registration_step_2_form/Registration_step_2_form';
import Registration_step_3_form from './Pages/Registration_step_3_form/Registration_step_3_form';
import AmbitiousStartups from './component/AmbitiousStartups';
import Knowledge_Center from './Pages/Knowledge_Center/Knowledge_Center';
import Carosal from './Pages/Carousel/Carousel';
import MobileRegistration from './Pages/MobileRegistration1/MobileRegistration';
import OtpVarification from './Pages/MobileRegistration1/OtpVarification';
import PassWordSetup from './Pages/MobileRegistration1/PassWordSetup';
import UserSidebar from './Pages/UserDashboard/UserSidebar';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import EventRegistrationForm from './Pages/Event_Registration/Event_registration';
import TestimonialVideos from './Pages/TestimonialVideos/TestimonialVideos';






const AllRoute = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/mentorConnect' element={<MentorConnect />} />
                <Route path='/grantsconnect' element={<GrantsConnect />} />
                <Route path='/investorconnect' element={<Investorconnect />} />
                <Route path='/build' element={<Build />} />
                <Route path='/glob' element={<Glob />} />
                <Route path='/mentor' element={<Mentor />} />
                <Route path='/aboutPage' element={<AbouPage />} />
                <Route path='/aboutHome' element={<AboutHome />} />
                <Route path='/buildCon' element={<BuildCon />} />
                <Route path='/Process' element={<Process />} />
                <Route path='/mission' element={<Mission />}></Route>
                <Route path='/credit' element={<Credit />} />
                <Route path='/team' element={<Team />} />
                <Route path='/investhero' element={<Investhero />} />
                <Route path='/invesorform' element={<Investorform />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Connect />} />
                <Route path='/investapply' element={<Investapply />} />
                <Route path='/investpitch' element={<Investpitch />} />
                <Route path='/testimonial' element={<Testimonial />} />
                <Route path='/granthero' element={<Granthero />} />
                <Route path='/steps' element={<Steps />} />
                <Route path='/services' element={<Services />} />
                <Route path='/feedback' element={<FeedbackForm />} />
                <Route path='/gettingstarted' element={<Gettingstarted />} />
                <Route path='/join' element={<Join />} />
                <Route path='/knowledge' element={<Knowledge />} />
                <Route path='/movinglogo' element={<Movinglogo />} />
                <Route path='/newslatter' element={<Newslatter />} />
                <Route path='/offering' element={<Offering />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/cards' element={<Cards />} />
                <Route path='/upcomingevents' element={<Upcomingevents />} />
                <Route path='/whyjoin' element={<Whyjoin />} />
                <Route path='/changemaker' element={<Changemaker/>} />
                <Route path='/bluerectangle' element={<Bluerectangle />} />
                <Route path='/youtubeplay' element={<Youtubeplay />} />
                <Route path='/accordian' element={<FAQ />} />
                <Route path='/myaccordian' element={<Myacoordion />} />
                <Route path='/navbar' element={<Navbar />} />
                <Route path='/footer' element={<Footer />} />

                <Route path='/mentorselection' element={<Mentor_selection />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/registration_step_1_form' element={<Registration_step_1_form />} />
                <Route path='/registration_step_2_form' element={<Registration_step_2_form />} />
                <Route path='/registration_step_3_form' element={<Registration_step_3_form />} />
                <Route path='/grwothservice' element={<AmbitiousStartups />} />
                <Route path='/knowledgecenter' element={<Knowledge_Center />} />
                <Route path='/carosal' element={<Carosal />} />
                <Route path='/mobileregistration1' element={<MobileRegistration />} />
                <Route path='/otpvarification' element={<OtpVarification/>} />
                <Route path='/passwordsetup' element={<PassWordSetup/>} />
                <Route path='/usersidebar' element={<UserSidebar/>} />
                <Route path='/userDash' element={<UserDashboard/>} />
                <Route path='/eventregistration' element={<EventRegistrationForm/>} />
                <Route path='/testimonialVideos' element={<TestimonialVideos />} />
                
               



            </Routes>

        </>
    )
}

export default AllRoute
