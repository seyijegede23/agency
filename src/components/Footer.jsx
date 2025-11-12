import React from 'react'
import assets from '../assets/assets'
import { CgSoftwareDownload } from 'react-icons/cg' 

const Footer = () => {
    const mainLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'Our Works', href: '#our-works' },
        { name: 'Contact US', href: '#contact-us' },
    ];

    const utilityLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Support', href: '#' },
    ];

    return (
        <div className='bg-slate-50 dark:bg-gray-900 pt-16 sm:pt-20 mt-20 sm:mt-40 
            text-gray-700 dark:text-gray-300'>
            
            {/* Main Content Area */}
            <div className='px-4 sm:px-10 lg:px-24 xl:px-40'>
                
                {/* REARRANGEMENT: Grid now has 4 equally sized columns on large screens (lg:grid-cols-4)
                    and the gap is significantly reduced (gap-x-12) */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-x-12 gap-y-10 pb-16'> 
                    
                    {/* Column 1: Logo and Description */}
                    {/* KEY CHANGE: Removed lg:col-span-2 to make this section take up only 1 column */}
                    <div className='lg:col-span-1 md:col-span-2'> 
                        <img 
                            src={assets.real_logo} 
                            alt="Reliant Technology software company" 
                            className='w-36 sm:w-40 mb-6' // Slightly smaller logo width for better fit
                        />
                        <p className='max-w-md text-sm leading-relaxed mb-6'> 
                            We turn ideas into reality with innovative solutions, creative design, and cutting-edge technology. Let’s collaborate 
                            and make your project come alive.
                        </p>

                        {/* Instagram Social Link */}
                        <div className='mt-4'>
                            <a 
                                href='https://www.instagram.com/relianttechnology__?igsh=Mm91amYyNjdsdG4=' 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Reliant Technology Instagram"
                                className='inline-block transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100'
                            >
                                <img 
                                    src={assets.instagram_icon} 
                                    alt="Instagram Icon" 
                                    className='w-7 h-7' 
                                />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Now in the second column slot) */}
                    <div className='lg:col-span-1'>
                        <h4 className='font-semibold text-lg mb-4 text-gray-800 dark:text-white'>Quick Links</h4> 
                        <ul className='space-y-3 text-sm'> 
                            {mainLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href} 
                                        className='hover:text-primary dark:hover:text-white transition-colors duration-200'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources (Now in the third column slot) */}
                    <div className='lg:col-span-1'>
                        <h4 className='font-semibold text-lg mb-4 text-gray-800 dark:text-white'>Resources</h4> 
                        <ul className='space-y-3 text-sm'> 
                            {utilityLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href} 
                                        className='hover:text-primary dark:hover:text-white transition-colors duration-200'
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Stay Updated/Newsletter (Now in the fourth column slot) */}
                    <div className='lg:col-span-1 md:col-span-2'>
                        <h4 className='font-semibold text-lg mb-4 text-gray-800 dark:text-white'>Stay Updated</h4> 
                        <p className='text-sm mb-4'> 
                            Subscribe to our newsletter for the latest tech news and project updates.
                        </p>
                        <div className='flex flex-col gap-3'> 
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className='p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary 
                                outline-none transition-all text-sm' 
                            />
                            <button className='flex items-center justify-center gap-2 p-3 bg-primary 
                                text-white rounded-lg hover:bg-opacity-90 transition-opacity duration-300 text-sm'> 
                                <CgSoftwareDownload className='transform rotate-90'/> 
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className='border-gray-200 dark:border-gray-700 my-8'/> 
            </div>

            {/* Bottom Bar: Copyright and Legal */}
            <div className='px-4 sm:px-10 lg:px-24 xl:px-40'>
                <div className='pb-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2'> 
                    <p>
                        &copy; {new Date().getFullYear()} Reliant Technology. All rights reserved.
                    </p>
                    <p className='flex gap-4'>
                        <span>Designed and Developed with 💖</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;