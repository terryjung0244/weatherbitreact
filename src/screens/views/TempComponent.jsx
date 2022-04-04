import React from 'react';
import Grid from '@material-ui/core/Grid';

const array = ["apple", "banana", "grape", "strawberry"]

const TempComponent = () => {
  return(
    <div>
      <Grid container>
        {array.map((fruit, index) => {
          return (
            <Grid item xs={3} sm={6} lg={4} key={fruit}>
              {fruit}
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default TempComponent;

// 30000 - 100000
// 40000 - 65000
