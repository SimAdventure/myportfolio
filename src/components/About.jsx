import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'


const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt> 
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled Information Management System Administrator with two years of experience at the Eastern Cape Department of Transport. I specialize in configuring workstations, securing networks, and deploying software solutions to enhance operational efficiency. My expertise includes administering Active Directory, managing Microsoft 365 licenses through Azure AD Groups, and streamlining workflows using PowerApps, Power Automate, and Power BI. I have a solid foundation in user support, troubleshooting, and system maintenance. Technically proficient in SQL, DBMS, HTML/CSS, Java, and JavaScript, I also bring experience with low-code platforms and database design. My strong understanding of IT infrastructure , combined with hands-on experience in both hardware and software troubleshooting, allows me to provide comprehensive technical support and innovative solutions
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
