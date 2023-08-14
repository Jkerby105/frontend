import {React} from 'react';
import ManageVolComp from '../components/ManageVolComp';
import { json, redirect, useLoaderData } from 'react-router-dom';

export function Managevolunteers(){

  const holdData = useLoaderData();

    return(
       <ManageVolComp value={holdData}/>
    )
}


export async function loader(){

  const response = await fetch('http://localhost:3001/volunteer', {
    headers: {
      'Content-Type': 'application/json' 
    }
  });



  const data = await response.json();

   return data

}

export async function action({request,parms}){
    const val= await request.formData();
  
        console.log("object");
        const cc = val.get('val');
        console.log(cc);

    
    const response  = await fetch('http://localhost:3001/voulnteer/' + cc,  {
          method: 'Delete',
          headers: {
            'Content-Type' : 'application/json'
          },
          
    });

    console.log(response);

      if(response.ok){
        
        return redirect('/admin/managevolunteers');
      }


}