import { JSX } from 'react';

const Mail = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 30 30"
    fill="fff"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.077 10.923l0.808-0.808 8.615 7.385 8.615-7.385 0.808 0.808-9.423 8.077-9.423-8.077zM6.004 8c-1.107 0-2.004 0.895-2.004 1.994v12.012c0 1.101 0.89 1.994 2.004 1.994h20.993c1.107 0 2.004-0.895 2.004-1.994v-12.012c0-1.101-0.89-1.994-2.004-1.994h-20.993z"></path>
  </svg>
);

export default Mail;
