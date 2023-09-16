import React, { useEffect, useState } from 'react'
import SingleCard from '../SingleCard/SingleCard'
import CourseInfo from '../CourseInfo/CourseInfo';
import { toast } from 'react-hot-toast';



function Courses() {
    // const [courses, setCourses] = useState([]);
    // const [course, setCourse] = useState([]);
    // const [remaininghours, setRemaininghours] = useState(20);
    // const [hours, setHours] = useState();
    // const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleCourse = (item) => {
        const existingCourse = course.find((courseItem) => courseItem.title === item.title);
        if (existingCourse) {
            toast.error(<div>
                <h3 className="text-xl font-bold">You have already enrolled for {item.title}</h3>
            </div>);
        } else {
            const newCourse = ([...course, item]);

            const totalHours = newCourse.reduce((sum, course) => sum + course.creditsInHours, 0);
            const totalPrice = newCourse.reduce((sum, course) => sum + parseFloat(course.price.replace('$', '')), 0);

            if (totalHours > 20) {
                toast.error(<div>
                    <h3 className="text-xl font-bold">You have {remaininghours} credits</h3>
                </div>);
            } else {
                setCourse(newCourse);
                setHours(totalHours);
                setRemaininghours(remaininghours - item.creditsInHours);
                setTotalPrice(totalPrice)

            }
        }

    }

    const loadStateFromLocalStorage = () => {
        try {
            const coursesData = localStorage.getItem('courses');
            const courseData = localStorage.getItem('course');
            const remaininghoursData = localStorage.getItem('remaininghours');
            const hoursData = localStorage.getItem('hours');
            const totalPriceData = localStorage.getItem('totalPrice');

            if (coursesData && courseData && remaininghoursData && hoursData && totalPriceData) {
                return {
                    courses: JSON.parse(coursesData),
                    course: JSON.parse(courseData),
                    remaininghours: JSON.parse(remaininghoursData),
                    hours: JSON.parse(hoursData),
                    totalPrice: JSON.parse(totalPriceData),
                };
            }
        } catch (error) {
            // Handle errors when parsing or accessing local storage
            console.error('Error loading state from local storage:', error);
        }

        return {
            courses: [],
            course: [],
            remaininghours: 20,
            hours: undefined,
            totalPrice: undefined,
        };
    };

    const initialState = loadStateFromLocalStorage();
    const [courses, setCourses] = useState(initialState.courses);
    const [course, setCourse] = useState(initialState.course);
    const [remaininghours, setRemaininghours] = useState(initialState.remaininghours);
    const [hours, setHours] = useState(initialState.hours);
    const [totalPrice, setTotalPrice] = useState(initialState.totalPrice);


    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
        localStorage.setItem('course', JSON.stringify(course));
        localStorage.setItem('remaininghours', JSON.stringify(remaininghours));
        localStorage.setItem('hours', JSON.stringify(hours));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [courses, course, remaininghours, hours, totalPrice]);


    const courseDetails = {
        course,
        remaininghours,
        hours,
        totalPrice
    }

    const resetHandle = {
        setCourse,
        setHours,
        setRemaininghours,
        setTotalPrice,
    }

    return (
        <div className='pt-8 flex gap-6'>
            <div className='w-3/4 grid grid-cols-3 gap-6'>
                {
                    courses.map((course, idx) =>
                        <SingleCard
                            key={idx}
                            course={course}
                            handleCourse={handleCourse}
                        />
                    )
                }
            </div>
            <div className='w-1/4'>
                <CourseInfo courseDetails={courseDetails} resetHandle={resetHandle}/>
            </div>
        </div>
    )
}

export default Courses
