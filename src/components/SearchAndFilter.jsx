import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import { useEffect, useState } from 'react';
import './SearchAndFilter.css'
import { async } from 'q';

export function SearchAndFilter() {
    //fetch api data based on user input if not found return null / 'no users'
    const [loading, setLoading] = useState(true)
    const [input, setinput] = useState('')
    const [volunteers, getVolunteers] = useState([])

    //usEffect function
    // useEffect(() =>{
    //     const fetchData = async () =>{

    //     }
    // })


//load page
    // if(loading){
    //     return(
    //         <div>Loading..</div>
    //     )
    // }

    //mapping for data ????
    // var VolunteerSearch = '';
    // VolunteerSearch = volunteers.map ((item, index) =>{
    //     return(
    //         <tr key={index}>
    //             <td>{item.id}</td>
    //             <td>{item.first}</td>
    //             <td>{item.last}</td>
    //             <td>{item.opportunities}</td>
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
        <form>
            <div className='adminheader'>
                <InputGroup className="mb-3">
                    <SplitButton
                        variant="secondary" //changes color/style of button
                        title="Submit"
                        id="segmented-button-dropdown-2"
                        autoClose='outside' //how the button reacts to user clicks
                        type='submit'
                    >
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='Approved/Pending' />
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='Approved' />
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='Pending' />
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='Disapproved' />
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='Inactive' />
                        </Dropdown.Item>
                        <Dropdown.Item as='button'>
                            <Form.Check type='checkbox' label='All' />
                        </Dropdown.Item>

                    </SplitButton>
                    <Form.Control aria-label="Text input with dropdown button" placeholder="Search" />
                </InputGroup>
        </div>

        </form>
        
    )
}

export default SearchAndFilter