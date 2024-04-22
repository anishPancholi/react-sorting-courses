import React from "react";
import Navbar from "./components/Navbar.js"
import Filter from "./components/Filter.js"
import Cards from "./components/Cards.js"
import Spinner from "./components/Spinner.js"
import { useState ,useEffect} from "react";
import {filterData,apiUrl} from './data.js'
const App = () => {

  const [courses,setCourse] = useState(null)
  const [totalCourses,setTotalCourses] = useState(null)
  const [loading,setLoading] = useState(false)

  const fetchData = async() =>{
    //start loading
    setLoading(true)
    try{
      const res = await fetch(apiUrl)
      const output = await res.json()
      setTotalCourses(output.data)
      setCourse(output.data)
    }
    catch(error){
      console.log("Fetching data failed")
    }
    setLoading(false)
  }

  useEffect(() =>{
    fetchData()
  },[])

  // const filterCourse = (courseFiled)=>{
  //   if (!courses) return;
  //     if(courseFiled === "All"){
  //       setCourse(courses)
  //     }
  //     else{
  //       setCourse(courses.filter((course)=>course.key === courseFiled))
  //     }
  // }

  // const filterCourse = (courseField) => {
  //   if (!courses) return; // Handle case when courses is null
  //   if (courseField === "All") {
  //     fetchData(); // Refetch all courses
  //   } else {
  //     // Filter courses under the specified category
  //     const filteredCourses = Object.values(courses).find(category => category[0].key === courseField);
  //     setCourse(filteredCourses || []); // Set filtered courses or empty array if not found
  //   }
  // };

  const filterCourse = (courseField) => {

    if (!totalCourses) return;
    if (courseField === "All") {
      setCourse(totalCourses);
    } else {
        const filteredCourses = totalCourses[courseField] || [];
        const filteredData = { [courseField]: filteredCourses };
        setCourse(filteredData);
    }
    
};

  return(
    <div className="App">
        <Navbar></Navbar>

        <div className="App-content">
                <Filter filterData={filterData} filterCourse={filterCourse}></Filter>

                <div>
                  {
                    loading ? (<Spinner/>):
                    (<Cards courses ={courses}></Cards>)
                  }
                </div>
        </div>
        
    </div>
  );
};

export default App;
