import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";

type StarRatingProps = {
  className?: string;
  maxRating?: number;
  defaultRating?: number;
  message?: string[];
  onSetRating?: (rating: number) => void;
};

const StarRating = ({
  className = "w-6 h-6",
  maxRating = 10,
  defaultRating,
  message = [],
  onSetRating,
}: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(defaultRating);

  const handleRating = (userRating: number) => {
    setRating((p) => (p == userRating ? userRating - 1 : userRating));
    onSetRating?.((prev: number) =>
      prev == userRating ? userRating - 1 : userRating
    );
  };
  return (
    <div className="flex gap-5">
      <span className="flex cursor-pointer">
        {Array.from({ length: maxRating }, (_, idx) => (
          <div
            key={idx}
            onClick={() => handleRating(idx + 1)}
            onMouseEnter={() => setHoverRating(idx + 1)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {idx < (hoverRating || rating) ? (
              <StarIconSolid className={className} />
            ) : (
              <StarIconOutline className={className} />
            )}
          </div>
        ))}
      </span>
      <span className={className}>
        {message.length === maxRating
          ? message[hoverRating ? hoverRating - 1 : rating - 1]
          : hoverRating || rating || ""}
      </span>
    </div>
  );
};

export default StarRating;
