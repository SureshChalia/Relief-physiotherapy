import React from "react";
import ContactUsForm from "../contact/ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border shadow-xl text-blue-900 rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-slate-50  ">
      <h1 className="text-4xl leading-10 font-semibold">
      Let’s Connect for your Queries or Appoitment. Share your details below.
      </h1>
      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
