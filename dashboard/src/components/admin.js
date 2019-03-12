import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Admin extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell className="contact-body" col={4} >
          <p>Hey</p>
          </Cell>
          
        </Grid>



      </div>
    )
  }
}

export default Admin;
