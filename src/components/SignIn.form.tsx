import React from "react";

const TextFieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxSizing: "border-box",
  marginBottom: "10px",
  textAlign: "center",
  fontSize: 20,
};

const SigninForm: React.FC = () => {
  const [phone, setPhone] = React.useState<string>("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <h1
        style={{
          fontSize: 24,
        }}
      >
        היי, מה מספר הטלפון?
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minWidth: 100,
          margin: "0 auto",
        }}
      >
        <input type="tel" onChange={handlePhoneChange} style={TextFieldStyle} />
        {phone.length === 10 && (
          <React.Fragment>
            <div
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <input
                type="text"
                name="firstname"
                placeholder="שם פרטי"
                style={TextFieldStyle}
              />
              <input
                type="text"
                name="lastname"
                placeholder="שם משפחה"
                style={TextFieldStyle}
              />
            </div>
            <input
              type="password"
              name="password"
              placeholder="סיסמה"
              style={TextFieldStyle}
            />
          </React.Fragment>
        )}
        <button
          type="submit"
          disabled={phone.length < 10}
          style={{
            backgroundColor: phone.length < 10 ? "#ccc" : "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            border: "none",
            boxSizing: "border-box",
            transition: "background-color 0.3s ease-in-out",
            fontSize: 20,
          }}
        >
          שלח
        </button>
      </form>
    </React.Fragment>
  );
};

export default SigninForm;
