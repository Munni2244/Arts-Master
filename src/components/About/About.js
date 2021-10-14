import React from 'react';
import { Col } from 'react-bootstrap';
import './About.css'
const About = ({artist}) => {
    const {name, img}=artist;
    return (
        <Col id="artist" lg={4} xs={12} md={6} className="artist ">
            <img src={img} alt="" />
            <h1>{name}</h1>
        </Col>
    );
};

export default About;