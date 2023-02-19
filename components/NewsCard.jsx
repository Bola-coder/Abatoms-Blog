import React from "react";

const NewsCard = () => {
  return (
    <div className="flex flex-row w-11/12">
      <div className="basis-1/6 ">
        <h2 className="text-white-300 text-2xl font-bold tracking-wide mb-5">
          27 <br /> May
        </h2>
        <p className="text-green-300 font-bold w-3/4">@samurai2019</p>
      </div>
      <div className="basis-5/6">
        <h2 className="text-green-300 text-2xl font-bold tracking-wide mb-3">
          15 Disadvantages Of Freedom And How You Can Work Around It.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora
          ratione iste nobis libero laborum nostrum aliquid amet, dolor
          repellendus quas quae corrupti atque nesciunt praesentium animi,
          dolores iure fugiat illum qui! At iste laborum officia accusamus eius
          voluptas earum doloribus necessitatibus quasi suscipit repellendus eos
          amet praesentium consequuntur quis in quia nesciunt error porro nam
          numquam quod, sunt nobis repudiandae! Perferendis ducimus voluptatum
          tenetur est tempore eos esse iure velit numquam voluptates vel
          corrupti iusto accusantium quam consectetur, totam vero fugit animi
          temporibus dicta odit facere quae. Quo modi molestias omnis
          voluptatibus hic illum sequi odit praesentium voluptate nulla....{" "}
          <span className="text-green-300 cursor-pointer">read more</span>
        </p>
        <div className="mb-10 flex">
          <p className="border-2 rounded-full border-green-300 text-green-300 w-fit py-1 mt-2 px-4 mr-2">
            #meditation
          </p>
          <p className="border-2 rounded-full border-green-300 text-green-300 w-fit py-1 mt-2 px-4 mr-2">
            #mentalpeace
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
