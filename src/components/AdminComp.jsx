import './AdminComp.css';
import { Form } from 'react-router-dom';
import {Link, Route, Routes} from 'react-router-dom';

export default function AdminComp() {

    return (
        <>
        <div className='App'>
        <div className="options">
                <button><Link to='/admin/managevolunteers' className='link'><b>Manage volunteers</b></Link></button>
                <button><Link to='/' className='link'><b>Manage oppprtunities</b></Link></button>
            </div>
        </div>
        </>
    )
}