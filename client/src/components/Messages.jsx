import { CheckCircle, XCircle } from "lucide-react";

// eslint-disable-next-line react/prop-types
const SuccessMessage = ({ message }) => (
  <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
    <CheckCircle className="h-5 w-5 mr-2" />
    {message}
  </div>
);
export { SuccessMessage };

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ message }) => (
  <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
    <XCircle className="h-5 w-5 mr-2" />
    {message}
  </div>
);
export { ErrorMessage };
