import React from 'react'
import dashboardPage from '../../resources/DashboardPage.json';

const row = props => {

    return dashboardPage.user.map(userdata => {
        return <tr key={userdata.id}>
            <td>{userdata.id}</td>
            <td>{userdata.name}</td>
            <td>{userdata.age}</td>
            <td>{userdata.gender}</td>
            <td>{userdata.email}</td>
            <td>{userdata.phoneNo}</td>
        </tr>
    })
}
export default row