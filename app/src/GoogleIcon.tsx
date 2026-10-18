const GoogleIcon = ({ size = 32, ...props }) => {
  const googlePath =
    "M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="-380.25 274.7 65.8 65.8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#e0e0e0" cx="-347.3" cy="307.6" r="32.9" />
      <circle fill="#fff" cx="-347.3" cy="307.1" r="32.4" />

      <defs>
        <clipPath id="google-icon-clip">
          <path d={googlePath} />
        </clipPath>
      </defs>

      <g clipPath="url(#google-icon-clip)">
        <path fill="#fbbc05" d="M-370.8 320.3v-26l17 13z" />
        <path fill="#ea4335" d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z" />
        <path fill="#34a853" d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z" />
        <path fill="#4285f4" d="M-322.8 331.3l-31-24-4-3 35-10z" />
      </g>
    </svg>
  );
};

export default GoogleIcon;
