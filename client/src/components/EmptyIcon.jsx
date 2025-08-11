import { MdInbox } from "react-icons/md";

const EmptyIcon = ({ message = "Empty Data" }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400">
    <MdInbox size={64} />
    <span className="mt-4 text-lg">{message}</span>
  </div>
);

export default EmptyIcon;