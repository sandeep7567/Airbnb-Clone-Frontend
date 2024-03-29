import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "@/redux/slice/modal-login-slice";
import { RootState } from "@/redux/store";

export const useHosting = () => {
  const { data: isAuth } = useSelector(
    (state: RootState) => state.authentication
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHosting = useCallback(() => {
    !!isAuth ? navigate("/host/new") : dispatch(onOpen());
  }, [isAuth, dispatch, navigate]);

  return {handleHosting};
};
