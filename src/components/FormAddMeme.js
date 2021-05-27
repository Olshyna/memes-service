import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { Box } from "@material-ui/core";

import { addMeme } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 560,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
  },
  form: {
    padding: 15,
  },
  textField: {
    marginBottom: 20,
  },
}));

const defaultValues = {
  title: "",
  author: "",
  img: "",
};

const FormAddMeme = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const fields = [
    {
      nameField: "Title*",
      id: "title",
      helperText: "Add a title to your meme",
    },
    { nameField: "Name*", id: "author", helperText: "Add your name" },
    {
      nameField: "Link*",
      id: "img",
      helperText: "Enter URL link to the image",
    },
  ];

  const FormField = fields.map(({ nameField, id, helperText }) => (
    <Box key={id}>
      <label>{nameField}</label>
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            required
            fullWidth
            id={id}
            variant="outlined"
            helperText={helperText}
            value={value}
            onChange={onChange}
            className={classes.textField}
          />
        )}
      />
    </Box>
  ));

  const onSubmit = ({ title, author, img }) => {
    dispatch(addMeme({ title, author, img }));
    setMessage("Meme has been added");
    reset();
  };

  const closeMessage = (
    <Button color="secondary" size="small" onClick={() => setMessage("")}>
      lorem ipsum dolorem
    </Button>
  );

  return (
    <Card className={classes.root}>
      <CardHeader title="Add meme" />

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        {FormField}
        <Box>
          <Button
            type="reset"
            variant="contained"
            fullWidth
            onClick={() => reset()}
            style={{ marginBottom: 20 }}
          >
            reset form
          </Button>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            submit
          </Button>
        </Box>
      </form>
      {message ? (
        <SnackbarContent message={message} action={closeMessage} />
      ) : null}
    </Card>
  );
};

export default FormAddMeme;
