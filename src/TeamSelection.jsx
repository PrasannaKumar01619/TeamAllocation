import React from "react";

function TeamSelection({team,handleTeamChange}) {
    return (
        
                <select className="form-select form-select-lg mt-2 mb-3" value={team} onChange={handleTeamChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
        
    )
}

export default TeamSelection;