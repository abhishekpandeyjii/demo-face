import { Link } from 'react-router-dom';

export default function Button({ children, to, href, variant = 'primary', size, icon, className = '', onClick, type = 'button', ...props }) {
  const baseClass = variant === 'outline' ? 'btn-outline-custom' : 'btn-primary-custom';
  const sizeClass = size === 'sm' ? 'btn-sm' : '';
  const classes = `${baseClass} ${sizeClass} ${className}`.trim();

  // Internal link
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {icon && <i className={icon}></i>}
      </Link>
    );
  }

  // External link

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        {icon && <i className={icon}></i>}
      </a>
    );
  }

  // Button
  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
      {icon && <i className={icon}></i>}
    </button>
  );
}


