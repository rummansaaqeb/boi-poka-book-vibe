const Book = ({ book }) => {
    const { bookName, image, author } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-lg border">
            <figure className="bg-gray-400 py-8 rounded-lg">
                <img
                    className="h-[166px]"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;