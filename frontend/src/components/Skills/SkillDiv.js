import { useState, useEffect } from 'react'

import { LinearProgress } from '@mui/material';

const SkillDiv = (props) => {

  const [expLevel, setExpLevel] = useState(0);


  useEffect(()=>{
    const experience = props.experience;
    setInterval(()=>{
      setExpLevel((newELevel) => newELevel < experience ? newELevel + 5 : experience)
    }, 100);
  }, []);

  const [knwgLevel, setKnwgLevel] = useState(0);

  useEffect(()=>{
    const knowledge = props.knowledge;
    setInterval(()=>{
      setKnwgLevel((newKLevel) => newKLevel < knowledge ? newKLevel + 5 : knowledge)
    }, 100);
  }, []);

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Experience <LinearProgress variant='determinate' value={expLevel} color= 'error' /></p>
      <p>Knowledge <LinearProgress variant='determinate' value={knwgLevel} /></p>
    </div>
  )
}

export default SkillDiv