
import { Router, Route, Routes,Switch, Redirect } from "react-router-dom";
// import BeneficialOwners from "./App/Auth/Signup/BusinessAccount/Steps/BeneficialOwners";
// import BusinessDetails from "./App/Auth/Signup/BusinessAccount/Steps/BusinessDetails";
// import OfficerDetails from "./App/Auth/Signup/BusinessAccount/Steps/OfficerDetails";
import DetailsPage from './containers/detailsPage/DetailspPage';
import App from "./App";
function AppRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/details" element={<DetailsPage />}/>
    
      
     
    </Routes>
  </Router>
  );
}

export default AppRoutes;
