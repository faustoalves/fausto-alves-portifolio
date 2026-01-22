import * as React from 'react'

export type IconProps = React.SVGProps<SVGSVGElement> & { title?: string }

const TailwindFill = ({ title, ...props }: IconProps) => (
  <svg
    width="1em"
    height="1em"
    {...props}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title ? <title>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M229 331.6C251.796 240.403 308.804 194.8 400 194.8C536.8 194.8 553.9 297.4 622.3 314.5C667.904 325.903 707.8 308.803 742 263.2C719.204 354.396 662.196 400 571 400C434.2 400 417.1 297.4 348.7 280.3C303.096 268.896 263.2 285.996 229 331.6ZM58 536.8C80.7964 445.603 137.804 400 229 400C365.8 400 382.9 502.6 451.3 519.7C496.904 531.103 536.8 514.003 571 468.4C548.204 559.596 491.196 605.2 400 605.2C263.2 605.2 246.1 502.6 177.7 485.5C132.096 474.096 92.2 491.196 58 536.8Z"
      fill="url(#paint0_linear_84_353)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_84_353"
        x1="58"
        y1="-169.997"
        x2="742"
        y2="969.996"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2383AE" />
        <stop offset="1" stopColor="#6DD7B9" />
      </linearGradient>
    </defs>
  </svg>
)

export default TailwindFill
