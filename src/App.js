import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/DashBoard';
import { Container, Row, Col,Nav } from 'react-bootstrap';
//import BlogPage from './Components/BlogPage';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import BlogPage from './Components/BlogPage'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <h1 className='d-flex justify-content-center'>Blog Site</h1>
          </Col>
        </Row>

        <Row>
          <Col className='d-flex justify-content-center'>
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>Blog Page</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/DashBoard'>DashBoard</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      
      <Routes>
          <Route path='/' element={<BlogPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
