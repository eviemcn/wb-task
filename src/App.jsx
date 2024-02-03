import React, { useState, useEffect } from "react";
import { getBranchData } from "./services/get-products-service.jsx";
import { ProductTable } from "./components/product-table/product-table";
import { SearchItems } from "./components/search-items/search-items";

function App() {
  const [loading, setLoading] = useState(true);
  const [branchData, setBranchData] = useState(null);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getBranchData().then((data) => {
      setBranchData(data);
      //Show loading spinner
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  return (
    <div className="page-container">
      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="product-list">
          <SearchItems
            setFilter={setSearchString}
            searchString={searchString}
          />
          <ProductTable products={branchData} searchString={searchString} />
        </div>
      )}
    </div>
  );
}

export default App;
