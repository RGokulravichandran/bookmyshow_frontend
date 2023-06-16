// import React from "react";
// import { Grid, Paper } from "@mui/material";

// const ExampleComponent = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         overflowX: "auto",
//         whiteSpace: "nowrap",
//         WebkitOverflowScrolling: "touch",
//       }}
//     >
//       <Grid container wrap="nowrap" sx={{ display: "inline-block" }}>
//         <Grid item>
//           <Paper elevation={0}>
//             <img
//               src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680271399724_web.jpg"
//               alt="Image 1"
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "auto",
//                 marginRight: "8px",
//               }}
//             />
//           </Paper>
//         </Grid>
//         <Grid item>
//           <Paper elevation={0}>
//             <img
//               src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680271399724_web.jpg"
//               alt="Image 2"
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "auto",
//                 marginRight: "8px",
//               }}
//             />
//           </Paper>
//         </Grid>
//         <Grid item>
//           <Paper elevation={0}>
//             <img
//               src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680271399724_web.jpg"
//               alt="Image 3"
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "auto",
//                 marginRight: "8px",
//               }}
//             />
//           </Paper>
//         </Grid>
//         {/* Add more images here */}
//       </Grid>
//     </div>
//   );
// };

// export default ExampleComponent;
import React, { useEffect, useState } from "react";

const ShowtimesComponent = ({ selectedDate }) => {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6471c71d6a9370d5a41aaaa8.mockapi.io/movies/1"
        ); // Replace with the actual API endpoint
        const data = await response.json();
        const extractedShowtimes = extractShowtimes(data, selectedDate);
        setShowtimes(extractedShowtimes);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const extractShowtimes = (data, selectedDate) => {
    const extracted = [];
    const theatres = data.theatres;
    for (const theatre of theatres) {
      const showsByDate = theatre.showsByDate;
      for (const show of showsByDate) {
        if (show.date === "Sat May 27 2023") {
          const showtimes = show.showtimes;
          for (const showtime of showtimes) {
            extracted.push(showtime.time);
          }
        }
      }
    }
    return extracted;
  };

  return (
    <div>
      <h2>Showtimes</h2>
      <ul>
        {showtimes.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowtimesComponent;
