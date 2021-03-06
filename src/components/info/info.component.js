import React from 'react';
import {MdMailOutline, MdAvTimer, MdPhonelinkRing} from "react-icons/md"

import './info.scss';

const Info = () =>(

    <div className='info'>
    <div className="icons">

   <h4> <MdAvTimer className="react-icons"/> <span className='deinfo'>Openingstijden 24/7</span></h4>
   <h4><MdMailOutline className="react-icons"/> <a className='deinfo' href="mailto: info@bhqtransport.nl">info@bhqtransport.nl</a></h4>
   <h4><MdPhonelinkRing className="react-icons"/><a className='deinfo' href="tel:+31621301021">+31 6 21301021</a></h4>
   </div>
    </div>
)

export default Info;