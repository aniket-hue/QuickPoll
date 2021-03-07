import React from "react";
import styles from "./Links.styles";
import Alert from "@material-ui/lab/Alert";
import { TextField, Typography, Button } from "@material-ui/core";

const Links = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    const idTemp = history.location.pathname.split("/")[2];
    console.log(idTemp);
    setId(idTemp);
  }, [history]);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Alert severity="success" style={styles.alert}>
          <strong> All Set!</strong> Your poll is waiting. Share your poll here
          →
        </Alert>
        <Alert severity="info" style={styles.alert}>
          <strong>Take Note. </strong>It is important that you copy the links
          below for future reference
        </Alert>
        <div style={styles.linksBox}>
          <Typography style={styles.linkTitle}>Take Poll</Typography>
          <div style={styles.linkBox}>
            <Typography
              style={styles.links}
            >{`http://www.quikpoll.com/poll/${id}`}</Typography>
          </div>
        </div>
        <div style={styles.linksBox}>
          <Typography style={styles.linkTitle}>View Results</Typography>
          <div style={styles.linkBox}>
            <Typography
              style={styles.links}
            >{`http://www.quikpoll.com/poll/${id}/result`}</Typography>
          </div>
        </div>
        <div style={styles.linksBox}>
          <Typography style={styles.linkTitle}>Edit Poll</Typography>
          <div style={styles.linkBox}>
            <Typography
              style={styles.links}
            >{`http://www.quikpoll.com/poll/${id}/edit`}</Typography>
          </div>
        </div>
        <Typography style={styles.linkTitle}>
          Don't want to lose these links? Email these to yourself.
        </Typography>
        <TextField
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          value={email}
          style={styles.emailBox}
        />
        <Button
          variant="contained"
          style={{ ...styles.createButt, backgroundColor: "#4caf50" }}
        >
          Send E-mail
        </Button>
      </div>
    </div>
  );
};

export default Links;
