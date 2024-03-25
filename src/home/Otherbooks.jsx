import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards';

const Otherbooks = () => {
    const [books,stebooks]=useState([]);
    useEffect(()=>{
       fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data=>stebooks(data.slice(4,8) ))
    },[])
  return (
    <div>
      <Bookcards books={books} headline="Other Books"/>
    </div>
  )
}

export default Otherbooks
