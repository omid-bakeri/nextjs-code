import React from "react";
import path from "path";
import fs from "fs";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (loadedProduct) {
    return <p>Loading ...</p>;
  }
  return (
    <>
      <div>ProductDetailPage</div>
      <h1>{loadedProduct.title}</h1>
      <h1>{loadedProduct.price}</h1>
    </>
  );
}

async function getData() {
  const file_path = path.join(process.cwd(), "data", "products.json");
  const json_data = fs.readFile(file_path);
  const data = JSON.parse(json_data);
  return data;
}
export async function getStaticProps(context) {
  const { params } = context;
  const productID = params.pid;
  const data = await getData();
  const product = data.products.find((item) => item.id === productID);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

// for dynaimic route and url use getStaticPaths

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((item) => item.id);

  const params = ids.map((item) => ({
    params: { pid: item },
  }));
  return {
    paths: params,
    fallback: true,
  };
}
export default ProductDetailPage;
