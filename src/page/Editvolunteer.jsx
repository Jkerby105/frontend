import { useParams } from "react-router"
import {Link} from 'react-router-dom'

//when user clicks edit volunterr next to name
export default function Editvolunteer() {
    const { id } = useParams
    //edit students same page design as add/ include autofill data... tbd
    return (
        <>
            <div className="card">
                <div className='col-md 12'>
                    <div className="card-header">
                        <h4>Edit volunteer
                            <Link to='/admin/managevolunteers' className='btn btn-warning float-end'>Back</Link>
                        </h4>
                    </div>
                    <div className='card-body'>
                        <div className="form-control-sm">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label for='firstName' class='form-label'>First name</label>
                                        <input type='text' class='form-control' id='firstname' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label for='lasttName' class='form-label'>Last name</label>
                                        <input type='text' class='form-control' id='lastname' />
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label htmlFor='usernamer' className='form-label'>Username</label>
                                        <input type='text' class='form-control' id='username' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label for='password' class='form-label'>Password</label>
                                        <input type='password' class='form-control' id='password' />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">

                                <label for='work' class='form-label'>Preffered Center</label>
                                <input type='text' class='form-control' id='work' />
                            </div>
                            <div className="mb-3">

                                <label for='skills' class='form-label'>Skills/Interests</label>
                                <input type='text' class='form-control' id='skills' />
                            </div>


                            <div className="mb-3">
                                <label for='time' class='form-label'>days and time available</label>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="firstCheckboxStretched">Sunday</label>

                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="secondCheckboxStretched">Monday</label>
                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Tuesday</label>

                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="fourthCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="fourthCheckboxStretched">Wednesday</label>

                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="fifthCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="fifthCheckboxStretched">Thursday</label>

                                    </li>
                                    <input type="time" className='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="sixCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="sixCheckboxStretched">Friday</label>

                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                    <li class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox" value="" id="sevenCheckboxStretched" />
                                        <label class="form-check-label stretched-link" for="sevenCheckboxStretched">Saturday</label>

                                    </li>
                                    <input type="time" class='form-control' id="appt" />
                                </ul>
                            </div>
                            <div className="mb-3">

                                <label htmlFor='address' class='form-label'>Address</label>
                                <input type='text' class='form-control' id='address' />
                            </div>

                            <div className="mb-3">

                                <label htmlFor="phone" className="form-label">Enter a phone number:</label>
                                <input type="tel" className="form-control" id="phone" name="phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                <small>Format: 123-451-6781</small>
                            </div>

                            <div className="mb-3">

                                <label htmlFor='email' class='form-label'>Email</label>
                                <input type='email' class='form-control' id='email' />
                            </div>

                            <div class="mb-3">
                                <label htmlFor="TextInput" class="form-label">Enter school name</label>
                                <input type="text" id="TextInput" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="Select" class="form-label">Select highest completed education</label>
                                <select id="Select" class="form-select">
                                    <option>High school/GED</option>
                                    <option>Associate degree</option>
                                    <option>Bachelors degree</option>
                                    <option>Masters degree</option>
                                    <option>Doctorate/Professional degree</option>

                                </select>
                            </div>

                            <div className="mb-3">

                                <label htmlFor='licenses' class='form-label'>licenses</label>
                                <input type='text' class='form-control' id='licenses' />
                            </div>

                            <div className="mb-3">

                                <label htmlFor='contacts' class='form-label'>Emergency contact name</label>
                                <input type='text' class='form-control' id='contact' />
                            </div>

                            <div className="mb-3">

                                <label htmlFor='contacts-phone' class='form-label'>Emergency contact phone</label>
                                <input type="tel" className="form-control" id="contacts-phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            </div>

                            <div className="mb-3">

                                <label htmlFor='address' class='form-label'>Emergency contact Address</label>
                                <input type='text' class='form-control' id='contact-address' />
                            </div>

                            <div class="mb-3">
                                <label for="Select" class="form-label">copy  of volunteer file</label>
                                <select id="Select" class="form-select">
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="Select" class="form-label">copy  of volunteer social security card</label>
                                <select id="Select" class="form-select">
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="Select" class="form-label">Approval status</label>
                                <select id="Select" class="form-select">
                                    <option>Approved</option>
                                    <option>Pending</option>
                                    <option>Disapproved</option>
                                    <option>Inactive</option>
                                </select>
                            </div>


                            <button type='button' className="btn btn-success">Submit</button>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}