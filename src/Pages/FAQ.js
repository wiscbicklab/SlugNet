import "../css/FAQ.css";
import React, { useState } from "react";

function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqQuestions = [
        "How do you create a Google account with an existing email?",
        "How do you create a Google account without an existing email?"
    ];
    const imageSrc = {
        "Choose_Google_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Choose_Google_Account_Instructions.PNG",
        "Field_History": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Field_History.PNG",
        "Field_History_Cookies": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Field_History_Cookies.PNG",
        "Google_Create_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Account.PNG",
        "Google_Create_Birthday_Gender": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Birthday_Gender_Instructions.PNG",
        "Google_Create_Email_Blank": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Email_Blank_Instructions.PNG",
        "Google_Create_Email_Filled": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Email_Filled.PNG",
        "Google_Create_Name": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Name_Instructions.PNG",
        "Google_Create_Password": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Password_Instructions.PNG",
        "Google_Create_Recovery": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Recovery_Instructions.PNG",
        "Google_Existing_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Existing_Email_Instructions.PNG",
        "Google_Privacy": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Instructions.PNG",
        "Google_Privacy_Agree": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Agree.PNG",
        "Google_Privacy_Dont_Save": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Dont_Save_Instructions.PNG",
        "Google_Privacy_More_Options": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_More_Options_Instructions.PNG",
        "Google_Register_Finish": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Register_Finished_Instructions.PNG",
        "Google_Register_Home": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Register_Home_Instructions.PNG",
        "Google_Review_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Review_Account_Instructionss.PNG",
        "Google_Sign_In": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Sign_In.PNG",
        "Google_Suggest_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Suggest_Email.PNG",
        "Google_Verify_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Verify_Email_Instructions.PNG",
        "Go_Wisc_Edu": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Go_Wisc.Edu.PNG",
        "Register_Cookies": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Cookies_Instructions.PNG",
        "Register_Error": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Error.PNG",
        "Reigster_Finished": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Finished.PNG",
        "Register_Sign_In": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Sign_In_Instructions.PNG",
        "SlugNet_Home": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/SlugNet_Home_.PNG"
    };


    return (
        <div className="FAQ">
            <h2 className="PageTitle">Frequently Asked Questions</h2>
            <button className="faq-button" onClick={() => toggleFAQ('faq0')}>
                {faqQuestions[0]}
            </button>
            {openFAQ === 'faq0' && 
                <div id="faq0" className='faq-content'>
                    <img alt="SlugNet home page has Instructions with a link to the registration in the second instruction. You need to click this link" 
                        src={imageSrc["SlugNet_Home"]} />
                    <img alt="SlugNet registration page asks if for permition to use cookies for the google form. You must accept Neccessary cookies." 
                        src={imageSrc["Register_Cookies"]} />
                    <img alt="SlugNet registration page asks for you to sign into a Google account. Click the Sign In Link, to navigate to the Sign In Page" 
                        src={imageSrc["Register_Sign_In"]} />
                    <img alt="You have been redirected to sign into Google on their website. Click the 'Use another account' button" 
                        src={imageSrc["Choose_Google_Account"]} />
                    <img alt="You are now on the Google sign in page. Below the email box to the left there is a 'Create account' embeded link, click the text, then click 'For my personal use" 
                        src={imageSrc["Google_Create_Account"]} />
                    <img alt="Google Will now ask you for a name. It can be anything you want including a fake name and will be used to identify the account." 
                        src={imageSrc["Google_Create_Name"]} />
                    <img alt="Google will now ask you for your age and gender. If you don't want to provide this information you may use January 1st, 1900 for the birthday and 'Rather not say' for gender" 
                        src={imageSrc["Google_Create_Birthday_Gender"]} />
                    <img alt="Google will now show a page to create an email @gmail.com. Click the text, 'Use your existing email' below this on the left" 
                        src={imageSrc["Google_Create_Email_Blank"]} />
                    <img alt="Google will now ask you to enter your Email Address. Enter the address you would like to use and click the 'Next' button below"
                        src={imageSrc["Google_Existing_Email"]} />
                    <img alt="Google will send a verification code to the Email Address you are linking. Enter the verification code and click the 'Next button below"
                        src={imageSrc["Google_Verify_Email"]} />
                    <img alt="Google will ask you to create a password and type it again to verify. Create a secure password and make sure to record or remember it"
                        src={imageSrc["Google_Create_Password"]} />
                    <img alt="Google will now ask if you would like to add a recovery email. You may click the skip button or add a recovery email by typing in another email and clicking the next button."
                        src={imageSrc["Google_Create_Recovery"]} />
                    <img alt="Google will now show show you a review of your account information. You should at least see your name and email. Click the next button below this information"
                        src={imageSrc["Google_Review_Account"]} />
                    <img alt="You are now on the google privacy agreement page, scroll to the bottom"
                        src={imageSrc["Google_Privacy"]} />
                    <img alt="Near the bottom of the google privacy page there will be a drop-down with the text 'More options', click this text to open the drop-down"
                        src={imageSrc["Google_Privacy_More_Options"]} />
                    <img alt="This drop-down will allow you to control what data Google collects about you. Check the non-default option for each of these to minimize the information Google will collect"
                        src={imageSrc["Google_Privacy_Dont_Save"]} />
                    <img alt="Now you can click the 'I Agree' button at the bottom of the page"
                        src={imageSrc["Google_Privacy_Agree"]} />
                    <img alt="You will now be directed to the first page of the registration form, Select the box to record your email and begin filling out the survey"
                        src={imageSrc["Google_Register_Home"]} />
                    <img alt="Once you finish the survey, you will see a page informing you that you've already responded and thanking you for your response. There will also be a redirect link to go back to the website"
                        src={imageSrc["Google_Register_Finish"]} />
                </div>
            }
            <div className="Question2">

            </div>
        </div>
    );
}

export default FAQ;