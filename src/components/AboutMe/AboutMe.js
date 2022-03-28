import React from 'react';
import Header from '../Home/Header/Header';

import { styled } from '@mui/system';
import { Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import './AboutMe.css';

const AboutMe = () => {

    const MyAccordion = styled(Accordion)({
        backgroundColor: 'rgba(211, 47, 47, .9)',
        color: 'rgb(223, 223, 223)'
    })


     return (
        <div>
            <Header/>
            <main className='abtMe-main-container'>
                <h1>Let me talk you more about me</h1>
                <MyAccordion className='asd'>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <h3>Who am i?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>Hi! My name is Alex. I'm 21 years old and started my developer path a year ago making the <a href='https://www.digitalhouse.com/ar/productos/programacion/programacion-web-full-stack' target='_blank' rel='noreferrer' style={{ color: 'white' }}>Digital House Full Stack Developer bootcamp</a></p>
                    </AccordionDetails>
                </MyAccordion>
                <MyAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <h3>How did i got involved with web development?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        To answer this, I have to go maybe a little too much back in time. Before COVID-19 pandemic, i was doing a Social Communicator Bachelor Degree at the Universidad Nacional of General Sarmiento. With the COVID explosion and the lockdown I found myself with a dilemma of what I wanted for my future and if I was happy with the career decision I had made. 
                        <br/>
                        After several weeks of thinking about it, I decided to quit college with my family backup to focus in what caught my interest: Web Development. 
                        <br/>
                        I got into web development because i have some friends that made the same Digital House bootcamp and recommended me to do it if i was aiming to became a developer and that I should take a look into Web Development because of my creativity.
                    </p>
                    </AccordionDetails>
                </MyAccordion>
                <MyAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <h3>How is my journey going after Digital House bootcamp?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        I ended the bootcamp in November of 2021. Since then, I learned more about React in the <strong>FreeCodeCamp Frontend libraries certification</strong>. In this same certification, I also got a first approach to SASS and Redux and those are the skills that I'm aiming to improve after I finish this project. 
                        <br/>
                        In addition to the FreeCodeCamp course, I learned about Object Oriented Programming (stay tuned to see my next project, it might include an OOP structure).
                    </p>
                    </AccordionDetails>
                </MyAccordion>
                <MyAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <h3>What I'm looking to learn next?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        My main objective right now is to improve my knowledge in RESTful APIs and Asynchronous Javascript. Maybe at the same time learn MongoDB and develop my own API (another potential project!).
                        <br/>
                        After that, I'm looking forward to add testing skills to my profile which is what I'm lacking of and it's an extremely useful tool.
                        <br/>
                        I don't know which are going to be the following steps of my path, but I'm really excited to see which challenges this huge world haves for me!
                    </p>
                    </AccordionDetails>
                </MyAccordion>
                <MyAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <h3>What can I offer to your team?</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                    <p>
                        Besides my hard skills that are still growing, I think that what makes me an excellent fit for your team are my soft skills.
                        <br/>
                        I consider myself as a hard-worker person, who enjoys to interact with team members and learn of them in order to be always improving myself. So if you are looking to add a team-worker developer with proficient communication skills and an easy-going attitude, then I think you came to the right place.
                        <br/>
                    </p>
                    </AccordionDetails>
                </MyAccordion>
            </main>
        </div>
    );
};

export default AboutMe;
