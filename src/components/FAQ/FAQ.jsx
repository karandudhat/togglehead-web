import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does an investor gain access to MF Utility?",
      answer: "An investor can gain access to MF Utility by submitting the necessary registration forms along with required documents to the MF Utility point of service."
    },
    {
      question: "Will investors be able to have multiple Common Account Numbers?",
      answer: "No, an investor is generally allocated a single Common Account Number (CAN) based on their PAN/PEKRN, which serves as a unique reference."
    },
    {
      question: "How does an investor get a CAN?",
      answer: "An investor gets a CAN by submitting the CAN Registration Form (CRF) along with necessary KYC documents at any of the MFU Points of Service (POS)."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <div className="faq-header" onClick={() => toggleFaq(index)}>
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#0F2341"/>
                        <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke="#333" strokeWidth="2"/>
                        <path d="M12 6V18M6 12H18" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="faq-answer-container" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
