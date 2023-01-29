import React from 'react'

function Location() {
    // 날짜 가져오기
    const dateBuilder = (d) => {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    
      let days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];
  
      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      let date = d.getDate();
  
      return `${day} ${date} ${month} ${year}`;
    };

    return (
          <div>
           {dateBuilder(new Date())} 
          </div>
      );
    }
    export default Location;

