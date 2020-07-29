import React from 'react'
import Button from '@material-ui/core/Button'

import styles from './OrderSummary.module.css'
import {useHistory} from 'react-router-dom'

export default function OrderSummary() {
    let history = useHistory()

    return (
        <div className={styles.Container}>
            <div className={styles.Summary}>
                <div className={styles.SummaryTitle}>Order Summary</div>
                <table className={styles.Table}>
                    <tbody>
                        <tr>
                            <td className={styles.SummaryHeader}>
                                Subtotal
                            </td>
                            <td>
                                $CA3000
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.SummaryHeader}>
                                Local Shipping
                            </td>
                            <td>
                                $CA2.2
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.SummaryHeader}>
                                Shipping
                            </td>
                            <td>
                                TBD
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.SummaryHeader}>
                                Service Fee
                            </td>
                            <td>
                                CA$10
                            </td>
                        </tr>
                        <tr className={styles.Divider}>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className={styles.SummaryHeader}>
                            <td>
                                Grand Total
                            </td>
                            <td>
                                CA$10000
                            </td>
                        </tr>
                        <tr className={styles.PromoCode}>
                            <td colSpan={2}>
                                <input type="text" placeholder="Promo Code"></input>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className={styles.CheckoutButton}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={()=>history.push({
                        pathname:'/order',
                        state:{
                            from:'checkout'
                        }
                    })}>
                        Proceed to Checkout
                    </Button>
            </div>    
        </div>
    )
}
