import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors cursor-pointer" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-s-lg mb-4">
        <img
          src={imgSrc}
          width={40}
          height={40}
          alt={title}
          loading="lazy"
          className="img-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <div>
            <h3 className="title-1 mb-3">{title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-8 h-8 rounded-lg grid place-items-center bg-sky-500 text-zinc-200 shrink-0">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>

          <a
            href={projectLink}
            target="_blank"
            className="absolute inset-0"
          ></a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};
export default ProjectCard;
