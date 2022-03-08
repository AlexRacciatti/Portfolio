import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProjectN = (props) => {
    return (
    <Card sx={{ maxWidth: 700, ml:2, mb: 2, border:1, borderColor: 'black', backgroundColor: 'rgba(0,0,0,.7)', color: 'white' }}>
      <CardMedia
        component="img"
        alt="green iguana"
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
  )
}

export default ProjectN