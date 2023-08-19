import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const handlePageChange = (type) => {
    if (type === "add") {
      setCurrPage(currPage + 1);
    } else if (type === "sub") {
      setCurrPage(currPage - 1);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`/products?page=${currPage}`);
      if (response.data.success) setProducts(response.data.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, [currPage]);

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Products</h1>
      <div className="container-fluid" style={{ margin: "auto", width: "80%" }}>
        <div
          className="row mx-auto my-auto"
          style={{ margin: "auto", display: "flex" }}
        >
          {products.map((product) => (
            <div className="col-sm-3 my-auto" style={{ display: "flex" }}>
              <div
                className="card box mx-auto"
                style={{
                  display: "flex",
                  width: "18rem",
                  height: "40rem",

                  marginTop: "10px",
                  // marginBottom: "20px",
                }}
                key={product._id}
              >
                <img
                  src={product.attrs.imgs[0]}
                  className="card-img-top mx-auto my-auto"
                  alt="images"
                  style={{
                    display: "flex",
                    // width: "18rem",
                    height: "12rem",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text">{product.product_description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    {product.group?.Group_name}
                  </li>
                  <li className="list-group-item">{product.category?.name}</li>
                  <li className="list-group-item">
                    {product.subcategory?.Sub_Category_name}
                  </li>
                  <li className="list-group-item">
                    {product.brand?.Brand_name}
                  </li>
                </ul>
              </div>
            </div>
          ))}
          <div className="row mx-auto my-5" style={{ textAlign: "center" }}>
            <div className="col-5" style={{ textAlign: "right" }}>
              <button
                type="button"
                disabled={currPage <= 1}
                onClick={() => handlePageChange("sub")}
              >
                Prev
              </button>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              <p style={{ backgroundColor: "offwhite", color: "grey" }}>
                {/* {currPage} */}
                ... {currPage - 1}{" "}
                <span style={{ color: "black" }}>{currPage}</span>{" "}
                {currPage + 1} ...
              </p>
            </div>
            <div className="col-5" style={{ textAlign: "left" }}>
              <button type="button" onClick={() => handlePageChange("add")}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
