import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Bmi from './screens/Bmi';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Homescreen from './screens/Homescreen';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      {/* <Navbar /> */}


      <Router>
        <Header />
        <Route exact path='/' component={Homescreen} />
        <Route exact path='/bmi' component={Bmi} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        {/* <Route exact path='/about' component={About} /> */}
        <Footer />
      </Router>

      {/* <Homescreen /> */}
      {/* <Bmi /> */}

    </div>
  );
}

export default App;
