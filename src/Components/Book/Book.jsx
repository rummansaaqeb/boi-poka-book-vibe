import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-lg border">
                <figure className="bg-gray-400 py-8 rounded-lg">
                    <img
                        className="h-[166px]"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex items-center justify-center gap-4">
                        {
                            tags.map(tag => <button className="btn btn-xs bg-green-200 text-green-500">{tag}</button>
                            )
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;