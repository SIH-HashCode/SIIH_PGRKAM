import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from "./Card.module.scss"
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
// third-party
import Chart from 'react-apexcharts';
// project imports
import CardDashBoard from './Card';
import SkeletonTotalOrderCard from './Skeletom';
import ChartDataMonth from './month-wise-data';
import ChartDataYear from './year-wise-data';
// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const CardWrapper = styled(CardDashBoard)(({ theme,mode}) => ({
  backgroundColor: mode,
  
  color: '#3c3c3c',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 2
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: "#3c3c3c",
    opacity: 0.3,
    borderRadius: '50%',
    zIndex: 0,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',   
    zIndex: 2,
    width: 210,
    height: 210,
    background: "#3c3c3c",
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.3,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading,mode,monthCount,yearCount,title}) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);

  const [num, setNum]= useState(2) ;
  const handleChangeTime = (e, newValue) => {
    
    const ele= e.target ;
    ele.disabled=false ;
    if(num===1)
    {
      
      setNum(2);
    }
    else
    {
      setNum(1) ;
    }
    
    setTimeValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
          <div style={{ background: mode+"20",borderRadius:"10px"}} >
        <CardWrapper border={false} content={false} mode={mode} style={{borderRadius:"10px"}} className={styles.bahaar}>

          
          <Box sx={{ p: 2.25 }} style={{ backgroundColor:"transparent"}} >
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: mode,
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <button
                     
                     onClick={(e) => handleChangeTime(e, true)}
                     className={styles.Back}
                     style={{background:num===2?mode:"transparent"}}
                     >
                      Month
                    </button>
                    <button
                     className={styles.Back}
                     style={{background:num===1?mode:"transparent"}}
                      onClick={(e) => handleChangeTime(e, false)}
                      
                    >
                      Year
                    </button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={0}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography sx={{ fontSize: '2.125rem', color: '#fff',fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{monthCount}</Typography>
                        ) : (
                          <Typography sx={{ fontSize: '2.125rem',color: '#fff', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{yearCount}</Typography>
                        )}
                      </Grid>
                      
                      <Grid item xs={10}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: '#fff'

                          }}
                        >
                          {title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
          </div>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
