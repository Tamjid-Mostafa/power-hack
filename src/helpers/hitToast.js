import { toast } from "react-toastify";

const HitToast = (variant, message) => {
    toast[`${variant}`](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export default HitToast;