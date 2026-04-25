import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

import "./FamilyTree.css";
export const AssetContext = createContext("");
export const AddContext = createContext(0);
const FamilyTree = () => {
  const [add, setAdd] = useState(0);
  const asset = "gold";
  const newAsset = "uranium";
  
  return (
    <div className="family_tree">
      <h2>Family Tree</h2>
       <h2>family money : {add}</h2>
      <AddContext value={[add, setAdd]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </AddContext>
    </div>
  );
};

export default FamilyTree;
