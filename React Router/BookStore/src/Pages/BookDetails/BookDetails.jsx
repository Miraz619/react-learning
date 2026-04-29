import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStroeDB } from "../../utility/addToDB";
import { handleSetWishList } from "../../utility/wishList";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();

  const numericId = parseInt(id);

  const users = useLoaderData();
  //  console.log(users);
  // console.log(typeof id);

  const user = users?.find((user) => user.bookId === numericId);

  // If book not found, show error
  if (!user) {
    return <div className="text-center py-12 text-xl">Book not found</div>;
  }

  const {
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = user;

  const handleRead = (id) => {
     
   Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

    addToStroeDB(id);
  };
  // console.log(user);

  return (
    <div className="flex flex-col items-center justify-center py-12 gap-5 w-full max-w-4xl mx-auto px-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt="" className="w-full max-w-xs md:max-w-sm" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-4xl">{bookName}</h1>
          <p className="font-medium text-xl">By : {author}</p>
          <div className="border-solid border border-b-gray-500"></div>
          <h3>{category}</h3>
          <div className="border-solid border border-b-gray-500"></div>
          <p className="text-base">Review : {review}</p>
          <p className="flex gap-4 flex-wrap">
            Tag:{" "}
            {tags.map((tag, index) => (
              <span className="text-[#23BE0A]" key={index}>
                #{tag}
              </span>
            ))}
          </p>
          <div className="border-solid border border-b-gray-500"></div>

          <table className="w-full max-w-xs md:max-w-md">
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td className="font-bold">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className="font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-6 mt-5 ">
        <button
          onClick={() => handleRead(numericId)}
          className="btn btn-active"
        >
          Read
        </button>
        <button onClick={()=>handleSetWishList(numericId)} className="btn btn-active bg-[#50B1C9]">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
