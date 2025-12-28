import { IIcon } from "../interface";

export const MessageIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  style,
  ...props
}: IIcon) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.66667 23.6667H9C3.66667 23.6667 1 22.3333 1 15.6667V9C1 3.66667 3.66667 1 9 1H19.6667C25 1 27.6667 3.66667 27.6667 9V15.6667C27.6667 21 25 23.6667 19.6667 23.6667H19C18.5867 23.6667 18.1867 23.8667 17.9333 24.2L15.9333 26.8667C15.0533 28.04 13.6133 28.04 12.7333 26.8667L10.7333 24.2C10.52 23.9067 10.0267 23.6667 9.66667 23.6667Z"
      stroke="#4A90E2"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
