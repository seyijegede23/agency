import assets from '../assets/assets'
import Title from './Title'

export const Services = () => {
    const servicesdata =[
        {
            title: 'Design',
            description:'We blend creativity with strategy to deliver impactful branding, web design, and UI/UX experiences that communicate your message clearly and elevate your brand’s visual identity.',
            icon: assets.design 
        },
         {
            title: 'AI & Machine Learning',
            description:'We harness the power of AI and Machine Learning to build intelligent systems that analyze data, automate processes, and deliver predictive insights empowering businesses to make smarter, data-driven decisions.',
            icon: assets.aiicon
        },
         {
            title: 'Web Development',
            description:'We build fast, responsive, and scalable websites tailored to your brand delivering seamless user experiences with modern web technologies.',
            icon: assets.webicon
        },{
            title: 'Mobile Development',
            description:'We create high-performance mobile apps for iOS and Android combining sleek design with seamless functionality to enhance user engagement.',
            icon: assets.mobileicon
        },
        {
            title: 'Cybersecurity',
            description:'We provide advanced cybersecurity solutions to protect your digital assets ensuring data privacy, threat detection, and robust system security.',
            icon: assets.cybericon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-20 pt-30 text-gray-700 dark:text-white'>
    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
    
     <Title title='Got an Idea? Let’s Bring It to Life' desc='We turn ideas into reality with innovative solutions, creative design, and cutting-edge technology. Let’s collaborate and make your project come alive.'/>

    </div>
  )
}
