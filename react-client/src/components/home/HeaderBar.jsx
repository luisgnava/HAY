import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';


  const HeaderBar = (props) => (
    <div>
      <AppBar id='appBar'>
          <Toolbar>
            <Link to="/"><Button id='tabButtonHome'>Home</Button></Link>
            <Link to="/cohort"><Button id='tabButtonCohort' label="Cohort" color="inherit">Cohort</Button></Link>
          </Toolbar>
      </AppBar>
    </div>
  );

  export default HeaderBar;
