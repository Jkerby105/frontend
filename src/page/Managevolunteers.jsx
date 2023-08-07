import {React} from 'react';
import ManageVolComp from '../components/ManageVolComp';
import { useLoaderData } from 'react-router-dom';

export function Managevolunteers(){

  const holdData = useLoaderData();

    return(
       <ManageVolComp value={holdData}/>
    )
}


export async function volunteerLoader(){

  console.log("IN");

  const response = await fetch('http://localhost:3001/volunteer', {
    headers: {
      'Content-Type': 'application/json' 
    }
  });

  const data = await response.json();
   return data

}