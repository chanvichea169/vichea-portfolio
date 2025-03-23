import PropTypes from "prop-types";

const ratings = Array.from({ length: 5 }, () => ({
  icon: "star",
  style: {
    fontVariationSettings: '"FILL" 1',
  },
}));

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex gap-1 mb-4 items-center">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-400 mb-8">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img src={imgSrc} alt={name} width={64} height={64} loading="lazy" />
        </figure>
        <div className="">
          <h3 className="text-zinc-400 text-sm tracking-wide">{name}</h3>
          <p className="">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
