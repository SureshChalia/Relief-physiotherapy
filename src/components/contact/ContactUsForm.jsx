import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Please enter your name';
        if (!formData.email) newErrors.email = 'Please enter your email address';
        if (!formData.phonenumber) newErrors.phonenumber = 'Please enter your phone number';
        if (formData.phonenumber && (formData.phonenumber.length < 10 || formData.phonenumber.length > 10)) {
            newErrors.phonenumber = 'Invalid phone number';
        }
        if (!formData.message) newErrors.message = 'Please enter your message';
        return newErrors;
    };

    const submitContactForm = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        let loadingToastId;
        setLoading(true);

        try {
            loadingToastId = toast.loading('Submitting...');
            const res = await sendMessage(formData);
            toast.success('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phonenumber: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting contact form:', error.message);
        } finally {
            setLoading(false);
            toast.dismiss(loadingToastId);
        }
    };

    return (
        <form onSubmit={submitContactForm} className="flex flex-col gap-7">
            <div className='flex flex-col gap-2'>
                <label htmlFor='name' className='text-left'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter your name'
                    className='border border-gray-200 px-2 py-2 rounded-md focus:outline-none'
                    value={formData.name}
                    onChange={handleInputChange}
                />
                {errors.name && <span className='-mt-1 text-[12px] text-red-500'>{errors.name}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='email' className='text-left'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter your email address'
                    className='border border-gray-200 px-2 py-2 rounded-md focus:outline-none'
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <span className="-mt-1 text-[12px] text-red-500">{errors.email}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='phonenumber' className=' text-left'>Phone Number</label>
                    <input
                        type="tel"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="+91 1234567890"
                        className="border border-gray-200 px-2 py-2 rounded-md focus:outline-none"
                        value={formData.phonenumber}
                        onChange={handleInputChange}
                    />
                {errors.phonenumber && <span className="-mt-1 text-[12px] text-red-500">{errors.phonenumber}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='message' className='text-left'>Message</label>
                <textarea
                    name='message'
                    id='message'
                    cols="30"
                    rows="7"
                    className='border border-gray-200 px-2 py-2 rounded-md focus:outline-none'
                    placeholder='Enter your message here'
                    value={formData.message}
                    onChange={handleInputChange}
                />
                {errors.message && <span className="-mt-1 text-[12px] text-red-500">{errors.message}</span>}
            </div>
            <button type='submit'
                className={`rounded-md bg-blue-900 px-6 py-3 text-center text-[13px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                    ${!loading && "transition-all duration-200 hover:scale-95 hover:shadow-none"}  disabled:bg-richblack-500 sm:text-[16px]`}
                disabled={loading}>
                {loading ? 'Submitting...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactUsForm;
