import React from 'react';
import { Card } from 'react-bootstrap';

export const NFPListIndividualFrame = ({nfplist}) => (
  <Card>
    <Card.Body>
      <Card.Title>{nfplist.ProfileName}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{nfplist.ProjectName}</Card.Subtitle>
      <Card.Text>
        {nfplist.About}
      </Card.Text>
      <Card.Text>
        {nfplist.Time}
        <br></br>
        {nfplist.Location}
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Skills Needed:</Card.Subtitle>
      <Card.Text>
        {nfplist.Skills}
      </Card.Text>
      <a href="/NFPUser">Learn More</a>
    </Card.Body>
  </Card>
)