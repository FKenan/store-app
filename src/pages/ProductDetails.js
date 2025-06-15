import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";
import requests from "../api/apiClient";

export default function ProductDetailsPage() {
  const { id } = useParams(); // app.js içinde tanımlanan router altındaki  productDetailPage url ine gelen id parametresini alır.
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await requests.products.details(id); // Axios ile oluşturduğumuz apiClient ile veri çekme
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return <ProductItem product={product} />;
}
