import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1.5px solid rgba(0, 0, 0);
  }
`;

export const NoPage = () => (
  <Styles>
    <div>
      <h1>This page cannot be found</h1>
      <hr />
      <p>The page you are looking for might have been removed, had its name changed,<br></br> or is temporatily unavailable.</p>
      <hr/>
      <p>Please try the following</p>
      <ul>
          <li>If you typed the page address in the Address bar, make sure that it<br></br> is spelled correctly.</li>
          <li>Open the home page, and then look for links <br></br> to the information you want.</li>
          <li>Click the <a href="/">Home</a> button to try another link.</li>
      </ul>
      <p>HTTP 404 - File not found</p>
      <p>Internet Information Services</p>
    </div>
  </Styles>
);
