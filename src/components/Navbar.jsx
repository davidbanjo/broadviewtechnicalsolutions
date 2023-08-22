import PrimaryBtn from "./buttons/PrimaryBtn"

const Navbar = () => {
    return (
        <div className="bts_navbar_container">
            <div className="bts_navbar_row">
                <div className="bts_logo">
                    <img src="/img/broadview_logo.png" alt="logo" />
                </div>
            </div>
            <div className="bts_navbar_row">
                <div className="bts_navbar_menu">
                    <ul className="bts_navitems">
                        <li className="bts_navitem">Home</li>
                        <li className="bts_navitem">About Us</li>
                        <li className="bts_navitem">Services</li>
                        <li className="bts_navitem">Portfolio</li>
                        <li className="bts_navitem">Blog</li>
                        <li className="bts_navitem">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="bts_navbar_row">
                <div className="bts_navbar_btn">
                    <PrimaryBtn value="Free Consultation" />
                </div>
            </div>
            {/* <h2>Navbar</h2> */}
        </div>
    )
}

export default Navbar