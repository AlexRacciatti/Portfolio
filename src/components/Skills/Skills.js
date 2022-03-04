import React from 'react';

import Header from '../Home/Header/Header';
import SkillDiv from './SkillDiv';

import './Skills.css'
import { frontSkills, backSkills, otherSkills, softSkills } from './SkillList';


const Skills = () => {
  return(
    <div>
        <Header/>
        <main className='grid-container'>
          <h1 className='item-1'>Here are some lists of the skills i have as a developer</h1>
          <section className='item-2 skills-section'>
            <h2>Frontend Stack</h2>
            <ul>
              {frontSkills.map((item, index) => {
                return(
                  <li key={index}>
                    <SkillDiv name={item.name} experience={item.experience} knowledge={item.knowledge}/>
                  </li>
                )
              })}
            </ul>
          </section>
          <section className='item-3 skills-section'>
            <h2>Backend Stack</h2>
            <ul>
              {backSkills.map((item, index) => {
                return(
                  <li key={index}>
                    <SkillDiv name={item.name} experience={item.experience} knowledge={item.knowledge}/>
                  </li>
                )
              })}
            </ul>
          </section>
          <section className='item-4 skills-section'>
            <h2>Other skills</h2>
            <ul>
              {otherSkills.map((item, index) => {
                return(
                  <li key={index}>
                    <SkillDiv name={item.name} experience={item.experience} />
                  </li>
                )
              })}
            </ul>
          </section>
          <section className='item-5 skills-section'>
            <h2>Soft skills</h2>
            <ul className='soft-skills-ul'>
              {softSkills.map((item, index) => {
                return(
                  <li key={index} className='soft-skills-li'>
                    <p>{item}</p>
                  </li>
                )
              })}
            </ul>
          </section>
        </main>
    </div>
  )
};

export default Skills;
