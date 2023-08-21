import { useEffect, useState } from 'react';
import './SearchAndFilter.css'

export function SearchAndFilter({ setResults, onSearch,filter, setFilter }) {
    // { onSearchResults }
    //fetch api data based on user input if not found return null / 'no users'
    const [query, setQuery] = useState('')
    //for checkbox filters state checked(true) or unchecked (false)
    


    const input = () => {
        console.log(query)
    }

        //for search bar to filter by fname,lname, and ID
    useEffect(() => {
        fetch('http://localhost:3001/volunteer')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => {
                    return (
                        String(item.VolunteerID).includes(query) ||
                        item.Fname.toLowerCase().includes(query.toLowerCase()) ||
                        item.Lname.toLowerCase().includes(query.toLowerCase())
                    );
                });
                setResults(filteredData);
                onSearch();
            });
    }, [query]);


    const handleChange = (event) => {
        setFilter(prevState => ({
            ...prevState,
            [event.target.name]: event.target.checked
        }));
    };





    return (

        <div className='adminheader'>
            <div className="input-group mb-3">
                <button type="button" onClick={input} className="btn btn-outline-secondary">Search</button>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <label className="dropdown-item" label='Approved/Pending' ><input className='check' checked={filter.checkbox1} onChange ={handleChange}  name='checkbox1' type='checkbox' />Approved/Pending</label>
                    </li>
                    <li>
                        <label className="dropdown-item" label='Approved' ><input className='check' checked={filter.checkbox2}  onChange ={handleChange} name='checkbox2' type='checkbox' />Approved</label>
                    </li>
                    <li>
                        <label className="dropdown-item" label='Pending' ><input className='check' checked={filter.checkbox3}  onChange ={handleChange} name='checkbox3'  type='checkbox' />Pending</label>
                    </li>
                    <li>
                        <label className="dropdown-item" label='Disapproved' ><input className='check' checked={filter.checkbox4}  onChange ={handleChange} name='checkbox4'   type='checkbox' />Disapproved</label>
                    </li>
                    <li>
                        <label className="dropdown-item" label='Inactive' ><input className='check' checked={filter.checkbox5}  onChange ={handleChange} name='checkbox5' type='checkbox' />Inactive</label>
                    </li>
                    <li>
                        <label className="dropdown-item" label='All' ><input className='check'  checked={filter.checkbox6} onChange ={handleChange}  name='checkbox6' type='checkbox' />All </label>
                    </li>
                </ul>
                <input type="search" value={query} className="form-control" aria-label="Text input with segmented dropdown button" onChange={e => setQuery(e.target.value)} />
            </div>
        </div>



    )
}

export default SearchAndFilter