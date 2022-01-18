import react, {Component} from "react";
import "./App.css"
import LandigPage from "./components/pages/LandingPage";




class App extends Component {
    render(){
        return(
            <div className="App">
                <LandigPage/>
            </div>
        );
    }
}

export default App