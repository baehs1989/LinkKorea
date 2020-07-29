import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Calculator from '../ShippingRateCalculator/ShippingRateCalculator'

export default function DeliveryForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Delivery details
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
            <div style={{paddingBottom:'10px'}}>
                Delivery instructions
            </div>
            <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={5}
                name="message"
                id="message"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Calculator/>
        </Grid>
        <Grid item xs={12}>
          <div>
            The duty tax that applies to purchases above CAD20.00 will be charged to you directly when you receive the package.
            {/* <br/><br/>
            *If you do not select EMS, additional customs clearance fee can be charged. */}
          </div>
          <FormControlLabel
            control={<Checkbox color="secondary" name="taxesagreement" />}
            label="Duty tax upon receipt"
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            You will be fully responsible for the possible issues regarding customs restrictions and logistics risks.
            <br/><br/>
            Bringko is not responsible for confiscation, damage, loss, delay of the products due to customs policy or uncontrollable risks associated with the international transportation.
          </div>
          <FormControlLabel
            control={<Checkbox color="secondary" name="taxesagreement" />}
            label="I have understood"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}