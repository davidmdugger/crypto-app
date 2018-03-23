import React, { Component } from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import './About.css';

class About extends Component{
  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <Image src="https://steemit-production-imageproxy-thumbnail.s3.amazonaws.com/DQmUrHhwBU8AE5Wtn1Jmmc9eWm4wdFToTgB4dJKqf8orsPZ_1680x8400" className="banner text-center"/>
              <p>Cryptocurrencies are more well known, but the underlying technology is called blockchain. And it's something you, and everyone else, should be excited about. Blockchain technology is allowing for the near-instant transfer of data and value through the internet. Just like the invention of email allowed us to instantly transfer information, cryptocurrencies allow for us to instantly transfer our data and value (money).</p>
              <p>The focus, up until now, has been on money; hence the word "currency" in cryptocurrency. What people fail to recognize, is the word crypto. In the case of Bitcoin, your money is cryptographically stored and transferred. Rather than discuss the nuances, this basically means that you own your money, and you don't need a bank to safely secure your money for you.</p>
              <p>Instead, you are your own bank. You have a private access key to your wallet that is 28 characters long. Each transaction that leaves your wallet is only permissable with this private key. It's like a bank account number, except only you know it, and it's more than three times as long as your bank account number.</p>
              <p>Currency isn't the only thing blockhain can provide access to. As I previously mentioned, data is another.</p>
              <p>This is wide ranging journey through the world of cryptocurrencies, and my goal is to help you navigate through the mess. Truly, there are numerous scams out there. But just like scams on the interent, there are also some people solving really tangible, important problems with this technology.</p>
              <p>Join me as I guide you through the world of cryptocurrencies focus on the technology, not the currency.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default About;
