import React from 'react';
import { Card } from 'react-bootstrap';

export const NFPListIndividualFrame = ({nfplist}) => (
  <Card>
    <Card.Body>
      <Card.Title><b>{nfplist.ProfileName}</b></Card.Title>
      <Card.Subtitle><b><i>{nfplist.ProjectName}</i></b></Card.Subtitle>
      <br></br>
      <Card.Text>
        {nfplist.About}
      </Card.Text>

      <Card.Subtitle className="mb-2 text-muted">Skills Needed:</Card.Subtitle>
      <Card.Text>
        <b>{nfplist.Skills}</b>
      </Card.Text>
      <Card.Text>
      <div className="d-flex justify-content-between">
        <p>Time Expected To Complete: <b>{nfplist.Time}</b></p>
        <p>Location: <b>{nfplist.Location}</b></p>
        <a href="/NFPUser">Learn More</a>
      </div>
      </Card.Text>
      
    </Card.Body>
  </Card>
)