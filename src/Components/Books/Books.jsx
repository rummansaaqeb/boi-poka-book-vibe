import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res=> res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
                    {
                        books.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </div>
        </div>
    );
};

export default Books;

/**
 * 1. state to store the books
 * 2. use effect
 * 3. fetch the loaded data
 * 4. set the loaded data to books
 */