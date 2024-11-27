import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <div className="my-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;
