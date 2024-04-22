import React from 'react';
import Card from "./Card.js"

const Cards = ({courses}) => {
    console.log("courses",courses)
    let courseDetails =[];
    const getCourseData = () =>{
        // const courseData = Object.values(courses).map((course)=>{
        //     return course.map((item)=>{
        //         return item
        //     })
        // })
        // console.log("courseData", courseData)
        // return courseData

        if (courses) {
            Object.values(courses).forEach((course) => {
                course.forEach((item) => {
                    courseDetails.push(item);
                });
            });
        }
        console.log("courseDetails",courseDetails)
        return courseDetails
    }
   

    return(
        <div className="Cards">
            {  
                getCourseData().map((data)=> (
                    <Card key={data.id} data={data}></Card>
                ))
            }
        </div>
    )
}

export default Cards;