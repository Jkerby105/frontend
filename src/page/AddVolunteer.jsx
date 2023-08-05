export default function Addvolunteer() {

    return (
        <>
            <div className="form">
                <div className="mb-3">

                    <label for='firstName' class='form-label'>First name</label>
                    <input type='text' class='form-control' id='firstname' />
                </div>
                <div className="mb-3">

                    <label for='lasttName' class='form-label'>Last name</label>
                    <input type='text' class='form-control' id='lastname' />
                </div>
                <div className="mb-3">

                    <label for='password' class='form-label'>Password</label>
                    <input type='password' class='form-control' id='password' />
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

                    <label htmlFor='skills' class='form-label'>Skills/Interests</label>
                    <input type='text' class='form-control' id='skills' />
                </div>



            </div>
        </>
    )
}