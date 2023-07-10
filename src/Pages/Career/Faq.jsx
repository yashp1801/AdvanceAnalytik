import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Career.scss";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab((prevTab) => (prevTab === index ? null : index));
  };

  const faqData = [
    {
      id: 1,
      question:
        "What kind of career opportunities are available at Advance Analytik?",
      answer:
        "At Advance Analytik, we offer a wide range of career opportunities in various areas, including research and development, engineering, sales and marketing, customer support, and technical services. Whether you are a recent graduate or an experienced professional, we have positions that cater to different skill sets and interests.",
    },
    {
      id: 2,
      question: "How can I apply for a career opportunity at Advance Analytik?",
      answer:
        "To apply for a career opportunity at Advance Analytik, please visit our Careers page on our website. Browse through the available positions and select the one that aligns with your qualifications and career goals. Follow the application instructions provided in the job posting and submit your application online.",
    },
    {
      id: 3,
      question:
        "What qualifications and skills are required to join the Advance Analytik team?",
      answer:
        "The specific qualifications and skills required for each position may vary. However, in general, we look for candidates with relevant educational backgrounds, such as degrees in chemistry, biology, engineering, or related fields. Strong analytical and problem-solving skills, excellent communication abilities, and a passion for scientific analysis are also highly valued.",
    },
    {
      id: 4,
      question: " What is the work culture like at Advance Analytik?",
      answer:
        "At Advance Analytik, we foster a collaborative and inclusive work culture. We believe in open communication, teamwork, and a supportive environment that encourages innovation and personal growth. We promote work-life balance and provide opportunities for professional development and advancement.",
    },
    {
      id: 5,
      question:
        "How does Advance Analytik support employee development and growth?",
      answer:
        "We are committed to the professional development and growth of our employees. We provide ongoing training programs, mentorship opportunities, and access to the latest industry trends and technologies. We encourage our team members to take on new challenges, expand their skill sets, and pursue their career goals within the company.",
    },
    {
      id: 6,
      question: "What is the recruitment process at Advance Analytik? ",
      answer:
        "Our recruitment process typically involves multiple stages, including initial resume screening, interviews (in-person or virtual), technical assessments, and reference checks. The specific process may vary depending on the position and department. We strive to ensure a fair and thorough evaluation of candidates to find the best fit for both the role and the organization",
    },
    {
      id: 7,
      question: "Does Advance Analytik offer internships or co-op programs?",
      answer:
        "Yes, Advance Analytik offers internships and co-op programs to provide valuable learning experiences for students and recent graduates. These programs allow participants to gain practical skills, work on real projects, and explore potential career paths within our organization.  ",
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently asked questions</h1>
      <p>Everything you need to know about Careers at Advance Analytik</p>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq__item ${activeTab === index ? "active" : ""}`}
          onClick={() => toggleTab(index)}
        >
          <div className="faq__question__icons__wrapper">
            <div className="faq__question">{faq.question}</div>
            <div>
              {activeTab === index ? (
                <FiMinusCircle className="faq__question__icons__wrapper__icon" />
              ) : (
                <FiPlusCircle className="faq__question__icons__wrapper__icon" />
              )}
            </div>
          </div>
          <AnimatePresence>
            {activeTab === index && (
              <motion.div
                className="faq__answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Faq;
