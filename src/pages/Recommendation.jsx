import React, { useEffect } from "react";

const Recommendation = () => {

    
    useEffect(()=>{
    
    
   async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:5000/recommendations/6581f602806fa6a786b9c2e6');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    // 'data' now contains the parsed JSON response


    // Access the specific property, for example:
    const result = data.recommendations;
    console.log('result:', result);

    // Now you can use the 'predictionValue' as needed in your client-side code
  } catch (error) {
    console.error('Error:', error);
    // Handle errors here
  }
}

// Call the function
fetchData();

    },[])
    
    
  return <div>
  <button onClick={()=>console.log("data")}>Data</button>
  </div>;
};

export default Recommendation;
