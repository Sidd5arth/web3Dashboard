import { Toaster } from "react-hot-toast";

function ToasterProvider() {
  return (
    <div>
      <Toaster toastOptions={{ className: "dark-toast" }} />
    </div>
  );
}

export default ToasterProvider;
