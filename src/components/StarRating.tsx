export default function StarRating({ rating }: StarRatingProps) {
    const totalStars = 5;
    const filledStars = Math.floor(rating);

    return (
        <div className="flex items-center gap-1">
            {[...Array(totalStars)].map((_, index) => (
                <img
                    key={index}
                    src={`/assets/images/icons/Star ${index < filledStars ? '1' : '5'}.svg`}
                    className="w-5 h-5"
                    alt="star"
                />
            ))}
        </div>
    );
}

interface StarRatingProps {
    rating: number;
}