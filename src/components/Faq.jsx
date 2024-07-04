/* eslint-disable react/prop-types */
import { useState } from 'react';

const faqData = [
  {
    question: 'What Are Your Office Hours?',
    answer: 'Our Office Hours Vary By Location, But Typically We Are Open Monday Through Friday From 8:00 AM To 5:00 PM. Some Locations May Offer Extended Hours Or Weekend Appointments. Please Contact Your Nearest Clinic For Specific Hours.',
  },
  {
    question: 'How Can I Schedule An Appointment?',
    answer: 'You can schedule an appointment by calling our office or using our online booking system.',
  },
  {
    question: 'Do You Accept Insurance?',
    answer: 'Yes, we accept a variety of insurance plans. Please contact our office for more details.',
  },
  {
    question: 'What Should I Bring To My Appointment?',
    answer: 'Please bring your ID, insurance card, and any relevant medical records or referral forms.',
  },
  {
    question: 'Do You Offer Telemedicine Appointments?',
    answer: 'Yes, we offer telemedicine appointments. Please contact our office to schedule one.',
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
      onClick={onClick}
    >
      <span className="text-lg font-medium">{question}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="px-6 pb-4 text-gray-600">{answer}</div>}
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-8 p-4 text-[#020043]">
        <button className="px-4 py-2 rounded-xl border border-[#343268]"> Faq </button>
      <h2 className="text-2xl font-bold my-6">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Faq;