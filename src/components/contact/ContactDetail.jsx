import React from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { MdAddCall } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';

const ContactDetail = () => {

    return (
        <div className="flex flex-col gap-6 rounded-xl bg-slate-50  p-4 lg:p-6 text-blue-800 shadow-xl">
            <div className="flex flex-col gap-[2px] p-3 text-sm">
                <div className="flex flex-row items-center gap-3">
                    <IoMdChatbubbles size={25} />
                    <h1 className="text-lg font-semibold">Chat with us</h1>
                </div>
                <p className="font-medium text-left">Our friendly team is here to help.</p>

                <p className="font-semibold text-left">example@gmail.com</p>

            </div>
            <div className="flex flex-col gap-[2px] p-3 text-sm">
                <div className="flex flex-row items-center gap-3">
                    <HiBuildingOffice2 size={25} />
                    <h1 className="text-lg font-semibold">Visit us</h1>
                </div>
                <p className="font-medium text-left">Come and say hello at our clinic.</p>
                <p className="font-semibold text-left">
                    Mori gate chowk, Circular Road,
                    Near Idea Store
                    Faridkot, Punjab 151203</p>
            </div>
            <div className="flex flex-col gap-[2px] p-3 text-sm">
                <div className="flex flex-row items-center gap-3">
                    <MdAddCall size={25} />
                    <h1 className="text-lg font-semibold">Call us</h1>
                </div>
                <p className="font-medium text-left">Mon - Sat from 10am to 6pm</p>
                <p className="font-semibold text-left">(+91) 95920 02882</p>
            </div>
            <div className="flex flex-col gap-[2px] p-3 text-sm">
                <div className="flex flex-row items-center gap-3">
                    <FaWhatsapp size={25} />
                    <h1 className="text-lg font-semibold">WhatsApp us</h1>
                </div>
                <p className="font-medium text-left">Mon - Sat from 9am to 6pm</p>
                <p className="font-semibold text-left">(+91) 95920 02882</p>
            </div>
        </div>
    );
};

export default ContactDetail;
