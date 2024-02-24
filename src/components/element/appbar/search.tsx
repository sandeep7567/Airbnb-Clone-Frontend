import { Search as SearchIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { STEPS, onOpen, setStep } from "@/redux/slice/modal-search-slice";
import { AppDispatch } from "@/redux/store";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { Action } from "@reduxjs/toolkit";

export const Search = () => {
  const dispatch = useDispatch<AppDispatch>(); // Specify the dispatch type explicitly

  const handleSearch = (
    step: number
  ): ThunkAction<void, RootState, unknown, Action<string>> => {
    return (dispatch) => {
      // Return a thunk function
      dispatch(onOpen());
      dispatch(setStep(step));
    };
  };

  return (
    <div className="bg-white shadow border hover:shadow-md rounded-3xl m-0 lg:ml-36 p-1.5 text-center w-full md:w-fit">
      <div className="flex justify-between items-center gap-4 flex-1">
        <div className="flex-1 flex justify-between items-center ml-3">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(handleSearch(STEPS.LOCATION))}
          >
            Anywhere
          </div>
          <div className="w-0.5 mx-2 h-4 bg-muted-foreground/50 " />
          <div
            className="cursor-pointer"
            onClick={() => dispatch(handleSearch(STEPS.DATE))}
          >
            Any week
          </div>
          <div className="w-0.5 mx-2 h-4 bg-muted-foreground/50" />
          <div
            className="cursor-pointer"
            onClick={() => dispatch(handleSearch(STEPS.INFO))}
          >
            Add guests
          </div>
        </div>
        <div
          className="bg-destructive p-2 rounded-full cursor-pointer"
          onClick={() => dispatch(handleSearch(STEPS.LOCATION))} // Assuming a default step here
        >
          <SearchIcon size={20} color="white" className="font-bold" />
        </div>
      </div>
    </div>
  );
};
