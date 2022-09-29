const addToDb = id => {
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
    localStorage.setItem('break-time', time)
}
export {
    addToDb, addTimeToDB
}