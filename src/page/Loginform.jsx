import LoginComp from '../components/loginComp';
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

export function Loginform() {

    return  (
        <LoginComp/>
    )
}



export async function action({request,res}){
  
 
    
    // request.formData()
    // .then(data => {

    //   const holdData = {
    //   username: data.get('username'),
    //   password: data.get('password'),
    //    }
    //    console.log(holdData);
       
    //   axios.post('http://localhost:3001/login', {holdData});

    // })
    // .catch(err => console.log(err));



    const data = await request.formData();

    // const holdData = {
    //   username: data.get('username'),
    //   password: data.get('password'),
    // }


    // const holdData = {
    //   username: sdsd,
    //   password: ssdsd,
    // }

    // console.log(holdData);



   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - \\




    // const tempid = 6;

    // const response = await fetch(`http://localhost:3001/voulnteer`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json', 
    //   },
    //   body: JSON.stringify(vol)
    // });

    // const vol = {
    //   fname: 'jake',
    //   lname: 'chris',
    //   edit: false,
    //   id: null
    // }
    const val = {
      user: 'Admin',
      password: 'Rally99'
    }

   

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(val),
      credentials: 'include'
    });

        console.log("door");

        const d = await response.json();
         if(d.Status === "Success"){
                alert("ok");
         }else{
              alert(d.Message);
         }


          

      

  }