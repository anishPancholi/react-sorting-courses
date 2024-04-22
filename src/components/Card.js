import React from 'react';
import {useState} from 'react'
import {FcLike,FcLikePlaceholder  } from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = ({data})=>{
    const[icon,setIcon] = useState(false)
    const[showFullContent,setShowFullContent] = useState(false)


    const maxLength =95;

    const handleClick = (event) =>{
        event.preventDefault()
        if(icon){
            toast.warning("Like Removed", {
                data: {
                  title: "Error toast",
                  text: "This is a error message",
                },
                className: "toast"
              });
        }
        else{
            toast.success("Liked Successfully", {
                data: {
                  title: "Success toast",
                  text: "This is a success message",
                },
              });
        }

        setIcon(icon => !icon)
    }

    const handleShowFullContent = () =>{
        setShowFullContent(showFullContent => !showFullContent)
    }
    return(
        <div className="card">
        
           <div className='card-cover'>
                <img src={data.image.url} alt={data.image.alt} />
                <div className='card-icon'>
                    
                    {
                        icon? (
                            <FcLike onClick={handleClick} fontSize="30px" />
                        ) : (
                            <FcLikePlaceholder onClick={handleClick} fontSize="30px" />
                        )
                    }
                </div>
                
           </div>
           <div className='card-info'>
            <h4>{data.title}</h4>
            <div>
                {
                    showFullContent ? (
                        <div>
                            {data.description}
                            <span className='card-info-readmore' onClick={handleShowFullContent}>Show Less</span>
                        </div>
                        
                    ):(
                        <div>
                            {/* <div>
                                {data.description.length > 0 ?(
                                    <div>
                                            {data.description.slice(0,maxLength)}
                                            {`....`}
                                            {maxLength < data.description.length && 
                                            <span className='card-info-readmore' onClick={handleShowFullContent}>Read More</span>}
                                    </div>
                                ):(
                                    
                                    <div>
                                            {data.description.slice(0,maxLength)}
                                            {maxLength < data.description.length && 
                                            <span className='card-info-readmore' onClick={handleShowFullContent}>Read More</span>}
                                    </div>
                                )}
                            </div> */}
                            {data.description.length > maxLength && (
                                <>
                                            {data.description.slice(0,maxLength)}
                                            {`....`}
                                </>
                            )}

                            {maxLength < data.description.length && 
                              <span className='card-info-readmore' onClick={handleShowFullContent}>Read More</span>}
                            
            
                        </div>
                    )
                }
            </div>
           </div>

           

        </div>
    )
}

export default Card;