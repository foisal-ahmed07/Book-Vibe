import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addAddToStoreReadList } from "../../Utlity/adToDb";
import { addAddToStoreWishList } from "../../Utlity/addToDbWishList";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookId: currentId,
    totalPages,
    yearOfPublishing,
    tags,
    review,
    author,
    bookName,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addAddToStoreReadList(id);
  };
  const handleWishList = (id) => {
    addAddToStoreWishList(id)
  };

  return (
    <div className="hero bg-base-200 p-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img src={image} className=" w-[600px] rounded-2xl" />

        <div className="space-y-5">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6 font-bold text-2xl">By: {author}</p>

          <p className="text-lg font-semibold border-y p-2">Fiction</p>

          <p className="font-bold text-lg">
            Review:
            <span className=" text-gray-600 font-normal text-sm">{review}</span>
          </p>

          <div className="flex gap-4 mt-3 pb-5">
            <span className="text-lg font-bold">Tag</span>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="
            bg-[#eff6ee] btn btn-xs  text-[#23BE0A]"
              >
                #{tag}
              </button>
            ))}
          </div>

          <hr />

          <div className="mt-5 space-y-3">
            <p className="flex justify-between  text-gray-600 font-semibold">
              Number OF Page:{" "}
              <span
                className="font-bold textkg
              "
              >
                {totalPages}
              </span>
            </p>

            <p className="flex justify-between text-gray-600 font-semibold">
              Publisher:{" "}
              <span
                className="font-bold textkg
              "
              >
                {author}
              </span>
            </p>

            <p className="flex justify-between text-gray-600 font-semibold">
              Year of Publishing:{" "}
              <span
                className="font-bold textkg
              "
              >
                {yearOfPublishing}
              </span>
            </p>

            <p className="flex justify-between text-gray-600 font-semibold">
              Rating:{" "}
              <span
                className="font-bold textkg
              "
              >
                {rating}
              </span>
            </p>
          </div>

          <div className="flex gap-5 mt-5 ">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className=" btn  btn-accent bg-transparent  px-14"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(bookId)}
              className=" btn btn-accent px-14"
            >
              Add to Wish list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
