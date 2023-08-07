import { React } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchAndFilter from './SearchAndFilter'
import './ManageVolComp.css'
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export function ManageVolComp() {
    // const [loading, setLoading] = useState(true)
    // const [volunteers, setVolunteers] = useState([])
    
    

    //useffect goes in here to fetch data
    // useEffect( ()=> {
    //     axios.get(paste api here).then(res =>{
                //console.log(res)
                //setVolunteers(res.data.volunteers);
                //setLoading(false)
    //     })

    // }, [])

    // if(loading){
    //     return(
    //     <div>Loading..</div>
    //     )
    // }

    // var VolunteerDetails = '';
    // VolunteerDetails = volunteers.map ((item, index) =>{
    //     return(
    //         <tr key={index}>
    //             <td>{item.id}</td>
    //             <td>{item.first}</td>
    //             <td>{item.last}</td>
    //             <td>{item.opportunities}</td>
    //             <td>{item.approval}</td>
    //             <td>
    //                 <Link to='/' className='btn btn-sucess'>Edit</Link>
    //             </td>
    //             <td>
    //                 <button className='bt tbn-danger'>Delete</button>
            
    //             </td>
    //         </tr>
    //     )

    // });


    return (
        <>
        <SearchAndFilter/>
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
                                        {/* {VolunteerDetails} */}

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