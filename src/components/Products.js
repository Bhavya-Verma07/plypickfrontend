// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get("/products");
//       if (response.data.success) setProducts(response.data.data);
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.error);
//       }
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Product List</h1>
//         <div>
//           {products.map((product) => (
//             <p key={product._id}>
//             <img style={{height:"100px", width:"100px"}} src={product.attrs.imgs[0]} alt="images"/>
             
//               <h3>{product.product_name}</h3>
//               <p>{product.product_description}</p>
//               <h4>{product.group?.Group_name}</h4>
//               <h4>{product.category?.name}</h4>
//               <h4>{product.subcategory?.Sub_Category_name}</h4>
//               <h4>{product.brand?.Brand_name}</h4>
//             </p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get("/products");
//       if (response.data.success) setProducts(response.data.data);
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.error);
//       }
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Product List</h1>
//       {products.map((product) => (
//         <div className="container">
//         <div
//           className="row"
//           style={{ width:"100%", margin: "10px", display: "flex" }}
//         >
//           <div className="col-4" style={{width:"33.33%", margin: "10px"}}>
//             <div className="card" style={{ width: "18rem" }} key={product._id}>
//               <img
//                 src={product.attrs.imgs[0]}
//                 className="card-img-top"
//                 alt="images"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.product_name}</h5>
//                 <p className="card-text">{product.product_description}</p>
//               </div>
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">{product.group?.Group_name}</li>
//                 <li className="list-group-item">{product.category?.name}</li>
//                 <li className="list-group-item">
//                   {product.subcategory?.Sub_Category_name}
//                 </li>
//                 <li className="list-group-item">{product.brand?.Brand_name}</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ProductList;
