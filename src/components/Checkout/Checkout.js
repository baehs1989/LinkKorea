import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import PageContainer from '../../hoc/PageContainer';
import OrderSummary from './OrderSummary/OrderSummary';

import styles from './Checkout.module.css';

function ProductInfo(){
    return (
        <tr>
            <td className={styles.Image}><img src="https://cdn-image02.casetify.com/usr/8746/1688746/~v14/6705211_iphone11__color_white_16000268.png.560x560-w.m80.jpg" alt="item1" /></td>
            <td>
                <div className={styles.ProductName}>Sony DSC-RX100M III</div>
                <div className={styles.StoreName}>Gmarket</div>
                <div className={styles.ShippingFee}>local shipping fee: CA$2.20</div>
            </td>
            <td className={styles.Quantity}><input type="number" defaultValue={3}></input></td>
            <td className={styles.TotalPrice}>CA$3000</td>
            <td className={styles.ActionButtons}><Button variant="contained" color="secondary">Delete</Button></td>
        </tr>
    )
}

export default function Checkout() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.Title}>
                    Shopping Cart
                </div>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <table className={styles.Table}>
                            <tbody>
                                <ProductInfo/>
                                <ProductInfo/>
                                <ProductInfo/>
                            </tbody>
                        </table>
                    </Grid>
                    <Grid item container justify="flex-end" xs={12} md={3}>
                        <OrderSummary/>
                    </Grid>
                </Grid>
            </div>
        </PageContainer>

    )
}
