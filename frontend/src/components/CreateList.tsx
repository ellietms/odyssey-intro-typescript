import { useMutation } from "@apollo/client/react";
import { useEffect, useState, type JSX } from "react";
import { CREATE_NEW_LIST } from "../gql/createList.gql";

export const CreateList = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [cost, setCost] = useState<number>(0);
  const [bedNumber, setBedNumber] = useState<number>(0);
  const [sucess, setSuccess] = useState(false);

  let randomNum = Math.floor(Math.random() * 100) + 11;

  const [createListing, { data, loading, error }] = useMutation(
    CREATE_NEW_LIST,
    {
      onCompleted: (data) => {
        console.log("Mutation completed successfully!", data);
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
            amenities: ["listing-5"],
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
      setSuccess(true);
    }
  }, [data]);

  return (
    <div>
      {loading && <p>Submitting…</p>}
      {error && <p>Error: {error.message}</p>}
      {sucess && <p> Form is submitted successfully</p>}
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
        </>
      )}
    </div>
  );
};
