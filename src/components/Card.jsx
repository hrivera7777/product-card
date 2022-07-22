import React from "react";
import Desktop from "../assets/img/image-product-desktop.jpg";
import Cart from "../assets/img/icon-cart.svg";

function Card() {
  return (
    <div className="h-110 w-132 bg-white rounded-xl mx-auto my-auto flex flex-row">
      <img
        className="h-110 w-fit rounded-l-xl"
        src={Desktop}
        alt="random image"
      />
      <div className="p-6 flex flex-col">
        <span className="text-sm text-left tracking-widest text-grayish-blue basis-6 mb-5">
          PERFUME
        </span>
        <h2 className="text-4xl font-serif font-bold text-left basis-28 mb-5">
          Gabrielle Essence Eau <br />
          De Parfum
        </h2>
        <p className="text-left basis-28 text-grayish-blue text-sm mb-5">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex flex-row justify-start gap-9 basis-9 mb-5">
          <span className="my-auto font-serif font-bold text-dark-cyan text-center text-4xl">
            $149.99
          </span>
          <span className="my-auto text-center text-xs line-through">
            $169.99
          </span>
        </div>
        <button className="mx-auto basis-14 h-12 w-full bg-dark-cyan hover:bg-green-800 rounded-md px-4 py-2 text-white flex flex-row justify-center gap-2 text-center">
          <img className="w-4 h-4 my-auto" src={Cart} alt="cart" />
          <span className="my-auto">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
