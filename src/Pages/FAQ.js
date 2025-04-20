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
        "Choose_Google_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Choose_Google_Account_Instructions.png",
        "Field_History": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Field_History.PNG",
        "Field_History_Cookies": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Field_History_Cookies.PNG",
        "Google_Create_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Account_Instructions.png",
        "Google_Create_Birthday_Gender": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Birthday_Gender_Instructions.png",
        "Google_Create_Email_Blank": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Email_Blank_Intstructions.png",
        "Google_Create_Email_Filled": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Email_Filled.PNG",
        "Google_Create_Name": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Name_Instructions.png",
        "Google_Create_Password": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Password_Instructions.PNG",
        "Google_Create_Recovery": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Recovery_Instructions.PNG",
        "Google_Existing_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Existing_Email_Instructions.png",
        "Google_Privacy": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Instructions.PNG",
        "Google_Privacy_Agree": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Agree_Instructions.PNG",
        "Google_Privacy_Dont_Save": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_Dont_Save_Instructions.PNG",
        "Google_Privacy_More_Options": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Privacy_More_Options_Instructions.PNG",
        "Google_Register_Finish": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Register_Finished_Instructions.PNG",
        "Google_Register_Home": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Register_Home_Instructions.PNG",
        "Google_Review_Account": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Create_Account_Instrutions.png",
        "Google_Sign_In": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Sign_In.PNG",
        "Google_Suggest_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Suggest_Email.PNG",
        "Google_Verify_Email": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Google_Verify_Email_Instructions.PNG",
        "Go_Wisc_Edu": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Go_Wisc.Edu.PNG",
        "Register_Cookies": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Cookies_Instructions.png",
        "Register_Error": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Error.PNG",
        "Reigster_Finished": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Finished.PNG",
        "Register_Sign_In": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Register_Sign_In_Instructions.png",
        "SlugNet_Home": "https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/SlugNet_Home_Click_Register.png"
    };
    const imageAlt = {
        "Choose_Google_Account": "Google will now ask you to select an account. Click on the 'Use another account' button to continue.",
        "Field_History": "",
        "Field_History_Cookies":"",
        "Google_Create_Account":"",
        "Google_Create_Birthday_Gender": "Google will now ask for your birthday and gender. If you do not want to enter this information, You may enter the birthday 'January 01 1900' and select 'Rather not say' from the gender dropdown. Once you have filled out this information click the next button.",
        "Google_Create_Email_Blank":"",
        "Google_Create_Email_Filled":"",
        "Google_Create_Name": "Google will now prompt you for your name. This is used so you can identify your account and does not need to be your name.",
        "Google_Create_Password": "Google will now prompt you to create a password. Create and record or remember a password. Reenter this password in the confirm box below the password box and click next.",
        "Google_Create_Recovery": "Google will now prompt you to add a recovery email. This can be used to recover the account if you forget your password. You may click skip and skip this step.",
        "Google_Existing_Email":"",
        "Google_Privacy":"",
        "Google_Privacy_Agree":"",
        "Google_Privacy_Dont_Save":"",
        "Google_Privacy_More_Options":"",
        "Google_Register_Finish":"",
        "Google_Register_Home":"",
        "Google_Review_Account":"",
        "Google_Sign_In": "Google will now prompt you to Sign In. Instead click on the 'Create account' text next to the 'Next button. This will open a drop-down menu. Please select 'For my personal use from the menu.",
        "Google_Suggest_Email":"",
        "Google_Verify_Email": "",
        "Go_Wisc_Edu":"",
        "Register_Cookies": "Once you navigate to the Google Form you may be prompted to 'Allow cookies'. Please do so if prompted.",
        "Register_Error":"",
        "Reigster_Finished":"",
        "Register_Sign_In": "You will now be prompted to Sign in to continue. Please click the 'SIGN IN' button to navigate to Google's sign in page.",
        "SlugNet_Home": "On the SlugNet HomePage there is a set of Instructions for the website. The second Insturction contains a link to the registration page. Please click this link to procede"
    };


    return (
        <div className="FAQ">
            <h2 className="PageTitle">Frequently Asked Questions</h2>
            <button className="faq-button" onClick={() => toggleFAQ('faq0')}>
                {faqQuestions[0]}
            </button>
            {openFAQ === 'faq0' && 
                <div id="faq0" className='faq-content'>
                    <img alt={imageAlt["SlugNet_Home"]} src={imageSrc["SlugNet_Home"]} />
                    <img alt={imageAlt["Register_Cookies"]} src={imageSrc["Register_Cookies"]} />
                    <img alt={imageAlt["Register_Sign_In"]} src={imageSrc["Register_Sign_In"]} />
                    <img alt={imageAlt["choose_Google_Account"]} src={imageSrc["Choose_Google_Account"]} />
                    <img alt={imageAlt["Google_Create_Account"]}  src={imageSrc["Google_Create_Account"]} />
                    <img alt={imageAlt["Google_Create_Name"]} src={imageSrc["Google_Create_Name"]} />
                    <img alt={imageAlt["Google_Create_Birthday_Gender"]} src={imageSrc["Google_Create_Birthday_Gender"]} />
                    <img alt={imageAlt["Google_Create_Email_Blank"]} src={imageSrc["Google_Create_Email_Blank"]} />
                    <img alt={imageAlt["Google_Existing_Email"]} src={imageSrc["Google_Existing_Email"]} />
                    <img alt={imageAlt["Google_Verify_Email"]} src={imageSrc["Google_Verify_Email"]} />
                    <img alt={imageAlt["Google_Create_Password"]} src={imageSrc["Google_Create_Password"]} />
                    <img alt={imageAlt["Google_Create_Recovery"]} src={imageSrc["Google_Create_Recovery"]} />
                    <img alt={imageAlt["Google_Review_Account"]} src={imageSrc["Google_Review_Account"]} />
                    <img alt={imageAlt["Google_Privacy"]} src={imageSrc["Google_Privacy"]} />
                    <img alt={imageAlt["Google_Privacy_More_Options"]} src={imageSrc["Google_Privacy_More_Options"]} />
                    <img alt={imageAlt["Google_Privacy_Dont_Save"]} src={imageSrc["Google_Privacy_Dont_Save"]} />
                    <img alt={imageAlt["Google_Privacy_Agree"]} src={imageSrc["Google_Privacy_Agree"]} />
                    <img alt={imageAlt["Google_Register_Home"]} src={imageSrc["Google_Register_Home"]} />
                    <img alt={imageAlt["Google_Register_Finish"]} src={imageSrc["Google_Register_Finish"]} />
                </div>
            }
            <button className="faq-button" onClick={() => toggleFAQ('faq1')}>
                {faqQuestions[1]}
            </button>
            {openFAQ === 'faq1' && 
                <div id="faq1" className='faq-content'>
                    <img alt={imageAlt["SlugNet_Home"]} src={imageSrc["SlugNet_Home"]} />
                    <img alt={imageAlt["Register_Cookies"]} src={imageSrc["Register_Cookies"]} />
                    <img alt={imageAlt["Register_Sign_In"]} src={imageSrc["Register_Sign_In"]} />
                    <img alt={imageAlt["choose_Google_Account"]} src={imageSrc["Choose_Google_Account"]} />
                    <img alt={imageAlt["Google_Create_Account"]}  src={imageSrc["Google_Create_Account"]} />
                    <img alt={imageAlt["Google_Create_Name"]} src={imageSrc["Google_Create_Name"]} />
                    <img alt={imageAlt["Google_Create_Birthday_Gender"]} src={imageSrc["Google_Create_Birthday_Gender"]} />
                    <img alt={imageAlt["Google_Existing_Email_Filled"]} src={imageSrc["Google_Existing_Email_Filled"]} />
                    <img alt={imageAlt["Google_Create_Password"]} src={imageSrc["Google_Create_Password"]} />
                    <img alt={imageAlt["Google_Create_Recovery"]} src={imageSrc["Google_Create_Recovery"]} />
                    <img alt={imageAlt["Google_Review_Account"]} src={imageSrc["Google_Review_Account"]} />
                    <img alt={imageAlt["Google_Privacy"]} src={imageSrc["Google_Privacy"]} />
                    <img alt={imageAlt["Google_Privacy_More_Options"]} src={imageSrc["Google_Privacy_More_Options"]} />
                    <img alt={imageAlt["Google_Privacy_Dont_Save"]} src={imageSrc["Google_Privacy_Dont_Save"]} />
                    <img alt={imageAlt["Google_Privacy_Agree"]} src={imageSrc["Google_Privacy_Agree"]} />
                    <img alt={imageAlt["Google_Register_Home"]} src={imageSrc["Google_Register_Home"]} />
                    <img alt={imageAlt["Google_Register_Finish"]} src={imageSrc["Google_Register_Finish"]} />

                </div>
            }
        </div>
    );
}

export default FAQ;