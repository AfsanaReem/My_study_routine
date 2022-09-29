import React from 'react';
import './Courses.css'
const Courses = ({ course }) => {
    const { img, title, id, name, time } = course;
    return (
        <div className='course'>
            <img src={img} alt=''></img>
            <div className="course-info">
                <p className="course-name">{name}</p>
                <p>Title: {title}</p>
                <p><small>Time: {time}</small></p>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
    );
};

export default Courses;