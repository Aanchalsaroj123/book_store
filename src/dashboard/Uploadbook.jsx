import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput,Textarea } from 'flowbite-react';

const Uploadbook = () => {
  const bookcategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Romance",
    "History",
    "Biography",
    "Fantasy",
    "Science",
    "Horror", 
    "Thriller",
    "War",
    "Psychological",
    "Programming",
    "Children books",
    "Travel",
    "Research",
    "Autobiography",
    "Business",
    "Computer Science",
    "Comedy",
    "Drama",
    "Articles",
    "Mystery",
    "Bibliography",
    "Music",
  ]
  const [selectedbookcategory, setselectedbookcategory] = useState(bookcategories[0])
  const handlchangeselectedvalue = (event) => {
    // console.log(event.target.value);
    setselectedbookcategory(event.target.value)
  }
 
 // handle book submission
const handleSubmit = async (event) => {
  event.preventDefault();

  const bookTitle = event.target.bookTitle.value;
  const authorName = event.target.authorName.value;
  const imageUrl = event.target.imageUrl.value; // Access value property
  const bookDescription = event.target.bookDescription.value;
  const category = event.target.category.value;
  const bookPdfUrl = event.target.bookPdfUrl.value; // Access value property

  const bookobj = {
    bookTitle,
    authorName,
    imageUrl,
    bookDescription,
    category,
    bookPdfUrl
  };
  console.log(bookobj);
  fetch("http://localhost:3000/upload-book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookobj)
  })
    .then(res => res.json())
    .then(data => {
      alert("book uploaded successfully!!");
    })
    .catch(error => {
      console.error("Error uploading book:", error);
      alert("Error uploading book. Please try again later.");
      form.reset();
    });
};


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Upload A Book
      </h2>
      <form onSubmit={handleSubmit} className="flex lg:w-[980px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          {/* BOOK TITLE */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>
          {/* author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* second row */}

        <div className='flex gap-8'>

          {/* book img url*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book Image Url" required />
          </div>
          {/* categories */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id="inputState" name='category' className='w-full rounded' onChange={handlchangeselectedvalue} value={selectedbookcategory}>
              {bookcategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

          </div>
        </div>
     
     {/* 3rd row */}
      {/* dwscription */}
     <div >
      <div className="mb-2 block">
        <Label htmlFor="bookDescription" value="Book Description" />
      </div>
      <Textarea id="bookDescription" name='bookDescription' placeholder="Write book description.." required rows={4} className='w-full' />
    </div>
 
     {/* 4th row */}
 
        <div >
          {/* BOOK pdf url */} 
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
            </div>
            <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book Pdf Url" required />
          </div> 
          <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  )
}

export default Uploadbook
