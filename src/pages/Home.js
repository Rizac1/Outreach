import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  article {
    float: left;
    padding: 20px;
    width: 50%;
    background-color: #f1f1f1;
  }

  .Non-Profits {
    float: right;
    padding: 16px;
    width: 50%;
    background-color: #f1f1f1;
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
`;

export const Home = () => (
  <Styles>
    <div>
      <h1>Outreached</h1>
      <article>
        <h4>Our Mission</h4>
        <p>
          Our mission is to start a website that will allow Non-Profit
          Organizations match with companies that might be able to lend support.
        </p>
        <p>
          We hope to be able to get this website to help the people of the
          communities to benefit in some way
        </p>
      </article>
      <article className="Non-Profits">
        <h4>List of some of our Non-Profit Members</h4>
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
        </ul>
      </article>
    </div>
  </Styles>
);
