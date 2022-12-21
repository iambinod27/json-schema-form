import data from "../data.json";

const App = () => {
  const db = data.properties;
  const dbArr = Object.entries(db);

  console.log(dbArr);
  return (
    <>
      <h1></h1>
      <form>
        <div className="container">
          <div className="form-container">
            <div className="form-border">
              <h3>{data.title}</h3>
              {dbArr.map((item, i) => {
                return (
                  <>
                    <div key={i} className="input-l">
                      <label>{item[0]}</label>
                      <input
                        type={item[1].type}
                        minLength={item[1].minLength}
                      />
                    </div>
                  </>
                );
              })}

              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default App;
