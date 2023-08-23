import React from 'react'
import { redirect, Form, useLoaderData} from "react-router-dom";
import { tokenLoader } from '../../util/authentication';

export function EditEmergency() {
   
    const data = useLoaderData();

    return (

        <div className="card">
        <Form method="POST" action={`/admin/managevolunteers/editContact/${data[0][0].EContactID}`}>
          <div className="form-control-sm">


          <div className="mb-3">
                    <label htmlFor='contacts' className='form-label'>Emergency contact First Name</label>
                    <input type='text' className='form-control' id='contact' name='emergencyFirstName' defaultValue={data[0][0].Fname} />
                </div>


                <div className="mb-3">
                    <label htmlFor='contacts' className='form-label'>Emergency contact Last Name</label>
                    <input type='text' className='form-control' id='contact' name='emergencyLastName' defaultValue={data[0][0].Lname}/>
                </div>

                <div className="mb-3">
                      <label htmlFor='email' className='form-label'>Emergency contact Email</label>
                        <input type='email' className='form-control' id='email' name='emergencyEmail' defaultValue={data[0][0].Email} />
                </div>

                <div className="mb-3">

                    <label htmlFor='contacts-phone' className='form-label'>Emergency contact phone</label>
                    <input type="tel" className="form-control" id="contacts-phone" name='emergencyPhone' placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue={data[0][0].Phone_Number} required />
                </div>

                <div className="mb-3">

                    <label htmlFor='address' className='form-label'>Emergency contact Address</label>
                    <input type='text' className='form-control' id='contact-address' name='emergencyAddress' defaultValue={data[0][0].Address} />
                </div>


            </div>
            <button type='submit' className="btn btn-success">Submit</button>
            </Form>
            </div>
    )
}

export async function loader({request, params}){
    const id = params.id;
    const token = tokenLoader();
    const response = await fetch("http://localhost:3001/emergency/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      return data;
    }
}

export async function action({request,params}){
    const id = params.id;
  const data = await request.formData();

  const info = {
    ID : id,
    EmergencyFirstName: data.get('emergencyFirstName'),
    EmergencyLastName: data.get('emergencyLastName'),
    EmergencyEmail: data.get('emergencyEmail'),
    EmergencyPhone: data.get('emergencyPhone'),
    EmergencyAddress: data.get('emergencyAddress'),
  }

  const token = tokenLoader();

  const response = await fetch("http://localhost:3001/emergency/Edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    return redirect("/admin/managevolunteers");
  }
}