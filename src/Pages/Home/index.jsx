import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://kaoxdc.pythonanywhere.com/api/tramite/")
      // fetch(https://api.escuelajs.co/api/v1/products)
      .then((response) => response.json())
      .then((data) => console.log(setItems(data)));
  }, []);

  return (
    <>
      <Layout>
        <div className="grid w-screen h-screen ">
          <div className="grid col-span-12 gap-10 grid-cols-4 w-full px-20 py-32 bg-blue-950">
            {items?.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <ProductDetail />
        </div>
      </Layout>
    </>
  );
}

export default Home;
