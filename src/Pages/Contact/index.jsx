import Layout from "../../Components/Layout";

function Contact() {
  return (
    <>
      <Layout>
        <section className="bg-blue-950">
          <div className="pt-0 items-center register flex flex-col min-h-screen rounded-lg ">
            <div className="p-8 mb-14"></div>
            <div className="bg-black p-8 rounded-xl">
              <h1 className="text-5xl text-white font-medium mb-2">
                Escribenos y
              </h1>
              <h1 className="text-5xl text-white font-medium mb-2">
                recibe{" "}
                <span className="text-5xl text-cyan-500 font-medium mb-2 uppercase">
                  asesoria{" "}
                </span>
                <span className="text-white">¡</span>
              </h1>

              <form className="mt-8">
                <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Nombre(s)"
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Apellidos"
                  />
                </div>
                <div className="max-w-lg mb-4">
                  <input
                    type="email"
                    autoComplete="off"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="max-w-lg mb-4">
                  <textarea
                    placeholder="Escribe tu mensaje..."
                    rows="10"
                    cols="40"
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                  />
                </div>

                <div className="max-w-lg">
                  <button className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
