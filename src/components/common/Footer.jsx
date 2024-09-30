import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl w-11/12 mx-auto py-2 px-2 sm:px-4 flex justify-between sm:flex-row flex-col sm:gap-9 gap-0">
        {/* Contact Information */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <ul>
            <li>Mori gate chowk, Circular Road,</li>
            <li>Near Idea Store</li>
            <li>Faridkot, Punjab 151203</li>
            <li>Email: contact@reliefphysio.in</li>
            <li>Phone: (+91) 95920 02882</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 pl-0 sm:pl-12">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
            <li><Link to={"/"} className="hover:text-gray-400">Home</Link></li>
            <li><Link to={"/about-us"} className="hover:text-gray-400">About</Link></li>
            <li><Link to={"/"} className="hover:text-gray-400">Blog</Link></li>
            <li><Link to={"/contact-us"} className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link to={"https://www.facebook.com/people/Relief-physiotherapy-rehabilitation-clinic/100064117357892/?mibextid=qi2Omg&rdid=GOpKoTmqDBQV99Vx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F7XokSjtu8nb31dah%2F%3Fmibextid%3Dqi2Omg"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600"><FaFacebook size={24} /></Link>
            {/* <Link className="text-white hover:text-blue-400"><FaTwitter size={24} /></Link> */}
            <Link to={"https://www.instagram.com/relief844physiotherpy/?igsh=ZWJ1eHpiZmlycnlj"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600"><FaInstagram size={24} /></Link>
            <Link to={"https://g.co/kgs/n2VB7xF"} className="text-white hover:text-red-500" target="_blank" rel="noopener noreferrer"><FaGoogle size={24} /></Link>
          </div>
          <div className='mt-4'>
          <Link
            to={"/contact-us"}
            className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-white mt-3 px-4 py-2 rounded-lg tracking-wide text-blue-900"
          >
            <span className="ml-2">Book your appoitment</span>
          </Link>
          </div>

        </div>
        <div className="w-full md:w-1/4 mb-6">
          <p>Restore your strength, ease your pain, and reclaim your mobility with personalized care at our physiotherapy clinic. We're dedicated to helping you move better and live healthier, pain-free.</p>
        </div>
      </div>
      <hr />
      <div className="text-center mt-8">
        <p className="text-white">Relief Physiotherapy & Rehabilitation Clinic, Faridkot</p>
      </div>
    </footer>
  );
};

export default Footer;
