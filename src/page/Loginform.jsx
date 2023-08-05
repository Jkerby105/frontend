import LoginComp from '../components/loginComp';
import axios from 'axios';

export function Loginform() {

    return  (
        <LoginComp/>
    )
}



export async function action({request,res}){


    const data = await request.formData();

    const holdData = {
      username: data.get('username'),
      password: data.get('password'),
    }

    console.log(holdData);

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body:  JSON.stringify(holdData),
    });
    
    console.log(response);

  }