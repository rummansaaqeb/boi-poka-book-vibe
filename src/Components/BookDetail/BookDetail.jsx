import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDb';
import { addToWishlist } from '../../Utility/addToWishlist';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image } = book;


    const handleMarkAsRead = (id) => {
        /**
         * 1. Understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection:--> bookId
         * 4. check: if the book is already in the readList
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */


        addToStoredReadList(id);


    }


    const handleAddToWishlist = (id) => {
        addToWishlist(id);
    }

    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Mark As Read</button>
            <button onClick={()=> handleAddToWishlist(bookId)} className="btn btn-active btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;