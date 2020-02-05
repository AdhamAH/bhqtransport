import React from "react";

import {
  MdMailOutline,
  MdAvTimer,
  MdPhonelinkRing,
  MdMyLocation,
  MdWork
} from "react-icons/md";

import "./informatie.scss";
import { Grid, Paper } from "@material-ui/core";

const Infromatie = () => (
  <Grid component='div' justify='space-around' xs='12' container className="informatie">
  
    <Grid item md='4' sm='6' className="img">
    
    </Grid>
    <Grid component='div' item md='4' sm='6' className="info-in">
      <Paper className="icons-box">
        <p>
          <MdAvTimer className="info-icons" />
          <span className="text">Openingstijden 24/7</span>
        </p>
        <p>
          <MdMailOutline className="info-icons" />
          <a className="text" href="mailto: info@bhqtransport.nl">
            info@bhqtransport.nl
          </a>
        </p>
        <p>
          <MdPhonelinkRing className="info-icons" />
          <a className="text" href="tel: +31 6 21301021">
            +31 6 21301021
          </a>
          </p>
          <p>
            <MdMyLocation className="info-icons" />
            <span className="text">
              Amalia van Solmsplein (3)
              7242 AC Lochem
              </span>
              </p>
          <p>
            <MdWork className="info-icons" />
            <span className="text">Kvk nummer: 76449297
              </span>
              </p>
          </Paper>
    </Grid>
  </Grid>
);

export default Infromatie;
