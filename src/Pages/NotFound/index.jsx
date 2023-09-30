import Layout from "../../Components/Layout";

function NotFound() {
  return (
    <>
      <Layout>
        <div className="text-red-600 justify-items-center p-10 m-10 text-xl font-extrabold">
          ❌ Algo salio mal - Error de conexion ❌
        </div>
      </Layout>
    </>
  );
}

export default NotFound;
