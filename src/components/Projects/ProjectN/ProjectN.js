import React from 'react';
import './ProjectN.css'

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProjectN = (props) => {
    return (
      <section className='projectN-container'>
        <Card sx={{ maxWidth: 600, border:1, borderColor: 'black', backgroundColor: 'rgba(0,0,0,.9)', color: 'white' }}>
          <CardMedia
            component="img"
            alt= {props.alt}
            height="fitContent"
            image= {props.image}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" color='error'>
              {props.title}
            </Typography>
            <Typography gutterBottom variant='subtitle1' component='div'>
              {props.subtitle}
            </Typography>
            <Typography variant="body2" sx={{color: '#B6B6B6'}}>
              {props.description}
            </Typography>
            <Typography variant='body2' component='div'>
              <Typography className='heading' variant='h6' color='error'>Tech stack used in this project</Typography>
              <ul className='project-ul'>
              {props.techs.map((item, index) => {
                return <li className='project-li' key={index}>{item}</li>
              })}
              </ul>
            </Typography>
          </CardContent>
          <CardActions>
            <a href={props.pageLink} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
              <Button size="small" variant='contained' color='error'>Visit site</Button>
            </a>
            <a href={props.gitLink} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
              <Button size="small" variant='outlined' color='error'>Go to GitHub Repository</Button>
            </a>
          </CardActions>
        </Card>
      </section>
    
  )
}

export default ProjectN