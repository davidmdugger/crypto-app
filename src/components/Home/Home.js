import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Button } from 'react-bootstrap';
import Crypto from '../Crypto/Crypto';
import './Home.css';

class Home extends Component{
  state = {
    title: 'Blockchain & Cryptocurrencies',
    subtitle: 'Learn why currency is only a small part of cryptocurrencies',
    cryptos: [
      {
        name: 'Bitcoin',
        image: 'http://pngimg.com/uploads/bitcoin/bitcoin_PNG16.png',
        category: 'Currency',
        description: 'Bitcoin is the father of all cryptocurrencies. It is best used a store of value right now. It is similar to physical gold in the sense that owners typically do not sell it, rather they hold it as a store of value with the expectation that it increases in value compared to the dollar.'
      },
      {
        name: 'Icon',
        image: 'https://res.cloudinary.com/teepublic/image/private/s--dPeldE_k--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_191919,e_outline:35/co_191919,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1514497482/production/designs/2230843_1.jpg',
        category: 'Protocol',
        description: 'Icon\'s tagline is to \'Hyperconnect the world\'. Right now, blockchains are fragmented and difficult for them to communicate with each other. Icon\'s goal is to connect different blockchains together for seemless transfers of data and value. Meaning, regardless of what currency you own (Fiat or Crypto), Icon wants to increase the ease of use for consumers and businesses to use blockchain technology to make transactions at the speed of the internet.'
      },
      {
        name: 'OriginTrail',
        image: 'https://i0.wp.com/cryptostec.com/wp-content/uploads/2018/01/origintrail.jpg?fit=400%2C400&ssl=1',
        category: 'Protocol',
        description: 'OriginTrail is trying to solve the fragmentation in the supply chain industry. Ohe of the biggest difficulties in supply chain is trusting that the product was created, transported, and handled appropriately. OriginTrail has been tracking organic food products since 2013 with the intent to provide consumers and businesses the exact farm their food products come from.'
      }
    ]
  }
  
  render(){
    return(
      <Grid>
        <Jumbotron>
          <h2>{this.state.title}</h2>
          <p>{this.state.subtitle}</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>

        <Row className="show-grid text-center">
          {
            this.state.cryptos.map((crypto, i) =>{
              return(
                <Crypto
                  key={i}
                  id={i}
                  name={crypto.name}
                  image={crypto.image}
                  category={crypto.category}
                  description={crypto.description}
                />
              );
            })
          }
        </Row>
      </Grid>
    );
  }
}

export default Home;
