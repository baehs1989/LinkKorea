import React, {useState} from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';

const rates = [
    [0.5,29000],
    [0.75,31000],
    [1,33000],
    [1.25,35000],
    [1.5,37000],
    [1.75,39500],
    [2.5,45500]
]

const useStyles = makeStyles((theme) => ({
    Container:{
        padding:'1rem'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    boldSpan:{
        fontWeight:'bold'
    },
    Title:{
        fontWeight:'bold',
        fontSize:'1.3rem'
    },
    Result:{
        padding:'1rem 0',
        fontSize:'1.1rem'
    },
    Note:{
        fontSize:'1rem'
    }
}));

export default function ShippingRateCalculator() {
    const classes = useStyles();
    const [weight, setWeight] = useState('')

    const handleChange = (event) => {
        setWeight(event.target.value);
    };
      
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                International Shipping Fee Calculator (EMS)
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel id="weight-select-label">Weight</InputLabel>
                <Select
                    labelId="weight-select-label"
                    id="weight"
                    value={weight}
                    onChange={handleChange}
                >
                    {rates.map((rate, index)=>{
                        return (
                            <MenuItem key={rate[0]} value={index}>{rate[0]}kg</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <div className={classes.Result}>
                <div><span className={classes.boldSpan}>Estimated Fee:</span> <font color="green">{weight!==''?"CA$"+rates[weight][1]:"CA$0"}</font> (5-20 days)</div>
                <div className={classes.Note}><font color="red">*Please note that this fee is only for estimate check.</font></div>
            </div>
        </div>
    )
}
