"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface SuccessMessageProps {
  message: string;
  show: boolean;
}

export default function SuccessMessage({ message, show }: SuccessMessageProps) {
  return (
    <div
      className={`success-message fixed top-5 right-5 z-[1000] bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition-transform duration-300 ${
        show ? "translate-x-0" : "translate-x-[400px]"
      }`}
      role="alert"
      aria-live="polite"
    >
      <FontAwesomeIcon icon={faCheck} className="mr-2" />
      {message}
    </div>
  );
}
