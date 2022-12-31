import { useEffect, useState } from "react";
import data from "../data.json";

const App = () => {
  const [values, setValues] = useState();

  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const db = data.properties;
  const dbArr = Object.entries(db);

  useEffect(() => {
    const defaultElement = {};

    for (let key in db) {
      Object.assign(defaultElement, { [key]: "" });
    }

    setValues(defaultElement);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e, item) => {
    const value = e.target.value;

    if (e.target.value == "") {
      setError(true);
    } else {
      setError(false);
      setValues({ ...values, [item[0]]: value });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                      key={i}
                      type={item[1].type}
                      minLength={item[1].minLength}
                      title={item[1].title}
                      onChange={(e) => handleChange(e, item)}
                    />
                    {error ? (
                      <div className="error-msg">{item[1].description}</div>
                    ) : (
                      ""
                    )}
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
  );
};

export default App;
