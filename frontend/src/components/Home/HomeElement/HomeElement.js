import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, Button } from '@mui/material';

const HomeElement = (props) => {
  return (
    <Card className='home-card-container'>
        <CardContent className='home-card-container-child'>
            <h4 className='card-cont-title'>{props.title}</h4>
            <div className='card-info-container'>
              <p className='card-cont-text'>{props.content1}</p>
              <p className='card-cont-text'>{props.content2}</p>
            </div>
            
            <Link to={props.link} className='card-cont-btn'>
                <Button size='medium' variant='contained' color='error'> {props.btnContent} </Button> 
            </Link>
        </CardContent>
    </Card>
  );
};

export default HomeElement;
