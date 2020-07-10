import React from 'react';
import './App.css';
import Typeof from './Typeof';
import Banner from './Banner';
import Menu from './Menu';
import Skills from './Skills';
import Container from '@material-ui/core/Container';
import ListOfSkills from './ListOfSkills';
import ManagementCourse from './CoursePage/ManagementCourse';


function App() {
  return (
    <div className="App">
      <Container >
              <ManagementCourse/>
          
                  
                  {/*<Skills/>*/}
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>*/}
      
      </Container>
    </div>
  );
}

export default App;
