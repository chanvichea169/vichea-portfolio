import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rouunded-lg overflow-hidden w-12 h-12 group-hover:bg-zinc-900 transition-colors">
        <img
          src={imgSrc}
          width={46}
          height={46}
          alt={label}
          className="text-zinc-50"
        />
      </figure>
      <div>
        <h3>{label}</h3>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
