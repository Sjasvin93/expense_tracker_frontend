import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Expenses from "./pages/Dashboard/Expenses"
import Home from "./pages/Dashboard/Home"
import Income from "./pages/Dashboard/Income"
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expenses" exact element={<Expenses />} />
          </Routes>
        </Router>
      </div>

      <Toaster
        toastOptions={
          {
            className: "",
            style: {
              fontSize: '13px'
            }
          }
        }
      />
    </UserProvider>
  )
}

export default App;

const Root = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}
