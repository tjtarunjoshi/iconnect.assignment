import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
}