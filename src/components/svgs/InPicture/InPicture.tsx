import { SVGProps, forwardRef } from 'react';

export const Inpicture = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (
    { className, viewBox = '0 0 24 24', fill = 'none', xmlns = 'http://www.w3.org/2000/svg', ...restProps },
    forwardedRef
  ) => {
    return (
      <svg
        ref={forwardedRef}
        viewBox={viewBox}
        fill={fill}
        xmlns={xmlns}
        className={className}
        {...restProps}
      >
        <path d="M20 12H14V17H20V12Z" fill="currentColor" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6ZM3 6H21V18H3L3 6Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);

Inpicture.displayName = 'Inpicture';
