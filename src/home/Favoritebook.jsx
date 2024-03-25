import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards';

const Bestsellerbooks = () => {
    const [books,stebooks]=useState([]);
    useEffect(()=>{
       fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data=>stebooks(data.slice(0,8) ))
    },[])
  return (
    <div>
      <Bookcards books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default Bestsellerbooks
