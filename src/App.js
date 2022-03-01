import './App.css';
import Nav from './component/Nav.jsx'
import Container from '@mui/material/Container';
import Home from './component/Home';
import Router from './Router';
import Card from './component/Card';
function App() {
  return (
    <>
      <Nav />

      <Container maxWidth="xl" className='body' style={{background:'rgb(54, 53, 53)'}}>
      <Router />
      </Container>
    </>
  );
}

export default App;
