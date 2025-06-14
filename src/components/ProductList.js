import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

// size={{ xs: 6, md: 4, lg: 3 }} => xs ekranlar için 6 genişlik kaplar, md ekranlar için 4 genişlik kaplar, lg ekranlar için 3 genişlik kaplar.12 toplam genişlik
// yani xs ekranlarda 2 ürün, md ekranlarda 3 ürün, lg ekranlarda 4 ürün gösterir.
export default function ProductList({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <ProductCard product={p}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
}
