import React, { useEffect } from "react";
import DatamapsIndia from "react-datamaps-india";
import { fetchUsersByStateCount } from "../api";

const convertData = (data) => {
  const result = {};

  Object.entries(data).forEach(([key, value]) => {
    const formattedKey = key.replace(/&/g, 'and');
    result[formattedKey] = {
      value
    };
  });

  return result;
};
const Maps = () => {

const [arr,setArr]= React.useState([]) ;
    
    useEffect(()=>{
    
    async function fetchData()
    {
    
    const nums =await fetchUsersByStateCount() ;
    console.log("course",nums) ;
    setArr(nums.data) ;
    }
    
    fetchData() ;
    
    },[])


  return (
  <div >
  <div style={{textAlign:'center', fontSize:'1.2rem',color: '#4B4B4B',
  fontFamily: 'Open Sans',  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal', marginBottom:-50}}>User Distribution</div>
    <div style={{ position: "relative", left:100 }}>
      <DatamapsIndia
       
        regionData={convertData(arr)}
        hoverComponent={({ value }) => {
          return (
            <div>
              <div>
                {value.name} {value.value} users
              </div>
            </div>
          );
        }}
        mapLayout={{
          title: "",
          legendTitle: "Number of users",
         startColor: "#fff",
          endColor: "#00a9ff",
          hoverTitle: "Count",
          noDataColor: "#bcbcbc",
          borderColor: "#3c3c3c",
          hoverColor: "#ffb534",
          hoverBorderColor: "#E36414",
          height: 2,
          weight: 10
        }}
      />
    </div>
    </div>
  );
};

export default Maps;
