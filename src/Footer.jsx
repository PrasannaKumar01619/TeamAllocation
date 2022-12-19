import React from "react";

const Footer = ({date}) => {
    return (
        <footer className="container footer">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <h3><i>Team Allocation App - {date}</i></h3>
                </div>

            </div>

        </footer>
    )
}

export default Footer;