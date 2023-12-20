import React from "react";
import DatamapsIndia from "react-datamaps-india";

const Maps = () => {
  return (
  <div >
  <div style={{textAlign:'center', fontSize:'1.2rem',color: '#4B4B4B',
  fontFamily: 'Open Sans',  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal', marginBottom:-50}}>User Distribution</div>
    <div style={{ position: "relative", left:100 }}>
      <DatamapsIndia
       
        regionData={{
          "Andaman & Nicobar Island": {
            value: 150
          },
          "Andhra Pradesh": {
            value: 470
          },
          "Arunanchal Pradesh": {
            value: 248
          },
          Assam: {
            value: 528
          },
          Bihar: {
            value: 755
          },
          Chandigarh: {
            value: 95
          },
          Chhattisgarh: {
            value: 1700
          },
          Delhi: {
            value: 1823
          },
          Goa: {
            value: 508
          },
          Gujarat: {
            value: 624
          },
          Haryana: {
            value: 1244
          },
          "Himachal Pradesh": {
            value: 640
          },
          "Jammu & Kashmir": {
            value: 566
          },
          Jharkhand: {
            value: 814
          },
          Karnataka: {
            value: 2482
          },
          Kerala: {
            value: 899
          },
          Lakshadweep: {
            value: 15
          },
          "Madhya Pradesh": {
            value: 1176
          },
          Maharashtra: {
            value: 727
          },
          Manipur: {
            value: 314
          },
          Meghalaya: {
            value: 273
          },
          Mizoram: {
            value: 306
          },
          Nagaland: {
            value: 374
          },
          Odisha: {
            value: 395
          },
          Puducherry: {
            value: 245
          },
          Punjab: {
            value: 786
          },
          Rajasthan: {
            value: 1819
          },
          Sikkim: {
            value: 152
          },
          "Tamil Nadu": {
            value: 2296
          },
          Telangana: {
            value: 467
          },
          Tripura: {
            value: 194
          },
          "Uttar Pradesh": {
            value: 2944
          },
          Uttarakhand: {
            value: 1439
          },
          "West Bengal": {
            value: 1321
          }
        }}
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
