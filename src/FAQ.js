//import "./FAQ.css"
import React, { useState } from "react";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqQuestions = [
        "How do you create a Google account with an existing email?",
        "How do you create a Google account without an existing email?"
    ];


    return (
        <div className="FAQ">
            <h2 className="PageTitle">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqQuestions.map((faq, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <button 
                            className="w-full text-left font-semibold text-lg" 
                            onClick={() => toggleDropdown(index)}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <div className="mt-2">
                                <img 
                                    src={`https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/`} 
                                    alt="" 
                                    className="border rounded-lg"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;