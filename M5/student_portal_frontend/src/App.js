import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBarMain from "./components/NavBarMain";
import BackOffice from "./components/BackOffice";
import { Route } from "react-router-dom";
import NewStudentForm from "./components/NewStudentForm";
import { Container } from "react-bootstrap";
import StudentProfile from "./components/StudentProfile";
import NewProjectForm from "./components/NewProjectForm";

function App() {
  return (
    <div className="App">
      <NavBarMain />
      <Container className="mt-4">
        <Route exact path="/" render={(props) => <BackOffice {...props} />} />
        <Route
          eaxct
          path="/student-form/:id"
          render={(props) => <NewStudentForm {...props} />}
        />
        <Route
          eaxct
          path="/student/:id/"
          render={(props) => <StudentProfile {...props} />}
        />
        <Route
          eaxct
          path="/project-form/:id/:studentID"
          render={(props) => <NewProjectForm {...props} />}
        />
      </Container>
    </div>
  );
}

export default App;
