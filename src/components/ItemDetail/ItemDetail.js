import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

import classes from './ItemDetail.module.css';


export default function ItemDetail({toggleFooter}) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        toggleFooter();
        return () => {
            toggleFooter()
        }
    }, [toggleFooter])

    const onMyFrameLoad = () => {
        // var iframe = document.querySelector('iframe.gmarket_iframe');
    }

    const onAddCart = () => {
        if (!open){
            setOpen(true)
            return
        }
        console.log('addcart')
    }

    const onClose = () =>{
        setOpen(false)
    }

    return (
      <div>
        <iframe 
            title="gmarket"
            className="gmarket_iframe"
            onLoad={onMyFrameLoad}
            style={{width:'100%', height:'90vh'}}
            src="http://item.gmarket.co.kr/detailview/Item.asp?goodscode=290915080&pos_shop_cd=GE&pos_class_cd=100000030&pos_class_kind=L"
        />

        <div className={classes.AddCartButton_Outer_Container}>
            <div className={classes.Options_Container} style={{display:open?'flex':'none'}}>
                <div className={classes.Close_Button_Container}>
                    <Button onClick={onClose}><CloseIcon/></Button>
                </div>
                
                <div className={classes.Item_Title}>
                    오뚜끼
                </div>
                <div className={classes.Item_Price}>
                    CA $100.00 (W 120,000)
                </div>
                <FormControl variant="outlined" className={classes.Option}>
                    <Select
                        value={""}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>No Option</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.Option}>
                    <Select
                        value={""}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>No Option</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>

                <div className={classes.Quantity_Container}>
                    <TextField
                        className={classes.Quantity}
                        label="Quantity"
                        type="number"
                        variant="outlined"
                    />
                </div>

            </div>

            <div className={classes.AddCartButton_Inner_Container}>
                <Button className={classes.Button} variant="contained" color="primary" onClick={onAddCart}>
                    <ShoppingCartIcon/> ADD TO CART
                </Button>
            </div>
        </div>

      </div>
    );
}


