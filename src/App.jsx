import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import AddUser from "./AddUser";
import EditUser from "./EditUser";


function App(){  
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
