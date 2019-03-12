import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Line from './Line';
import Radar from './Radar';
import Pie from './Pie' ;
import Checklist from './Checklist';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell className="resume-left-col" col={4} >
          <Line/>
          </Cell>
          <Cell className="resume-left-col" col={4} >
          <Radar/>
          </Cell>
          <Cell className="resume-left-col" col={4} >
          <Pie/>
          </Cell>
          <Cell className="resume-left-col" col={4} >
          <Checklist/>
          </Cell>
        </Grid>



      </div>
    )
  }
}

export default Landing;
