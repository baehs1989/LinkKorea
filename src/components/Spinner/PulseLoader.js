import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PulseLoader";
import styles from './PulseLoader.module.scss'
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Spinner2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
        <div className={styles.Container}>
            <ClipLoader
            css={override}
            size={10}
            color={"var(--primary-color)"}
            loading={this.state.loading}
            />
        </div>
    );
  }
}

export default Spinner2