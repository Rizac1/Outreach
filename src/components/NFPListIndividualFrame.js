import React from 'react';
import { Card } from 'react-bootstrap';

export const NFPListIndividualFrame = ({nfplist}) => (
  <Card>
    <Card.Body>
      <Card.Title>{nfplist.companyname}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{nfplist.projectname}</Card.Subtitle>
      <Card.Text>
        {nfplist.about}
      </Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Skills Needed:</Card.Subtitle>
      <Card.Text>
        {nfplist.skills}
      </Card.Text>
    </Card.Body>
  </Card>
)