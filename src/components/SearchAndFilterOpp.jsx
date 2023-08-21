import { useEffect, useState } from 'react';

export default function SearchAndFilterOpp() {

    return (
        <form>
            <div className='adminheader'>
                <div className="input-group mb-3">
                    <button type="button" className="btn btn-outline-secondary">Search</button>
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Most recent</a></li>
                        <li><a className="dropdown-item" href="#">Approved</a></li>
                    </ul>
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                </div>
            </div>

        </form>

    )
}
