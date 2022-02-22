import React from 'react';
import Header from '../Home/Header/Header';
import './Skills.css'
import { frontSkills, backSkills, otherSkills, softSkills } from './SkillList';


const Skills = () => {
  return(
    <div>
        <Header/>
        <main className='grid-container'>
          <h1 className='item-1'>Here are a list of the skills i have as a developer.</h1>
          <section className='item-2'>
            <h2>Frontend Stack</h2>
          </section>
          <section className='item-3'>
            <h2>Backend Stack</h2>
          </section>
          <section className='item-4'>
            <h2>Other skills</h2>
          </section>
          <section className='item-5'>
            <h2>Soft skills</h2>
          </section>
        </main>
    </div>
  )
};

export default Skills;
