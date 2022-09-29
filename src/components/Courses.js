import React from 'react';
import './Courses.css'
const Courses = ({ course, addToListButton }) => {

    const { img, title, name, time } = course;
    return (
        <div className='course'>
            <img src={img} alt=''></img>
            <div className="course-info">
                <p className="course-name">{name}</p>
                <p>Title: {title}</p>
                <p>Time: {time} hr</p>
            </div>
            <button onClick={() => addToListButton(course)} className='add-button'><p>Add to List</p></button>
        </div>
    );
};

export default Courses;