/* eslint-disable react/prop-types */
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { token, BASE_URL } from "../../config";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const { data: userData } = useGetProfile(`${BASE_URL}/workers/profile/me`);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const deleteHandler = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`${BASE_URL}/workers/${userData._id}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      toast.success(message);
      dispatch({ type: "LOGOUT" });
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white  transition-all hover:bg-gray-700"
          >
            Logout
          </button>
          <button
            className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white transition-all hover:bg-red-800"
            onClick={deleteHandler}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
