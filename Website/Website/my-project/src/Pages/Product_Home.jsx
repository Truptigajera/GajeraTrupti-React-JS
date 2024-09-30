import { IoMdArrowDropdown } from "react-icons/io";

// import img_1 from "/src/assets/BW_Handale.jpeg";
// import img_2 from "/src/assets/F_Vase.jpeg";
// import img_3 from "/src/assets/Deco_Ass.jpeg";
// import img_4 from "/src/assets/Clock.jpeg";
// import img_5 from "/src/assets/NewsPaper.jpeg";
// import img_6 from "/src/assets/Pottry_V.jpeg";
// import img_7 from "/src/assets/Rose_H.jpeg";
// import img_8 from "/src/assets/Table_Lamp.jpeg";


const Product_Home = () => {
  return (
    <>
      <div className=" bg-white pt-20 px-16 ">
        <div className="flex justify-between">
          <div>
            <ul className="flex space-x-9 text-sm text-gray-400  font-medium ">
              <li className="text-black ">ALL</li>
              <li className=" hover:text-black">HOME DECOR</li>
              <li className=" hover:text-black">LIGHTING</li>
              <li className=" hover:text-black">DECORATION</li>
              <li className=" hover:text-black">VASES</li>
              <li className=" hover:text-black">BASICS</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <p className=" text-lg font-sm">Filter</p>{" "}
            <IoMdArrowDropdown className="mt-1 text-xl" />
          </div>
        </div>
        <Card_Home/>
      </div>
    </>
  );
};

export const Card_Home = ( ) => {
  return (
    <div>

      <div className="grid grid-cols-4  gap-16 pt-10 lg:max-xl:grid-cols-3 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1">

        <div className="box reletive group">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-505x505.jpg" alt="" />
          <div className="pop absolute bottom-[-400px] mx-24 bg-black text-white group-hover:invisible">
            <h2 className="">Quick Look </h2>
          </div>
          <h5 className="text-center mt-4 font-semibold">BASKET WITH HANDLES</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri ">$160</p>
          <a className=" text-gray-400 text-lg text-center mt-1 Add group-hover:invisible">Add To Card</a>  
        </div>  

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">FLOWER VASE</h5>
          <p className="text-gray-400 text-lg text-center mt-1"><del className="me-2">$210</del>$170</p>
        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">DECO ACCESSORY</h5>
          <p className="text-gray-400 text-lg text-center mt-1 pri">$15</p>
          <p className=" text-gray-400 text-lg text-center mt-1 Add">Add To Card</p>  


        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">WALL CLOCK</h5>
          <p className="text-gray-400 text-lg text-center mt-1">$110</p>
        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">NEWSPAPER STORAGE</h5>
          <p className="text-gray-400 text-lg text-center mt-1">$90</p>
        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">POTTERY VASE</h5>
          <p className="text-gray-400 text-lg text-center mt-1">$60</p>
        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">ROSE HOLDBACK</h5>
          <p className="text-gray-400 text-lg text-center mt-1"><del className="me-2">$30</del>$24</p>
        </div>

        <div className="">
          <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-505x505.jpg" alt="" />
          <h5 className="text-center mt-4 font-semibold">TABLE LAMP</h5>
          <p className="text-gray-400 text-lg text-center mt-1">$240</p>

        </div>

      </div>

    </div>
  );
};

export default Product_Home;