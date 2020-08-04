import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/MoonLoader";
import styles from './Spinner.module.css'

import PageContainer from '../../hoc/PageContainer'
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
        <PageContainer>
            <div className={styles.Container}>
                <ClipLoader
                css={override}
                size={80}
                color={"#123abc"}
                loading={this.state.loading}
                />
            </div>
        </PageContainer>
    );
  }
}

export default Spinner