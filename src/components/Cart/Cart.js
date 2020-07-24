import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

import styles from './Cart.module.css';

export default function Cart() {
    return (
        <div className={styles.ShoppingCart}>
            <div className={styles.ShoppingCartHeader}>
                <ShoppingCartIcon/>
                <div className={styles.ShoppingCartTotal}>
                    <span className={styles.Total}>Total:</span>
                    <span className={styles.Price}>$2,229.97</span>
                </div>
            </div> 

            <ul className={styles.ShoppingCartItems}>
                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                    <span className={styles.ItemName}>Sony DSC-RX100M III</span>
                    <span className={styles.ItemPrice}>$849.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                    <span className={styles.ItemName}>KS Automatic Mechanic</span>
                    <span className={styles.ItemPrice}>$1,249.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                    <div className={styles.ItemName}>Kindle, 6" Glare-Free To Play</div>
                    <span className={styles.ItemPrice}>$129.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                    <span className={styles.ItemName}>Sony DSC-RX100M III</span>
                    <span className={styles.ItemPrice}>$849.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                    <span className={styles.ItemName}>KS Automatic Mechanic</span>
                    <span className={styles.ItemPrice}>$1,249.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                    <div className={styles.ItemName}>Kindle, 6" Glare-Free To Play</div>
                    <span className={styles.ItemPrice}>$129.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                    <span className={styles.ItemName}>Sony DSC-RX100M III</span>
                    <span className={styles.ItemPrice}>$849.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                    <span className={styles.ItemName}>KS Automatic Mechanic</span>
                    <span className={styles.ItemPrice}>$1,249.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>

                <li className={styles.ClearFix}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                    <div className={styles.ItemName}>Kindle, 6" Glare-Free To Play</div>
                    <span className={styles.ItemPrice}>$129.99</span>
                    <span className={styles.ItemQuantity}>Quantity: 01</span>
                </li>
            </ul>

            <div className={styles.ButtonContainer}>
                <Button variant="contained" color="primary">
                    Checkout
                </Button>
            </div>

        </div> 
    )
}
