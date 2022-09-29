import React, { useEffect, useState } from 'react';
import Courses from './Courses';
import './Home.css'
import Sidebar from './Sidebar';
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [addedTime, setAddedTime] = useState(0);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const addToListButton = course => {
        let newAddedTime = addedTime + course.time;
        setAddedTime(newAddedTime);
    }
    return (
        <div className='home-container'>
            <div className='main-container'>
                <div className='logo'>
                    <img src='study.png' alt=''></img>
                    <div className='title'>
                        <h2>My Study Routine</h2>
                        <h4>Select Today's Subject</h4>
                    </div>
                </div>
                <div className='courses'>
                    {
                        courses.map(course => <Courses
                            course={course}
                            key={course.id}
                            addToListButton={addToListButton}
                        ></Courses>)
                    }
                </div>
            </div>
            <div className='sidebar-container'>
                <Sidebar addedTime={addedTime}></Sidebar>
            </div>

        </div>
    );
};

export default Home;