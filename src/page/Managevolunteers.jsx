import {React} from 'react';
import ManageVolComp from '../components/ManageVolComp';

export function Managevolunteers(){

    return(
       <ManageVolComp/>
    )
}


export async function getVolunteer(){

  const response = fetch('/volunteer', {
       headers: 'Content-Type',
  });


  data = await response.json();




}