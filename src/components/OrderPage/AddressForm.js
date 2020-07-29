import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShippingAddress from '../MyPage/ShippingAddress/ShippingAddress'

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <ShippingAddress type="selection"/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}