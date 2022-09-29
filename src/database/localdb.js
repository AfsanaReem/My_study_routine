const addCourseToDb = id => {
    let addedCourse = {};

    const storedCourse = localStorage.getItem('added-course');

    if (storedCourse) {
        addedCourse = JSON.parse(storedCourse);
    }
    const courses = addedCourse[id];
    if (courses) {
        const newCourse = courses + 1;
        addedCourse[id] = newCourse;
    }
    else {
        addedCourse[id] = 1;
    }

    localStorage.setItem('added-course', JSON.stringify(addedCourse));
}

const addTimeToDB = time => {
    localStorage.setItem('breakTime', time)
    return time;
}

const setStoredTime = (addedTime) => {
    localStorage.setItem('addedTime', addedTime);
    return addedTime;
}
const getStoredTime = localStorage.addedTime;
const getBreakTime = localStorage.breakTime;
const getStoredCourse = () => {
    let addedCourse = {};
    const storedCourse = localStorage.getItem('added-course');
    if (storedCourse) {
        addedCourse = JSON.parse(storedCourse);
    }
    return addedCourse;
}
export {
    addCourseToDb, addTimeToDB, getStoredCourse, setStoredTime, getStoredTime, getBreakTime
}