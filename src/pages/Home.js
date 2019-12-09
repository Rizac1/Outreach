import React from "react";
import { Jumbotron as Jumbo } from 'react-bootstrap';
import gears from '../assets/gears.jpg';
import styled from "styled-components";

const Styles = styled.div`
   article {
    float: left;
    padding: 20px;
    width: 48%;
    background-color: #f3f1ef;
    margin-top: 25px;
    box-shadow: 8px 8px 5px #13293d;
  }

  .Non-Profits {
    float: right;
    padding: 20px;
    padding-bottom: 30px;
    width: 48%;
    background-color: #f3f1ef;
    margin-top: 25px;
  }

  p {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  h1 {
    text-align: center;
  }

  ul {
    width: 20%;
  }

  .jumbotron {
    background: url(${gears}) no-repeat fixed;
    background-size: contain;
    color: #efefef;
    height: 200px;
    margin-left: -405px;
    margin-right: -405px;
    z-index: -2;
  }
  
.overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;





export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <h1>Welcome</h1>
    </Jumbo>

    <div>
      <h1>Outreachd</h1>
      <article>
        <h4>Our Mission</h4>
        <p>
          Our mission is to provide a platform to allow NFP to bring awareness to specifically needed skills that are critical to their success and which they lack, 
          and allow business to quickly engrave to provide volunteer resources to match the highlighted needs.
        </p>
        <p>
          Check out our full list of Not-For-Profits: <a href="/NFPlist">NFP List</a>
        </p>
      </article>
      <article className="Non-Profits">
        <h4>List of some of our Not-For-Profits</h4>
        <ul className="container">
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">Link 4</a>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
          <li>
            <a href="#">Link 6</a>
          </li>
        </ul>
      </article>
    </div>
  </Styles>
);


