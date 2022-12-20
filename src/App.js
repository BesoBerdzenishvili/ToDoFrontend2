import { useState, useEffect } from "react";
function App() {
  const [workouts, setWorkouts] = useState([]);

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
      <h1>Test Data fetch</h1>
      {workouts && workouts.map((i) => <p key={i._id}>{i.text}</p>)}
    </div>
  );
}

export default App;
