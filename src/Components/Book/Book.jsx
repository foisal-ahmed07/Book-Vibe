/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, rating, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  border p-6 mt-8">
        <figure className="rounded-xl bg-[#F3F3F3] p-5">
          <img
            className=" rounded-xl w-[135px] h-[165px]"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className=" space-y-3">
          <div className="flex gap-4 mt-3">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="
            bg-[#eff6ee] btn btn-xs  text-[#23BE0A]"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title mt-5 font-bold">{bookName}</h2>
          <p className="font-bold border-b border-dashed pb-5">By: {author}</p>

          <div className="card-actions justify-between">
            <div className="font-bold badge-outline">Fiction</div>
            <div className="font-bold badge-outline">
              {rating} <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
