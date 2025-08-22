import productsData from "../data/products.json";

export async function getAllProducts() {
  const data = await fetch("/api/products", { method: "GET" })
    .then((res) => res.json())
    .then((data) => data);

  console.log("from data: ", data);

  return data;
}

// export function getProductById(id) {
//   return productsData.find((product) => product.id === id);
// }
