import { Rating } from "@/types/rating";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleRating = ({ rating }: { rating: Rating }) => {
  const { platform, icon, account, star, reviews, storeLink } = rating;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full rounded-xl">
      <div className="shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="border-body-color/10 text-body-color mb-3 text-2xl leading-relaxed font-black dark:border-white/10 dark:text-white">
          {star} / 5
        </p>
        <p className="border-body-color/10 text-body-color mb-8 border-b pb-3 text-base leading-relaxed dark:border-white/10 dark:text-white">
          {reviews} Ulasan
        </p>
        <a
          href={storeLink}
          target="_blank"
          rel="nofollow noreferrer"
          className="relative h-10 w-full opacity-100 transition hover:opacity-60 dark:opacity-100 dark:hover:opacity-60"
        >
          <div className="flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden">
              <Image src={icon} alt={platform} fill />
            </div>
            <div className="w-full">
              <h3 className="text-dark mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
                {platform}
              </h3>
              <p className="text-body-color text-sm">{account}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SingleRating;
