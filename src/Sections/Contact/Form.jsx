import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import db from "../../db";
import { RightForm } from "./style";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 230,
      marginBottom: "24px",
    },
  },
}));
const Form = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const classes = useStyles();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        Email: Email,
        Message: Message,
      })
      .then(() => {
        // alert("your message submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <RightForm>
      <h6> Get in touch our services online </h6>
      <h4> Ready to get Started? Let's created something extraordinary </h4>
      <p>
        Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu
        non diam phasellus. Scelerisque felis imperdiet proin fermentum leo.
        Amet volutpat consequat mauris nunc congue..
      </p>
      <form
        action="submit"
        onSubmit={handleSignUp}
        className={classes.root}
        id="Contact"
      >
        <TextField
          label="your name"
          variant="outlined"
          onChange={handleName}
          value={name}
          required
        />
        <TextField
          label="your Email"
          variant="outlined"
          onChange={handleEmail}
          value={Email}
          required
        />
        <br />
        <textarea
          name="Message"
          id="Message"
          cols="65"
          rows="10"
          onChange={handleMessage}
          value={Message}
        />
        <br />
        <button> Send a Message </button>
      </form>
    </RightForm>
  );
};

export default Form;
