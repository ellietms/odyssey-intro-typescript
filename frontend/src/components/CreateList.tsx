import { useMutation } from "@apollo/client/react";
import { useState, type JSX } from "react";
import { CREATE_NEW_LIST } from "../gql/createList.gql";

export const CreateList = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [cost, setCost] = useState<number>(0);
  const [bedNumber, setBedNumber] = useState<number>(0);

  const [createListing, { loading, error }] = useMutation(CREATE_NEW_LIST);

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
      await createListing({
        variables: {
          newListing: {
            listing: {
              title,
              costPerNight: cost,
              numOfBeds: bedNumber,
            },
          },
        },
      });
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
        {loading && <p>Submitting…</p>}
        {error && <p>Error: {error.message}</p>}
        <label htmlFor="title"> Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        ></input>
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
      <p>cost : {cost}</p>
      <p> bed numbers: {bedNumber}</p>
    </div>
  );
};
