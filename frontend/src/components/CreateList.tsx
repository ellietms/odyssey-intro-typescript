import { useEffect, useState, type JSX } from "react";
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router";

import { CREATE_NEW_LIST } from "../gql/createList.gql";

export const CreateList = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [cost, setCost] = useState<number>(0);
  const [bedNumber, setBedNumber] = useState<number>(0);
  const [amenitiesId, setAmenitiesId] = useState<string[]>([]);
  const [sucess, setSuccess] = useState(false);

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
    setTitle(event.target.value);
  };

  const handleCost = (event) => {
    setCost(Number(event.target.value));
  };

  const handleBedNumber = (event) => {
    setBedNumber(Number(event.target.value));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await createListing({
        variables: {
          newListing: {
            title,
            description: `My home-${randomNum}`,
            costPerNight: cost,
            numOfBeds: bedNumber,
            closedForBookings: false,
            amenities: amenitiesId,
          },
        },
      });

      console.log(">>  after successfully submission", result);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const handleSelect = (event) => {
    event.preventDefault();
    setAmenitiesId([...new Set([...amenitiesId, event.target.value])]);
  };

  useEffect(() => {
    if (data) {
      setSuccess(true);
    }

    console.log(amenitiesId);
  }, [data, amenitiesId]);

  return (
    <div>
      {loading && <p>Submitting…</p>}
      {error && <p>Error: {error.message}</p>}
      {sucess && (
        <>
          <p> Form is submitted successfully</p>
          <p> Submitted Data: {JSON.stringify(data)}</p>
        </>
      )}
      {!sucess && (
        <>
          <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
            <label htmlFor="title"> Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
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
              value={bedNumber}
              onChange={handleBedNumber}
            ></input>
            <label htmlFor="cost"> Cost per night:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={cost}
              onChange={handleCost}
            ></input>
            <button type="submit">Submit</button>
          </form>
          <br />
          <p>title: {title}</p>
          <p> bed numbers: {bedNumber}</p>
          <p>cost : {cost}</p>
        </>
      )}
    </div>
  );
};
