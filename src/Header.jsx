import {React} from 'react';

export function Header(){

    return(
        <>
         <div className= 'header'>
      <nav>
        <h1>Volunteer app</h1>
        <ul className='nav-links'>
          <li><a>home</a></li>
          <li>logout</li>
        </ul>
      </nav>
      </div>
        </>       
    )
}
