import React from 'react';
import ContactForm from '../../components/contact-form/contact-form.component';
import './contactpage.scss'
import { Divider, Grid,} from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmail } from "@mdi/js";
const Contact=()=>(
    <Grid container component='div' className='contact-page'>
    <Grid xs='12' className='ima'></Grid>
    
    <Grid container item lg='12'  spacing={2} alignContent='stretch'>
    <Grid item  md='6' sm='5' >
    <Grid component='div'>
    <h3 className="header">Bedankt voor contact opnemen </h3>
    <h4 className="h4">Wij zijn altijd blij om van uw te horen.</h4>
    <p color='textPrimary' className='pragraph'>Uw kunt belen: <Icon path={mdiPhone} size={.5} color='red'/> <a href="tel: +31 6 21301021">+31 6 21301021</a> of een email sturen <Icon path={mdiEmail} size={.6} color='red'/> <a href='mailto: info@bhqtransport.nl'>info@bhqtransport.nl</a>, of misschien liever de contact form gebruiken.<br/>
    Wij antworden als snell als moegelijk
    </p>
    </Grid>
    
    </Grid>
    <Grid item  md='5' sm='6'><ContactForm/></Grid>
    
    
    </Grid>
    </Grid>

)

export default Contact;
