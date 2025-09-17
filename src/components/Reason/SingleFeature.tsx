import { Reason } from "@/types/reason";

const SingleReason = ({ reason }: { reason: Reason }) => {
  const { image, title, paragraph } = reason;
  return (
    <div className="w-full bg-primary rounded-xl">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-5 flex h-[300px] w-full items-center justify-center rounded-md">
          <img src={image} alt="feature" className="w-full h-full object-cover rounded-t-md" />
        </div>
        <h3 className="text-xl font-bold px-5 mb-5 text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color px-5 pb-5 text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleReason;
