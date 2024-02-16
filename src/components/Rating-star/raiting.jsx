import React from "react";

export const Raiting = () => {
  return (
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
};
