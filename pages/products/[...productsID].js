import React from "react";
import { useRouter } from "next/router";

function ProductsID() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <div>ProductsID</div>
    </>
  );
}

export default ProductsID;
