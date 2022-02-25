import { useState, useEffect } from 'react'

import './SkillDiv.css'

import { LinearProgress } from '@mui/material';

const SkillDiv = (props) => {

  const [expLevel, setExpLevel] = useState(0);


  useEffect(()=>{
    const experience = props.experience;
    setInterval(()=>{
      setExpLevel((newELevel) => newELevel < experience ? newELevel + 5 : experience)
    }, 100);
  }, [props.experience]);


  return (
    <div className='skill-div-container'>
      <h3 className='skill-div-heading'>{props.name}</h3>
      <LinearProgress variant='determinate' value={expLevel} color= 'error' />
    </div>
  )
}

export default SkillDiv