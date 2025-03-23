import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  className = "",
  onClick,
}) => {
  const classes = `btn btn-primary ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={classes} onClick={onClick}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  className = "",
}) => {
  const classes = `btn btn-outline ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={classes}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
