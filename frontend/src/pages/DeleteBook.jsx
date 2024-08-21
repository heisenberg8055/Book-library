import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  const handleDeleteBook = () => {
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response) => {
          setBook(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
    }, [])
    return (
        <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>
          Delete Book
        </h1>
        {loading ?(
          <Spinner/>
        ) : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Id</span>
              <span>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Title</span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Author</span>
              <span>{book.author}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-grey-500'>Last Updated Time</span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
              <h3 className='text-2xl'> You haven't read this book idiot!</h3>
              <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Delete</button>
            </div>
          </div>
        )}
        </div>
    )
  
}


export default DeleteBook