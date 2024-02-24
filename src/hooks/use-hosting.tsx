import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { onOpen } from "@/redux/slice/modal-login-slice";

export const useHosting = () => {
  const isAuth = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHosting = useCallback(() => {
    isAuth ? navigate("/host/new") : dispatch(onOpen());
  }, [isAuth, dispatch, navigate]);

  return {handleHosting};
};
