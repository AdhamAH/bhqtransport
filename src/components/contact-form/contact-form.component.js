import React from "react";
import Icon from "@mdi/react";
import { mdiAccountArrowLeft, mdiDomain, mdiEmail, mdiSend, mdiMessage, mdiAccountArrowRight } from "@mdi/js";
import {
  TextField,
  FormHelperText,
  Button,
  TextareaAutosize,
  Paper,
} from "@material-ui/core";
import './contact-form.scss'

const ContactForm = () => (
  <div>
<Paper className="form"
>

<form method="POST" action="/contact">
<div
  htmlFor="lastName"

>
  <Icon path={mdiAccountArrowLeft} size={2} color="red" />
  <TextField variant="outlined" name="lastName" label="Achternaame" />
</div>
<div
  htmlFor="firstName"
>
  <Icon path={mdiAccountArrowRight} size={2} color="red" />
  <TextField variant="outlined" name="firstName" label="Voornaame" required />
</div>
<div
  htmlFor="email"
>
  <Icon path={mdiEmail} size={2} color="red" />

  <TextField type="email" name='email' variant="outlined" label="Email" required />

  <FormHelperText
    id="my-helper-text"
  >
    Wij gebruiken uw email allen te antworeden
    </FormHelperText>
</div>
<div
  htmlFor="company"
>
  <Icon path={mdiDomain} size={2} color="red" />
  <TextField variant="outlined" name="company" label="Bedrijf" />
</div>
<div
  htmlFor="message"
>

  <Icon path={mdiMessage} size={2} color="red" />

  <TextareaAutosize required aria-label="minimum height" rowsMin={5} style={{
    width: '195px',
    color: 'grey',
    borderRadius: '5px'
  }} placeholder="uw briecht hier" />
</div>
<Button
  style={{
    width: '200px',
    backgroundColor: 'red',
    margin: "25px",
    color: 'white',
    fontSize: '1.2rem',
  }}
  variant="contained"
  endIcon={<Icon path={mdiSend} size={1} color="white"></Icon>}
  type="submit"
>
  Stuur!
</Button>
</form>
</Paper>
  </div>
);

export default ContactForm;
