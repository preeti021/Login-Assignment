import React from 'react'
import Row from './DashboardRow/Row'
import './DashboardRow/Row.css'
import './Dashboard.css';

const dashboard = props => {

    return <div className="Dashboard">
        <h2>USER DASHBOARD</h2>
        <table >
            <tbody>
                <tr>
                    <th> ID</th>
                    <th> NAME</th>
                    <th> AGE</th>
                    <th> Gender</th>
                    <th> Email</th>
                    <th> Phone</th>
                </tr>
                <Row className="Row" />
            </tbody>
        </table>
    </div>
}
export default dashboard;