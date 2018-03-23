import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component{
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>Blockchain & Cryptocurrencies</h2>
          <p>Learn why currency is only a small part of cryptocurrencies</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={8} xsOffset={2} sm={4} smOffset={0}>
            <Image src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG16.png" className="three-images"/>
            <h4>Bitcoin</h4>
            <p>Category: Currency</p>
          </Col>
          <Col xs={8} xsOffset={2} sm={4} smOffset={0}>
            <Image src="https://res.cloudinary.com/teepublic/image/private/s--dPeldE_k--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:35/co_191919,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1514497482/production/designs/2230843_1.jpg" className="three-images"/>
            <h4>Icon</h4>
            <p>Category: Protocol</p>
          </Col>
          <Col xs={8} xsOffset={2} sm={4} smOffset={0}>
            <Image src="https://i0.wp.com/cryptostec.com/wp-content/uploads/2018/01/origintrail.jpg?fit=400%2C400&ssl=1" className="three-images"/>
            <h4>OriginTrail</h4>
            <p>Category: Protocol</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
