import Layout from "../../Components/Layout";
import item1 from "../../img/item1.png";
import item2 from "../../img/item2.png";
import item3 from "../../img/item3.png";
import item4 from "../../img/item4.png";
import item5 from "../../img/item5.png";
import item6 from "../../img/item6.png";

function Work() {
  return (
    <>
      <section className="bg-blue-950 grid grid-cols-3 pt-32 gap-10 px-10 pb-20">
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item1} alt="" className="w-full object-cover rounded-3xl" />
        </div>
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item2} alt="" className="w-full object-cover rounded-3xl" />
        </div>
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item3} alt="" className="w-full object-cover rounded-3xl" />
        </div>
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item4} alt="" className="w-full object-cover rounded-3xl" />
        </div>
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item5} alt="" className="w-full object-cover rounded-3xl" />
        </div>
        <div className="grid-cols-6 max-w-lg mx-auto  shadow-xl items-center justify-center">
          <img src={item6} alt="" className="w-full object-cover rounded-3xl" />
        </div>
      </section>
    </>
  );
}

export default Work;
