import React from "react";

const Header = ({ team, teamMemberCount }) => {
    return (
        <header className="container ">
            <div className="row justify-content-center mt-3 ">
                <div className="col-lg-6 col-md-6 col-sm-6 ">
                    <h1 className="mb-4"  style={{fontSize: "2rem",fontFamily:"'Times New Roman', Times, serif",fontWeight:"bolder"}} >Team Member Allocation</h1>
                    <h3 className="blockquote-footer">{team} has {teamMemberCount} Members</h3>
                </div>

            </div>

        </header>
    )
}

export default Header;