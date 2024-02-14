import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { PAGE_ROUTES, STORAGE_KEYS } from '../utils/constants/common-constants';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AppNavbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    const parsedUserData = userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : null;

    if (parsedUserData) {
      setUserData(parsedUserData);
    } else {
      handleLogout();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate(PAGE_ROUTES.LOGIN);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Tast Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={PAGE_ROUTES.HOME}>Home</Nav.Link>
            <Nav.Link href={PAGE_ROUTES.TASKS}>Tasks</Nav.Link>
            <Nav.Link href={PAGE_ROUTES.USERS}>Users</Nav.Link>
          </Nav>
          <Nav>
            <p className='m-0 text-white d-flex justify-content-center align-items-center'>
              Hello <strong className='ms-1'>{userData?.name || ''}</strong>!
            </p>
            <Button variant='primary' size='sm' className='ms-3' onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;