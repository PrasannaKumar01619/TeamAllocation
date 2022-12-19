import React from "react";
import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";


const Employees = ({employees,team,handleTeamChange,handleClick}) => {

    

   
    return (
        <div className="container employees" >

            <div className="row justify-content-center mt-3">
                <div className="col-lg-6 col-md-8 col-sm-8">
                    <select className="form-select form-select-lg mt-2 mb-3" value={team} onChange={handleTeamChange}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>
            </div>
            <div className="row  justify-content-center  mt-2 " >
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="gridCard mb-4 ">
                        {employees.map((employee) => (
                            <div key={employee.id} id={employee.id}  className={(employee.teamName === team ? "gridCard  card standOut":" gridCard card")} onClick={handleClick}>
                                <img src= {employee.gender === "male" ? maleProfile : femaleProfile} className="card-img-top " alt="gender"/>
                                <div className="card-body">
                                    <h5 className="card-title">Full Name : {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation :</b> {employee.designation}</p>

                                </div>

                            </div>
                        )

                        )}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Employees; 