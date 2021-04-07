import * as React from 'react';
import Fb from './Svg/FB';
import Linked from './Svg/Linked';
import Twit from './Svg/Twit';
import Insta from './Svg/Insta';
import Hash from './Svg/Hash';

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer className="col-12 d-flex flex-column justify-content-center align-items-center">
        <h6 className="text-info text-center">Team1 Production 2021</h6>
        
        <li className="nav-item">
            <a className="nav-link" href="#">
                 <Hash />
             </a>
        </li>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Insta />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Fb />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Twit />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Linked />
                    </a>
                </li>
            </ul>         
        </footer>
    );
}

interface FooterProps {}

export default Footer; 