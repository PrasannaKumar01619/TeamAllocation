import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Employees from "./Employees";
import CustomizedTables from "./GroupedTeams";
import Nav from "./Nav";
import NotFound from "./NotFound";


function App() {
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])

    const [team, setTeam] = useState(JSON.parse(localStorage.getItem("teamName")) || "TeamA");

    function handleTeamChange(event) {
        // console.log(event.target.value)
        setTeam(event.target.value)
    };

    function handleClick(event) {
        // console.log(event.currentTarget.id);
        const transFormedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
            (employee.teamName === team) ?
                { ...employee, teamName: "" } : { ...employee, teamName: team } : employee);

        const teamAllocation = Object.values((transFormedEmployees.reduce((obj, { teamName }) => {
            if (obj[teamName] === undefined) {
                obj[teamName] = { count: 1 };
            } else {
                obj[teamName].count++;
            }
            return obj;
        }, {})))
        const countArray = teamAllocation.map(i => i.count);
        const indexOF = (arr) => {
            if (arr.some((e) => e > 6)) {
                return (1);
            } else {
                return (-1);
            }
        }
        const index = indexOF(countArray);
        if (index === 1) {
            alert("Only 6 members per Team")
        } else {
            setEmployees(transFormedEmployees);
        }

        console.log(teamAllocation);
        console.log(countArray);
        console.log(indexOF(countArray));
        console.log(employees);

    };

    const date = new Date();
    // console.log(employees);

    useEffect(() => {
        localStorage.setItem("employeeList", JSON.stringify(employees))
    }, [employees]);

    useEffect(() => {
        localStorage.setItem("teamName", JSON.stringify(team))
    }, [team]);
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Header team={team} teamMemberCount={employees.filter((employee) => employee.teamName === team).length} />
                <Routes>
                    <Route path="/" element={
                        <Employees employees={employees} team={team} handleTeamChange={handleTeamChange} handleClick={handleClick} />
                    }>

                    </Route>
                    <Route path="/CustomizedTables" element={
                        <CustomizedTables  employees={employees}/>
                    }>

                    </Route>

                </Routes>

                <Footer date={date.getFullYear()} />

            </BrowserRouter>
            
        </>




    )
}

export default App;