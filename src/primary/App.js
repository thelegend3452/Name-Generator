import '../style/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Nameorder from "./Nameorder";

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/Main">Name Generator</Link>
                <Link to="/Nameorder">Name Order</Link>
            </nav>

            <Routes>
                <Route path="/Main" element={<Main />} />
                <Route path="/Nameorder" element={<Nameorder />} />
            </Routes>
        </Router>
        

    )
}
export default App;
