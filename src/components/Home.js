import React, { useEffect, useState } from 'react';
import Courses from './Courses';
import './Home.css'
import Sidebar from './Sidebar';
const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='home-container'>
            <div className='main-container'>
                <div className='title'>
                    <h1>My Study Routine</h1>
                    <h3>Select Today's Subject</h3>
                </div>
                <div className='courses'>
                    {
                        courses.map(course => <Courses
                            course={course}
                            key={course.id}
                        ></Courses>)
                    }
                </div>
            </div>
            <div className='sidebar-container'>
                <Sidebar></Sidebar>
            </div>

        </div>
    );
};

export default Home;