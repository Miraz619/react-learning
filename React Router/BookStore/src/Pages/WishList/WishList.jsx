import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { handleGetWishList } from '../../utility/wishList';
import Book from '../../Components/Book/Book';

const WishList = () => {

    const books =useLoaderData();

    
    const [sortBook,setSortBook]=useState([]);

    useEffect(()=>{

     const wish = handleGetWishList();



    const finalBooks=books.filter(book=> wish.includes(book.bookId));

     setSortBook(finalBooks);

    },[]);
    
    

    //  const hand
   
    const [sort,setSort]=useState("");


    const handleSort=(type) => {

           setSort(type)

           if(type=="pages"){
            const sortByPage=[...sortBook];

            sortByPage.sort((a,b)=> a.totalPages-b.totalPages);

            setSortBook(sortByPage);

           }
    }


    return (
        <div>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Sort By : {sort}
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li onClick={()=>handleSort("pages")}><a>Pages</a></li>
  <li><a>Ratings</a></li>
</ul>
           {sortBook.map(book=><Book book={book}></Book>)}
        </div>
    );
};

export default WishList;