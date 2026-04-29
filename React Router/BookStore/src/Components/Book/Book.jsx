import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ book }) => {
  // console.log(book);
  const { bookName, author, image, category, rating, tags, bookId } = book;
  return (
    <Link to={`/Details/${bookId}`}>
      <div className="card bg-base-100 w-full max-w-xs shadow-sm p-4 md:p-5 border rounded-2xl hover:shadow-lg transition-shadow h-full">
        <figure className="bg-[#F3F3F3] py-6 md:py-8 px-6 md:px-8 flex items-center justify-center">
          <img
            className="w-24 h-32 sm:w-24 sm:h-32 md:w-24 md:h-32 object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body p-3 md:p-4 grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p key={index} className="text-xs md:text-sm">
                {tag}
              </p>
            ))}
          </div>
          <h2>
            <div className="font-bold text-base md:text-lg line-clamp-2">
              {bookName}
            </div>
            <div className="text-sm md:text-sm font-medium">By: {author}</div>
          </h2>
          <div className="border border-dashed"></div>
          <div className="flex justify-between text-xs md:text-sm mt-auto">
            <div>{category}</div>
            <div className="flex items-center gap-1">
              {rating}
              <IoIosStarHalf />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
