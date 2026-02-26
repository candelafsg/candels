import './dropdown.css';
import { CircleArrowDown, CircleArrowUp } from 'lucide-react';
import { useState } from 'react';

export const DropdownButton = ({ children, options }) => {
  const [open, setOpen] = useState(false);
  const isArray = Array.isArray(options);
  const isString = typeof options === 'string';
  const isLink =
    isString && (options.startsWith('http') || options.startsWith('www'));

  return (
    <div className="dropdown-wrapper">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {children}
        {open ? <CircleArrowUp /> : <CircleArrowDown />}
      </button>

      {open && (
        <div className="dropdown-content">
          {isArray ? (
            <ul className="dropdown-list">
              {options.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : isLink ? (
            <a
            style={{marginTop:'1rem'}}
              href={
                options.startsWith('http') ? options : `https://${options}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-link"
            >
              {options}
            </a>
          ) : (
            <p>{options}</p>
          )}
        </div>
      )}
    </div>
  );
};
