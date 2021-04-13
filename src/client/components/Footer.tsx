import * as React from "react";
import Fb from "./Svg/FB";
import Linked from "./Svg/Linked";
import Twit from "./Svg/Twit";
import Insta from "./Svg/Insta";
import Pint from "./Svg/Pint";
import Vulc from "./Svg/Vulc";

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="col-12 d-flex flex-column justify-content-center align-items-center p-3 shadow mb-2">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/visitvulcan/" target="_blank">
            <Insta />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.facebook.com/visitvulcan" target="_blank">
            <Fb />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://twitter.com/VisitVulcan" target="_blank">
            <Twit />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/company/vulcan-park-and-museum/" target="_blank">
            <Linked />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.pinterest.com/visitvulcan/" target="_blank">
            <Pint />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://visitvulcan.com/" target="_blank">
            <Vulc />
          </a>
        </li>
      </ul>

      <h6 className="card-title  text-center">
        Team1 Production<span>&#169;</span>2021
      </h6>
      <h6 className="card-title  text-center">
        Brought to you by Innovate BHAM
      </h6>
      <h6 className="card-title text-center">
        If you like what you see contact us.
      </h6>

      <p>
        <a
          href="https://www.linkedin.com/in/gabrielaustin/" target="_blank"
          className="card-link"
        >
          {" "}
          linkedin.com/in/gabrielaustin/
        </a>
        <a
          href="https://www.linkedin.com/in/justin-kelley-193a04203" target="_blank"
          className="card-link"
        >
          {" "}
          linkedin.com/in/justin-kelley-193a04203
        </a>
        <a
          href="https://www.linkedin.com/in/shannon-ritenour/" target="_blank"
          className="card-link"
        >
          {" "}
          linkedin.com/in/shannon-ritenour/
        </a>
        <a
          href="https://www.linkedin.com/in/josephinekilcullen9/" target="_blank"
          className="card-link"
        >
          {" "}
          linkedin.com/in/josephinekilcullen9/
        </a>
        <a
          href="https://www.linkedin.com/in/heather-thomas-a6747087" target="_blank"
          className="card-link"
        >
          {" "}
          linkedin.com/in/heather-thomas-a6747087
        </a>
      </p>
    </footer>
  );
};

interface FooterProps {}

export default Footer;
