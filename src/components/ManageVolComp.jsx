import { React } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchAndFilter from './SearchAndFilter'
import './ManageVolComp.css'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ConfirmDelete from './ConfirmDelete'


export function ManageVolComp(props) {

   const[active,setActive] = useState(false);

   const data = props.value;

   function pop(){
        setActive(true);
   }


   function reverserPop(){
        setActive(false);
   }

    // const [loading, setLoading] = useState(true)
    // const [volunteers, setVolunteers] = useState([])
    
    
    // if(loading){
    //     return(
    //     <div>Loading..</div>
    //     )
    // }

  

    return (
        <>
        <SearchAndFilter/>
                {active && <ConfirmDelete value={active} reverse={reverserPop} />}
    
                <div className='container'>
                    <div className='col-md 12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>
                                    Manage volunteers
                                    <Link to='/admin/managevolunteers/add' className='btn btn-primary float-end'>Add Volunteer</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First name</th>
                                            <th>Last name</th>
                                            <th>Opportunities</th>
                                            <th>Approval status</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map ((item) => (
                                                <tr key={item.VolunteerID}>
                                                    <td>{item.VolunteerID}</td>
                                                    <td>{item.Fname}</td>
                                                    <td>{item.Lname}</td>
                                                    <td>yes</td>
                                                    <td>{item.Approval_Status}</td>
                                                    <td>
                                                    <Link to='/' className='btn btn-success'>Edit</Link>
                                                    </td>
                                                    <td>
                                                    <button onClick={pop} className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ManageVolComp