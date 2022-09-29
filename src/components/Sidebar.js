import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTimeToDB, getBreakTime } from '../database/localDb';
import './Sidebar.css';

// toast.configure();
const Sidebar = ({ addedTime }) => {
    const storedBreakTime = getBreakTime;
    const [breakTime, setBreakTime] = useState(storedBreakTime);
    const breakButton = time => {
        setBreakTime(time);
        addTimeToDB(time);
    }
    const notify = () => toast("Wow so easy!");
    return (
        <div className='side-component'>
            <div className='my-info'>
                <img src='women.png' alt=''></img>
                <h4>Afsana Rahman <small>BSc in CSE</small></h4>
            </div>
            <div className='credit-info'>
                <h4>136 <small>Credit</small></h4>
                <h4>3.06 <small>CGPA</small></h4>
                <h4>4 <small>Years</small></h4>
            </div>
            <h3>Add A Break</h3>
            <div className='break'>
                <button onClick={() => breakButton(10)}>10min</button>
                <button onClick={() => breakButton(20)}>20min</button>
                <button onClick={() => breakButton(30)}>30min</button>
                <button onClick={() => breakButton(40)}>40min</button>
            </div>
            <h3>Study Details</h3>
            <h4 className='header4'>Study Time: {addedTime}hr</h4>
            <h4 className='header4'>Break Time: {breakTime}min</h4>
            <button onClick={notify} className='toast-button'>Study Complete</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Sidebar;