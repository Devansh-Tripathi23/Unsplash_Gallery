import React, { useState } from 'react'
import './Fetch.css'
import SearchIcon from '@mui/icons-material/Search';

const Fetch = () => {
    let [set,setData]=useState([])
    let [data,updateData]=useState('Gods')
    function searchBox(e){
        console.log(e.target.value);
        updateData(e.target.value)

    }
    function next(){
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=jGmDwb7qB1Mqy5IZHRiQDDitBMLwZTS_7XibsdS95BU&&per_page=30`).then((Response)=>{
        return Response.json();
    }).then((data)=>{
        console.log(data)
        setData(data.results)
       
    })
};


  return (
        <>
         <input type='text' className='box' onChange={searchBox}></input>
         <div className='icon' onClick={next}>
         <SearchIcon/>
         </div>
         
        <h1 id='title'>Unsplash Gallery</h1>
        <div className='loading'>

                    </div>
       
        {
            set.map((value)=>{
                return(
                    <>
                    {/* <h1>{value.id}</h1> */}
                    
                    <img src={value.urls.small} key={value.id}></img>
                    </>
                )
            })
        }
        {/* <div className='gallery'>
            {
                results.map((item)=>{
                    return <img src={item.urls.small} key={item.id}></img>
                     
                })
            }
        </div> */}
        </>
      
  )
}

export default Fetch
