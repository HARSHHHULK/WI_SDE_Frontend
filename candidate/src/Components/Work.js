import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Work = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d');
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getCardColor = (status) => {
    switch (status) {
      case 'Applied':
        return 'primary';
      case 'Accepted':
        return 'success';
      case 'Rejected':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <Container>
      <br></br>
      <Row>
        <Col>
          <center><h4>Applied</h4></center>
          <hr></hr>
          {loading ? (
            <p>Loading...</p>
          ) : data.length > 0 ? (
            data.map((candidate) => (
              candidate.status === 'Applied' && (
                <Card key={candidate.id} bg={getCardColor(candidate.status)} text="light" className="mb-3">
                  <Card.Body>
                  <Card.Title>{candidate.name}</Card.Title>
                  <Card.Text className="bullet-point">Last Updated: {candidate.last_updated_at}</Card.Text>
                  <Card.Text className="bullet-point">Location: {candidate.location}</Card.Text>
                  <Card.Text className="bullet-point">Gender: {candidate.gender}</Card.Text>
                  </Card.Body>
                </Card>
              )
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Col>
        <Col>
        <center><h4>Accepted</h4></center>
          <hr></hr>
          {loading ? (
            <p>Loading...</p>
          ) : data.length > 0 ? (
            data.map((candidate) => (
              candidate.status === 'Accepted' && (
                <Card key={candidate.id} bg={getCardColor(candidate.status)} text="light" className="mb-3">
                  <Card.Body>
                  <Card.Title>{candidate.name}</Card.Title>
                  <Card.Text className="bullet-point">Last Updated: {candidate.last_updated_at}</Card.Text>
                  <Card.Text className="bullet-point">Location: {candidate.location}</Card.Text>
                  <Card.Text className="bullet-point">Gender: {candidate.gender}</Card.Text>
                  </Card.Body>
                </Card>
              )
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Col>
        <Col>
        <center><h4>Rejected</h4></center>
          <hr></hr>
          {loading ? (
            <p>Loading...</p>
          ) : data.length > 0 ? (
            data.map((candidate) => (
              candidate.status === 'Rejected' && (
                <Card key={candidate.id} bg={getCardColor(candidate.status)} text="light" className="mb-3">
                  <Card.Body>
                  <Card.Title>{candidate.name}</Card.Title>
                  <Card.Text className="bullet-point">Last Updated: {candidate.last_updated_at}</Card.Text>
                  <Card.Text className="bullet-point">Location: {candidate.location}</Card.Text>
                  <Card.Text className="bullet-point">Gender: {candidate.gender}</Card.Text>
                  </Card.Body>
                </Card>
              )
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
