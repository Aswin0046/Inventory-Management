import React from "react";
import { Link } from "react-router-dom";
import MovementForm from "./MovementForm";
import './front.css';

const FrontPage = () => {
    return (
        <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

            <header className="welcome-header text-center bg-primary text-white py-5">
                <h1>Welcome!</h1>
            </header>

            <main className="welcome-content text-center py-4">
                <p>Inventory Management.</p>
            </main>

            <Link to={'/movements/add'} className="d-block text-center mt-3">
                <button className="welcome-button btn btn-lg btn-primary">Click Me!</button>
            </Link>
        </>
    );
}

export default FrontPage;
