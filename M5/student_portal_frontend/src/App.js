import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarMain from "./components/NavBarMain";
import BackOffice from "./components/BackOffice";
import { Route } from "react-router-dom";
import NewStudentForm from "./components/NewStudentForm";
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBarMain />
      <Container className="mt-4">
        <Route exact path="/" render={ (props)=><BackOffice {...props}/>}/>
        <Route
          eaxct
          path="/student-form/:id"
          render={(props) => <NewStudentForm {...props} />}/>
      </Container>
    </div>
  );
}

export default App;
