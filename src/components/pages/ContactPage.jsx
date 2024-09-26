import React,{useEffect} from 'react'
import ContactDetail from '../contact/ContactDetail'
import ContactForm from '../contact/ContactForm';


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className='bg-slate-50 '>
            <div className="mx-auto pb-20 flex w-11/12 max-w-7xl flex-col justify-between gap-10 lg:flex-row pt-5 font-Quicksand">
                <div className="lg:w-[40%]">
                    <ContactDetail />
                </div>

                <div className="lg:w-[60%]">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactPage