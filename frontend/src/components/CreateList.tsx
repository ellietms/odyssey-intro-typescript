import { useEffect, useReducer, type JSX } from "react";
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router";

import { CREATE_NEW_LIST } from "../gql/createList.gql";

export const CreateList = (): JSX.Element => {
  const initialState = {
    title: "",
    cost: 0,
    bedNumber: 0,
    amenitiesId: [],
    sucess: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_Title":
        return { ...state, title: action.title };
      case "COST":
        return { ...state, cost: action.cost };
      case "BEDROOM":
        return { ...state, bedNumber: action.bedNumber };
      case "AMENITIES":
        return { ...state, amenitiesId: action.amenitiesId };
      case "SUCCESS":
        return { ...state, sucess: action.sucess };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  let randomNum = Math.floor(Math.random() * 100) + 11;

  const navigate = useNavigate();

  const [createListing, { data, loading, error }] = useMutation(
    CREATE_NEW_LIST,
    {
      onCompleted: (data) => {
        console.log(">> COMPLETE!", data);
        setTimeout(() => {
          navigate("/");
        }, 1800);
      },
    },
  );

  const handleTitle = (event) => {
    dispatch({ type: "ADD_Title", title: event.target.value });
  };

  const handleCost = (event) => {
    dispatch({ type: "COST", cost: Number(event.target.value) });
  };

  const handleBedNumber = (event) => {
    dispatch({ type: "BEDROOM", bedNumber: Number(event.target.value) });
  };

  const handleSelect = (event) => {
    event.preventDefault();
    dispatch({
      type: "AMENITIES",
      amenitiesId: [...new Set([...state.amenitiesId, event.target.value])],
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await createListing({
        variables: {
          newListing: {
            title: state.title,
            description: `My home-${randomNum}`,
            costPerNight: state.cost,
            numOfBeds: state.bedNumber,
            closedForBookings: false,
            amenities: state.amenitiesId,
          },
        },
      });

      console.log(">>  after successfully submission", result);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  useEffect(() => {
    if (data) {
      dispatch({ type: "SUCCESS", sucess: true });
    }

    console.log(state.amenitiesId);
  }, [data, state.amenitiesId]);

  return (
    <div>
      {loading && <p>Submitting…</p>}
      {error && <p>Error: {error.message}</p>}
      {state.sucess && (
        <>
          <p> Form is submitted successfully</p>
          <p> Submitted Data: {JSON.stringify(data)}</p>
        </>
      )}
      {!state.sucess && (
        <>
          <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={state.title}
              onChange={handleTitle}
            ></input>
            <select
              name="amenitiesId"
              id="amenitiesId"
              onChange={(event) => handleSelect(event)}
            >
              <option value="am-1">am-1</option>
              <option value="am-2">am-2</option>
              <option value="am-11">am-11</option>
              <option value="am-10">am-10</option>
              <option value="am-24">am-24</option>
              <option value="am-25">am-25</option>
              <option value="am-26">am-26</option>
              <option value="am-23">am-23</option>
            </select>
            <label htmlFor="bedNum"> Bed Numbers: </label>
            <input
              type="number"
              id="bedNum"
              name="bedNum"
              value={state.bedNumber}
              onChange={handleBedNumber}
            ></input>
            <label htmlFor="cost"> Cost per night:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={state.cost}
              onChange={handleCost}
            ></input>
            <button type="submit">Submit</button>
          </form>
          <br />
          <p>title: {state.title}</p>
          <p> bed numbers: {state.bedNumber}</p>
          <p>cost : {state.cost}</p>
        </>
      )}
    </div>
  );
};
