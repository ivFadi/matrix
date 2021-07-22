import React from "react";
import Chart from "react-apexcharts";

function TChart() {
  var options = {
    chart: {
      toolbar: {
        show: false
      },
      foreColor: '#fff',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    tooltip : {
      enabled: true,
      followCursor: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      name: "transaction number",
      categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    },
   colors: ['#fff'],
  }
      
  var series = [
    {
      name: "Transaction time",
      data: JSON.parse(localStorage.transactionData)
    }
]
  return <Chart type="line" options={options} series={series} height="800" style={{backgroundColor: '#282C34', width:'100%', height:'100%', display:'flex'}} />;
};

export default TChart