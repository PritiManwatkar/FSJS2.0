import { Link, } from "react-router-dom";
const Footer = () => {
  return (
    <>
        {/*Footer Section*/}
        <footer>
            <p>Copyright © 2022 Harvi. All rights reserved.</p>
            {/*Adding all the social media icons*/}
            <ul>
                <Link to="/" target="_blank">
                    <li><i className="fa-brands fa-github"></i></li>
                </Link>
                <Link to="/" target="_blank">
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                </Link>
                <Link to="/" target="_blank">
                    <li><i className="fa-brands fa-instagram"></i></li>
                </Link>
            </ul>
        </footer>
    </>
  )
}

export default Footer
