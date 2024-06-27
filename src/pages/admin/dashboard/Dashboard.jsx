import React from 'react'
import Header from '../../../components/admin/Navbar'
import Footer from '../../../components/admin/Footer'
import Sidebar from '../../../components/admin/Sidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
  return (
  <>
  <Container>
    <Row>
      <Col>
          <Sidebar />
          </Col>
          <Col>

           <Header />
           </Col>

     </Row>
  </Container>
  </>
  )
}

export default Dashboard
