import React from "react";
import { Jumbotron as Jumbo } from 'react-bootstrap';
import group from '../assets/group.jpg';
import styled from "styled-components";
import "../pages/Home.css";

const Styles = styled.div`
   article {
    padding: 20px;
    width: 48%;
    background: #a9a9a9;
    margin-top: 100px;
    margin-left: -300px;
    box-shadow: 3px 3px 5px #13293d;
    border-radius: 5px;
  }

  .Non-Profits {
    padding: 20px;
    padding-bottom: 30px;
    width: 48%;
    margin-top: 25px;
  }

  img {
    width: 600x;
    height: 600px;
    float: right;
    margin-top: 80px;
    margin-left: 100px;
    margin-right: -340px;
  }

  p {
    text-align: center;
    font-size: 18px;
  }

  h4 {
    text-align: center;
  }

  h1 {
    margin-left: -150px;
    margin-bottom: -70px;
    margin-top: 40px;
    font-size: 60px;
  }

  ul {
    width: -10px;
  }
`;

export const Home = () => (
  <Styles>
    <div>
      <img src={group}/>
      <h1>Outreachd</h1>
      <article>
        <h4>Our Mission</h4>
        <p>
          Our mission is to provide a platform to allow NFP to bring awareness to specifically needed skills that are critical to their success and which they lack, 
          and allow business to quickly engrave to provide volunteer resources to match the highlighted needs.
        </p>
        <p>
          Check out our full list of Not-For-Profit Projects: <a href="/NFPlist">NFP Project List</a>
        </p>
      </article>
      <article className="Non-Profits">
        <h4>List of some of our Not-For-Profits</h4>
        <ul className="container">
          <li>
            <a id="linkwrap" href="#">Baskweavers-R-Us</a>
          </li>
          <li>
            <a href="#">NFPex2</a>
          </li>
          <li>
            <a href="#">NFPex3</a>
          </li>
          <li>
            <a href="#">NFPex4</a>
          </li>
          <li>
            <a href="#">NFPex5</a>
          </li>
          <li>
            <a href="#">NFPex6</a>
          </li>
        </ul>
      </article>
    </div>
  </Styles>
);


