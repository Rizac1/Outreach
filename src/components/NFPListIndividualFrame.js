import React from 'react';
import { Card } from 'react-bootstrap';

const nfplistCard = {
  padding: "10px",
  backgroundColor: "#f3f1ef",
  margin: "25px",
  boxShadow: "8px 8px 5px #13293d"
};

export const NFPListIndividualFrame = ({nfplist}) => (
 <Card style={nfplistCard}>
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
    </Card.Body>
  </Card>
)
