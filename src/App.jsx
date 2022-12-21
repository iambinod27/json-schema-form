import data from "../data.json";

const App = () => {
  const db = data.properties;
  const dbArr = Object.entries(db);

  console.log(dbArr);
  return (
    <>
      <h1></h1>
      <form>
        {dbArr.map((item, i) => {
          return (
            <>
              <div key={i}>
                <label>{item[0]}</label>
                <input type={item[1].type} minLength={item[1].minLength} />
              </div>
            </>
          );
        })}
      </form>
    </>
  );
};

export default App;
