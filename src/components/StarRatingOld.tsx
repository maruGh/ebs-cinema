import { useState } from "react";
import StarRating from "./StarRating";

const StarRatingOld = () => {
  const [first, setFirst] = useState(0);
  const handle = (num: number) => setFirst(num);

  return (
    <div>
      <StarRating onSetRating={handle} />
      <div>{first}</div>
    </div>
  );
};

export default StarRatingOld;
