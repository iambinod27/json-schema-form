import { useState } from "react";
import data from "../data.json";
import React from "react";

const App = () => {
  const [values, setValues] = useState();
  const db = data.properties;
  const dbArr = Object.entries(db);
  const field = Object.keys(data.properties)
  React.useEffect(() => {
    const defaultElement = {}
    for (var key in db) {
      const a = Object.keys(db)
      console.log(key)
      Object.assign(defaultElement, {[key]: '' });
    }
    setValues(defaultElement)
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e, item) => {
    const title = e.target.title;
    const value = e.target.value;
    setValues({ ...values, [item[0]]: value });
  };

  return (
    <>
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
                        onChange={(e) => handleChange(e,item)}
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
