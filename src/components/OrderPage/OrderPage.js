import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';

import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';


import PageContainer from '../../hoc/PageContainer'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '100%',
      maxWidth: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    padding: '1rem'
  },
  paper: {
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address', 'Delivery details', 'Payment'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <DeliveryForm />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function OrderPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  let history = useHistory();

  if (!history.location.state || !history.location.state.from || !history.location.state.from==="order") history.push('/checkout')

  return (
    <React.Fragment>
        <PageContainer>
            <div className={classes.layout}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will
                            send you an update when your order has shipped.
                            </Typography>
                        </React.Fragment>
                        ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} className={classes.button}>
                                Back
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Pay $499' : 'Next'}
                            </Button>
                            </div>
                        </React.Fragment>
                        )}
                    </React.Fragment>
                </div>
            </div>
        </PageContainer>

    </React.Fragment>
  );
}