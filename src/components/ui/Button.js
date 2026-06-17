import React from 'react';

const Button = ({ variant = 'primary', children, onClick, href, className = '' }) => {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <button className={cls} onClick={onClick}>{children}</button>;
};

export default Button;
