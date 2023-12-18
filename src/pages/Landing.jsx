import React from "react";
import styles from "./Landing.module.css"
import { illustrationLanding, logo } from "../assets";
import { GoogleLogin } from "@react-oauth/google";

const Landing = () => {
  return <div className={styles.back}>
    
    <div className={styles.left}>
    <img src={illustrationLanding} alt='illus' className={ styles.illustration} />
    </div>
    <div className={styles.right}>
        <img src={logo} alt='logo' />
        <div style={{ fontSize:'2rem', fontWeight:'400', textAlign:'center'}}>PGRKAM <br /> ANALYTICS PORTAL</div>
        <div className={styles.inputs}>
        <input type="text" placeholder="Email"/>
        <input type="text"  placeholder="Password"/>
        </div>
        <button className={styles.loginBtn}>Login</button>
        <div style={{width:'100%',textAlign:'center'}}>
        OR
        <hr  style={{ width:"50%"}}/>
        </div>
             <GoogleLogin
                  onSuccess={credentialResponse => {
                   console.log("haha",credentialResponse)
                  }}
                  color="primary"
                  fullWidth="true"
                  shape="pill"
                  variant="contained"
                  size="medium"
                  cookiePolicy="single_host_origin"
                  onError={() => {
                    alert("Use Student email id for Login");
                  }}
                />
    </div>
  </div>;
};

export default Landing;
