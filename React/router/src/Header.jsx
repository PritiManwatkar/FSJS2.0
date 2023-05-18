import { Link, } from "react-router-dom";

const Header = () => {
    return (
      <>
      <header>
        {/*Navigation Menu*/}
        <nav>
            {/*Logo Area*/}
            <div className="logo">LOGO</div>
            {/*Navigation Links*/}
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
            {/*Search Area*/}
            <div className="search-field">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </nav>
      </header>
    </>
    );
  };
  
  export default Header;
  