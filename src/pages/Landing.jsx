import React from "react";
import styles from "./Landing.module.scss"
import { illustrationLanding, logo } from "../assets";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const history = useNavigate() ;

  return <div className={styles.back}>
    
    <div className={styles.left}>
    <img src={illustrationLanding} alt='illus' className={ styles.illustration} />
    </div>
    <div className={styles.right}>
        <img src={logo} alt='logo' />
        <div className={styles.heading}>PGRKAM <br /> ANALYTICS PORTAL</div>
        <div className={styles.inputs}>
        
        <div className={styles.outer}>
        <input type="text" placeholder="Email"/>
        </div>
        <span className={styles.outer}>
        <input type="text"  placeholder="Password"/>
        
        </span>
        </div>
        <button className={styles.loginBtn}>Login</button>
        <div style={{width:'100%',textAlign:'center'}}>
        OR
        <hr  style={{ width:"50%"}}/>
        </div>
             <GoogleLogin
                  onSuccess={credentialResponse => {
                   const data= credentialResponse ;
                   localStorage.setItem('profile',data) ;
                   history('/dashboard') ;
                  }}
                  color="primary"
                  fullWidth="true"
                  shape="pill"
                  className={styles.Gbtn}
                  variant="contained"
                  size="large"
                  cookiePolicy="single_host_origin"
                  onError={() => {
                    alert("Use correct email id for Login");
                  }}
                />
    </div>
  </div>;
};

export default Landing;
