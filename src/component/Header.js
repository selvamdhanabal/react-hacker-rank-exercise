import React, {Fragment} from 'react';
import { useLocation, Link } from 'react-router-dom'

function Header() {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    let homeActive = '' ;
    let task1Active = '';
    let task2Active = '';
    const { pathname } = location;
    if(pathname === "/") {
        homeActive = 'active';
    } else if(pathname === "/task1") {
        task1Active = 'active';
    } else if(pathname === "/task2") {
        task2Active = 'active';
    }
  return <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><h2>Hacker Rank React Excerise</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-left" id="navbarNavAltMarkup">
            <div className="navbar-nav  ml-auto">
            <Link className={`nav-item nav-link ${homeActive}`} to="/"><h4>Home</h4><span className="sr-only">(current)</span></Link>
            <Link className={`nav-item nav-link ${task1Active}`} to="/task1"><h4>Task 1</h4></Link>
            <Link className={`nav-item nav-link ${task2Active}`} to="/task2"><h4>Task 2</h4></Link>
            </div>
        </div>
    </nav>
</Fragment>;
}

export default Header;
