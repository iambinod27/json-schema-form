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

    const { firstName, lastName, telephone, date } = values;

    if (firstName == "" || lastName == "" || telephone == "" || date == "") {
      setError(true);
      setErrMsg("Empty Inputs submitted");
      console.log("hello");
    }

    setError(false);
  };

  const handleChange = (e, item) => {
    const value = e.target.value;
    setValues({ ...values, [item[0]]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form-container">
          <div className="form-border">
            <h3>{data.title}</h3>
            {error ? <div className="error-msg">{errMsg}</div> : ""}
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
