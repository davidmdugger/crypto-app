import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Crypto.css';

Crypto = (props) => {
  return (
    <Col className="crypto" key={props.id} xs={8} xsOffset={2} sm={4} smOffset={0}>
      <Image src={props.image} className="three-images"/>
      <h4>{props.name}</h4>
      <p>Category: {props.category}</p>
      <p className="crypto-description">{props.description}</p>
    </Col>
  )
}

export default Crypto;