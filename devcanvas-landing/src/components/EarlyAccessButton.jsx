import { FiMail } from "react-icons/fi";

export default function EarlyAccessButton() {
  const url =
    "https://docs.google.com/forms/d/e/1FAIpQLSecen0_C2Wk0jPGEojzCLFlPgpRxJLJYxBtnKP2yf1r_BN0Lg/viewform?usp=publish-editor";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex sujoy02 items-center gap-2 px-5 py-3 border border-blue-600 text-blue-600 bg-white rounded-lg font-medium hover:bg-blue-50 transition"
    >
      <FiMail size={18} />
      Get Early Access
    </a>
  );
}
