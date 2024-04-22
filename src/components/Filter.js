import React from 'react';

const Filter = ({filterData,filterCourse}) => {
    return(
        <div className='Filter'>
                {
                    filterData.map((data)=> (
                        <button className='Filter-button' key={data.id} onClick={()=>filterCourse(data.title)}>
                            {data.title}
                        </button>
                    ))
                
                }
        </div>
    )
}
export default Filter