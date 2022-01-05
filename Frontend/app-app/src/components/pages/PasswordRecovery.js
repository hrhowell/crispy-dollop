import React from 'react';
import Navbar from '../Navbar';
import './PasswordRecovery.css';

function PasswordRecovery() {
    return (
        <>
        <Navbar/>
            <div className="passwordrecovery">
                <form>
                <label>Email:</label>
                <input
                    type="text"
                    required
                />
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default PasswordRecovery
