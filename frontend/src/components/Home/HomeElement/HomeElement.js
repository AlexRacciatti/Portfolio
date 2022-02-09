import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '@mui/material';

const HomeElement = (props) => {
  return (
    <Card>
        <CardContent>
            <h4>{props.title}</h4>
            <p>{props.content1}</p>
            <p>{props.content2 ? props.content2 : ""}</p>
            <Link to={props.link}>
                <p>{props.btnContent}</p>
            </Link>
        </CardContent>
    </Card>
  );
};

export default HomeElement;
