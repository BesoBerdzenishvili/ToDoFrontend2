import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("/api/tasks", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      ).json();

      // set state when the data received
      setWorkouts(data);
    };

    dataFetch();
  }, []);
  console.log(workouts);

  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>data!</button> */}
      <button onClick={increase}>Click!</button>
      <p>{count}</p>
      {workouts && workouts.map((i) => <p key={i._id}>{i.text}</p>)}
    </div>
  );
}

export default App;
