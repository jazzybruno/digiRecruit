import HomePage from "./pages/HomePage";
import Forms from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import { BrowserRouter , Route , Routes } from "react-router-dom";


const App : React.FC = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage/>} />
  <Route path="/login" element={<Forms/>} />
  <Route path="/signup" element={<Signup />} />
</Routes>
</BrowserRouter>

  )
}

export default App;
