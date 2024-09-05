
export const SmilingFaceIcon=({ className }: { className: string }) => {
  return (
    <svg className={className} 
      viewBox="0 0 24 24"
    >
      <g fill="none" strokeLinejoin="round">
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeLinecap="round"
          strokeWidth="1.5"
        ></circle>
        <path
          strokeWidth="2.25"
          d="M9.01 9.5v.01H9V9.5zm6 0v.01H15V9.5z"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M15.465 14A4 4 0 0 1 12 16a4 4 0 0 1-3.465-2"
        ></path>
      </g>
    </svg>
  );
}
