import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../../Components/Book/Book';
import BookDetails from '../BookDetails/BookDetails';
const ReadList = () => {

  const Books = useLoaderData();

  const [read,setRead]=useState([]);
  const [sort, setSort]=useState("");
  useEffect(()=>{

    const readList = getStoredBook();
    const myReadList=Books.filter(book => readList.includes(book.bookId));
    setRead(myReadList);
  },[])


  const handleSort = (type)=>{

    setSort(type);

    if(type=="pages"){
      const sortedByPage=[...read];
      sortedByPage.sort((a,b)  => a.totalPages-b.totalPages);
      setRead(sortedByPage);

    }

    if(type=="Ratings"){
      const sortedByRating=[...read].sort((a,b)=>a.rating-b.rating);
      setRead(sortedByRating);
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
  <li onClick={()=>handleSort("Ratings")}><a>Rating</a></li>
</ul>

             <Tabs>
    <TabList>
      <Tab>Read</Tab>
     <Link to='/wish'> <Tab>Wishlist</Tab></Link>
    </TabList>

    <TabPanel>
      {
        read.map(book => <Book book={book} ></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;