import { useContext } from "react";
import { CartContext } from "../../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(CartContext);

  // console.log('Producto a Mostrar: ', context.productToShow)

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col right-0 border border-black rounded-xl fixed bg-white`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-lg">DETALLE</h2>
        <div
          className="text-sm font-bold bg-black text-white rounded-md px-1.5 pb-1 pt-0 m-6 hover:bg-red-600 hover:cursor-pointer hover:text-black"
          onClick={() => context.closeProductDetail()}
        >
          x
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.photo}
          alt={context.productToShow.nombre}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-md">
          {context.productToShow.nombre}
        </span>
        <br />
        <span className="font-medium text-2xl mb-2">
          CARRO __________ $ {context.productToShow.precio_auto}
        </span>
        <span className="font-medium text-2xl mb-2">
          MOTO __________ $ {context.productToShow.precio_moto}
        </span>
      </p>
    </aside>
  );
};
export default ProductDetail;
