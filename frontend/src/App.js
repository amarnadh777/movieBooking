import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moviedetails from "./Pages/Moviedetails/Moviedetails";
import Bookticket from "./Pages/Bookticket/Bookticket";
import Seletseats from "./Pages/Selectseats/Seletseats";
import Bookingsummary from "./Pages/Bookingsummary/Bookingsummary";

function App() {
    return ( <
            div className = "App" >
            <
            BrowserRouter >
            <
            Routes >
            <
            Route path = "/"
            element = { < Homepage > < /Homepage>}> { " " } <
                /Route>{" "} <
                Route
                path = "/moviedetails/:movieid"
                element = { < Moviedetails > < /Moviedetails>} >
                    { " " } <
                    /Route>{" "} <
                    Route
                    path = "/bookticket/:movieid"
                    element = { < Bookticket > < /Bookticket>} >
                        { " " } <
                        /Route>{" "} <
                        Route path = "/selectseat"
                        element = { < Seletseats > < /Seletseats>}> { " " } <
                            /Route>{" "} <
                            Route
                            path = "/bookingsummary"
                            element = { < Bookingsummary > < /Bookingsummary>} >
                                { " " } <
                                /Route>{" "} <
                                /Routes>{" "} <
                                /BrowserRouter>{" "} <
                                /div>
                            );
                        }

                        export default App;