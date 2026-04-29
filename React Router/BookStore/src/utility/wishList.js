
const handleGetWishList = ()=>{



    const wishData = JSON.parse(localStorage.getItem("wish"));


    return wishData || [];




}


const handleSetWishList =(id)=>{

        let getData =handleGetWishList();


        if(getData.includes(id)){

            alert("already in whishList");
        }

         else{

            getData.push(id);
            getData=JSON.stringify(getData);
            localStorage.setItem("wish",getData);
         }


      console.log(getData);

}


export {handleGetWishList, handleSetWishList};