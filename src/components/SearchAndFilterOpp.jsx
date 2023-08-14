import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';
import { useEffect, useState } from 'react';

export default function SearchAndFilterOpp(){

    return(
        <form>
        <div className='adminheader'>
            <InputGroup className="mb-3">
                <SplitButton
                    variant="secondary" //changes color/style of button
                    title="Submit"
                    id="segmented-button-dropdown-2"
                    autoClose='outside' //how the button reacts to user clicks
                    type='submit'
                >    
                    <Dropdown.Item as='button'>
                        <Form.Check type='checkbox' label='Most recent' />
                    </Dropdown.Item>
                    <Dropdown.Item as='button'>
                        <Form.Check type='checkbox' label='Approved' />
                    </Dropdown.Item>

                </SplitButton>
                <Form.Control aria-label="Text input with dropdown button" placeholder="Search" />
            </InputGroup>
    </div>

    </form>
    
    )
}