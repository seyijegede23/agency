import React from 'react';
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';

// Define the contact information structure
const CONTACT_INFO = [
    { label: 'Mail Us', value: 'hello@example.com' },
    { label: 'Call Us', value: '+234 8130980509' },
];

const ContactUs = () => {
 
  const onSubmit = async (event) => {
     event.preventDefault();
  
    const formData = new FormData(event.target);
    formData.append("access_key", "47d3bb3e-400d-489b-9315-fd3d4f373080");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for reaching out");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
      
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id='contact-us' className='py-20 px-4 sm:px-8 xl:px-20 text-gray-800 dark:text-white'>
        
        {/* Title area (assumes Title component centers its content) */}
        <div className='max-w-4xl mx-auto mb-12'>
            <Title 
                title='Let’s Build Something Great Together' 

            />
        </div>
        
        {/* Main Content Area: Split Panel Layout */}
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden'>
            
            {/* 1. LEFT PANEL: Contact Information (Text-Only) */}
            {/* Note: Removed the "Follow us for updates" div and its border from the bottom */}
            <div className='lg:w-1/3 p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-between'>
                <div className='mb-10'>
                    <h3 className='text-3xl font-bold mb-3'>Contact Details</h3>
                    <p className='text-gray-400'>We're here to help you Monday to Friday, 9am - 5pm.</p>
                </div>
                
                {/* Contact List with tel: and mailto: links */}
                <div className='space-y-6'>
                    {CONTACT_INFO.map((item, index) => {
                        let linkHref = "#";
                        
                        if (item.label === 'Call Us') {
                            linkHref = `tel:${item.value.replace(/\s/g, '')}`; 
                        } else if (item.label === 'Mail Us') {
                            linkHref = `mailto:${item.value}`;
                        }

                        return (
                            <div key={index} className='pl-1'> 
                                <p className='text-sm font-semibold text-gray-400'>{item.label}</p>
                                <a 
                                    href={linkHref} 
                                    className='text-xl font-medium hover:text-primary transition block mt-1' 
                                >
                                    {item.value}
                                </a>
                            </div>
                        );
                    })}
                </div>
                
                {/* Removed the social links/footer branding div */}
            </div>

            {/* 2. RIGHT PANEL: The Form (Interactive) */}
            <div className='lg:w-2/3 p-8 md:p-12 bg-white dark:bg-gray-800'>
                <h3 className='text-3xl font-bold mb-8 text-gray-900 dark:text-white'>Send Us A Message</h3>
                
                <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-x-6 gap-y-5 w-full'>
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>Your Name</label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <img src={assets.person_icon} alt='person icon' className='w-4 h-4 opacity-60'/>
                            </div>
                            <input 
                                id='name'
                                name='name' 
                                type="text" 
                                placeholder='Enter your name' 
                                className='w-full pl-10 p-3 text-sm rounded-lg border border-gray-300 focus:ring-primary focus:border-primary outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
                                required 
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>Email Address</label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <img src={assets.email_icon} alt='email icon' className='w-4 h-4 opacity-60'/>
                            </div>
                            <input 
                                id='email'
                                name='email' 
                                type="email" 
                                placeholder='example@example.com' 
                                className='w-full pl-10 p-3 text-sm rounded-lg border border-gray-300 focus:ring-primary focus:border-primary outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
                                required 
                            />
                        </div>
                    </div>
                    
                    {/* Message Textarea (Spans 2 columns) */}
                    <div className='sm:col-span-2'>
                        <label htmlFor="message" className='mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300'>Project Details / Message</label>
                        <textarea 
                            id='message'
                            name='message' 
                            rows={6} 
                            placeholder='Tell us about your project, goals, and budget...' 
                            className='w-full p-4 text-sm outline-none rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white' 
                            required
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type='submit' 
                        className='sm:col-span-2 w-full lg:w-max flex items-center justify-center gap-3 bg-primary text-white text-base font-semibold px-8 py-3 mt-4 rounded-full transition-transform hover:scale-[1.02] active:scale-95'
                    >
                        Send Message 
                        <img src={assets.arrow_icon} alt='submit button' className='w-4 h-4'/>
                    </button>
                </form>
            </div>
        </div>

    </div>
  );
}

export default ContactUs;