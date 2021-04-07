import * as React from 'react';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav className="navbar navbar-dark">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Home</a>
                        <a className="dropdown-item" href="#">Vulcedex</a>
                    </div>
            </div>
        </nav>
    );
}

interface NavBarProps {}

export default NavBar;   