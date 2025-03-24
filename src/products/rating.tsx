import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
  ratingCount: number;
};
const Rating: React.FC<RatingProps> = ({ rating, ratingCount }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  return (
    <div className="flex space-y-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const fillWidth =
            i < fullStars
              ? "100%"
              : i === fullStars
              ? `${decimalPart * 100}%`
              : "0%";

          return (
            <div key={i} className="relative w-4 h-4 sm:w-6 sm:h-6">
              {/* Background star (outline) */}
              <Star
                className="absolute text-gray-400 w-4 h-4 sm:w-6 sm:h-6"
                strokeWidth={1}
              />
              {/* Foreground star (fill) */}
              <div
                className="absolute overflow-hidden"
                style={{ width: fillWidth }}
              >
                <Star
                  className="text-yellow-500 w-4 h-4 sm:w-6 sm:h-6"
                  strokeWidth={1}
                  fill="currentColor"
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs sm:text-md">({ratingCount})</p>
    </div>
  );
};

export default Rating;
