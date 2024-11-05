import { useEffect, useState } from "react";

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
            <p>{books.length}</p>
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