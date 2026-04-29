const getStoredBook = ()=>{

const storeBook=localStorage.getItem("readList");

const storeBookData=JSON.parse(storeBook);

return storeBookData || [];

}


const addToStroeDB = (id)=>{

   
const getData=getStoredBook();

if(getData.includes(id)){
    alert("can not inter , alredy exist");
}

else{
    getData.push(id);
    
    const data = JSON.stringify(getData);
    localStorage.setItem("readList", data);
}

}

export {addToStroeDB, getStoredBook};