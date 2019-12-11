import React from "react";
import group from '../assets/group.jpg';
import styled from "styled-components";
import "../pages/Home.css";

const Styles = styled.div`
   article {
    padding: 20px;
    width: 60%;
    background: #a9a9a9;
    margin-top: 100px;
    margin-left: -260px;
    box-shadow: 3px 3px 5px #13293d;
    border-radius: 5px;
  }

  .Non-Profits {
    padding: 20px;
    padding-bottom: 30px;
    width: 60%;
    margin-top: 25px;
  }

  img {
    width: 1000px;
    height: 650px;
    float: right;
    margin-top: 50px;
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
    margin-left: -65px;
    margin-bottom: -70px;
    margin-top: 40px;
    font-size: 60px;
  }

  ul {
    width: 35%;
  }
`;

export const Home = () => (
  <Styles>
    <div>
      <img src={group} alt="people holding each others wrist"/>
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
            <a id="linkwrap" href="/NFPUser">Baskweavers-R-Us</a>
          </li>
          <li>
            <a href="/NFPUser">NFPex2</a>
          </li>
          <li>
            <a href="/NFPUser">NFPex3</a>
          </li>
          <li>
            <a href="/NFPUser">NFPex4</a>
          </li>
          <li>
            <a href="/NFPUser">NFPex5</a>
          </li>
          <li>
            <a href="/NFPUser">NFPex6</a>
          </li>
        </ul>
      </article>
    </div>
  </Styles>
);


