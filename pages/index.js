import Link from "next/link";
import React from "react";
import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  console.log(products);
  const users = [
    {
      id: 1,
      name: "Ali",
    },
    {
      id: 2,
      name: "Ahmad",
    },
  ];

  return (
    <>
      <div>HomePage</div>
      <ul>
        {users.map((item) => (
          <li
            className="text-yellow-300
           text-xl"
            key={item.id}
          >
            <Link href={`blog/posts/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="text-xl">
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const file_path = path.join(process.cwd(), "data", "products.json");
  const json_data = await fs.readFile(file_path);
  const data = JSON.parse(json_data);

  return {
    props: {
      products: data.products,
    },
  };
}
export default HomePage;
