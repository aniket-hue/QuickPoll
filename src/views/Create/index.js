import { TextField, Typography, Button } from "@material-ui/core";
import React from "react";
import styles from "./Create.styles.js";
import { useForm } from "../../useForm";
import firebase from "../../firebase";
import { withRouter } from "react-router";

const Create = ({ history }) => {
  const [values, setValues] = useForm({ title: "", date: "", email: "" });
  const [options, setOptions] = React.useState([]);

  const inputHandler = (e) => {
    setValues(e);
  };

  const addOption = () => {
    setOptions([
      ...options,
      {
        id: options.length + 1,
        optionName: "",
      },
    ]);
  };

  const optionHandler = (e) => {
    let option = options.filter(({ id }) => id !== Number(e.target.name));
    console.log(option);
    const opt = [
      ...option,
      {
        id: Number(e.target.name),
        optionName: e.target.value,
        value: 0,
      },
    ];
    // console.log(opt);
    setOptions(opt);
  };

  const submitPoll = async () => {
    try {
      const res = await firebase
        .firestore()
        .collection("polls")
        .add({ ...values, options });
      history.push(`/links/${res.id}`);
    } catch (error) {
      console.log("Gaand Lag gayi");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Typography style={styles.title} variant="h3">
          New Poll
        </Typography>
        <div style={styles.createBox}>
          <Typography style={styles.pollFields}>Title</Typography>
          <TextField
            name="title"
            value={values.title}
            style={styles.TextField}
            fullWidth={true}
            variant="outlined"
            onChange={inputHandler}
          />
          <Typography style={styles.pollFields}>Expiration Date</Typography>
          <TextField
            name="date"
            type="date"
            value={values.date}
            style={styles.TextField}
            fullWidth={true}
            variant="outlined"
            onChange={inputHandler}
          />
          <Typography style={styles.pollFields}>E-mail</Typography>
          <TextField
            name="email"
            type="email"
            value={values.email}
            style={styles.TextField}
            fullWidth={true}
            variant="outlined"
            onChange={inputHandler}
          />
          {options.map((e, index) => (
            <TextField
              name={e.id}
              style={styles.TextField}
              value={e.optionName}
              placeholder={`Option ${index + 1}`}
              fullWidth={true}
              variant="outlined"
              onChange={optionHandler}
            />
          ))}
          <div style={styles.buttonGroup}>
            <Button
              variant="contained"
              style={{ ...styles.createButt, backgroundColor: "#7f7fff" }}
              onClick={addOption}
            >
              Add Option
            </Button>
            <div style={{ display: "flex", flexGrow: 1 }}></div>
            <Button
              variant="contained"
              style={{ ...styles.createButt, backgroundColor: "#4caf50" }}
              onClick={submitPoll}
            >
              Create Poll
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Create);
