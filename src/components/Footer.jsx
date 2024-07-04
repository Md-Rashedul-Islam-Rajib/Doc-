import logo from '../assets/Media/logo light.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#020043] text-white py-20 text-start">
      <div className="max-w-7xl mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-between">
        <div className='flex justify-center items-end'>
          <div>
          <img src={logo} alt="" />
          <p className='mt-8'>123 Main Street, Anytown, USA</p>
          <p className='mb-8'>Postal Code: 12445</p>
          <p>Support: support@yopmail.com</p>
          <p>Available: 10am to 07pm</p>
          </div>
        </div>

        <div className="flex justify-center items-end">
          <div className='flex flex-col gap-4'>
          <a>Home</a>
          <a href="/about" className="text-white hover:underline">About Us</a>
          <a href="/success" className="text-white hover:underline">Success Page</a>
          <a href="/terms" className="text-white hover:underline">Terms and conditions</a>
          </div>
        </div>
        
        <div className="flex justify-center items-end">
        <div className="flex flex-col gap-4">
          <a href="/service">Services</a>
          <a href="/scheduling" className="text-white hover:underline">Scheduling</a>
          <a href="/contact" className="text-white hover:underline">Contact Us</a>
          <a href="/contact" className="text-white hover:underline">Pateints Portal</a>
        </div>
        </div>


          <div className="flex justify-center items-end">
          <div className="flex flex-col">
          <a className='mb-2'>Follow Us</a>
          <div className="flex space-x-2 mb-6">
            <a href="https://facebook.com" className="text-white text-2xl hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://twitter.com" className="text-white text-2xl hover:text-blue-500"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-white text-2xl hover:text-blue-500"><FaInstagram /></a>
            <a href="https://youtube.com" className="text-white text-2xl hover:text-blue-500"><FaYoutube /></a>
          </div>
        

        {/* Copyright Notice */}
        <p className="mt-4">&copy; Docplus 2024</p>
        </div>
        </div>
      </div>
      </div>
      {/* Additional styles can be applied as needed */}
    </footer>
  );
};

export default Footer;