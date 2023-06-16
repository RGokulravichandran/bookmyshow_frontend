import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { API_URL } from "../../Global";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const BuyTickets = ({ id }) => {
  const { name } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startIndex, setStartIndex] = useState(0);
  const [theatres, setTheatres] = useState(null);
  const [showtimes, setShowtimes] = useState([]);

  const getNextDates = () => {
    if (startIndex + 5 < 7) {
      setStartIndex(startIndex + 1);
    }
  };

  const getPreviousDates = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const dates = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + startIndex + i);
    dates.push(date);
  }

  const formattedDates = dates.map((date) => ({
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
  }));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/${id}`)
          .then((res) => res.json())
          .then((data) => setTheatres(data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (theatres == null) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="BuyTickets">
      <div className="movieNameAndCertificateDiv">
        <div className="movieNameAndCertificate">
          <div className="movieName">
            <Typography variant="h4" sx={{ color: "white" }}>
              {name}
            </Typography>
          </div>
          <div className="certificateDetails">
            <div className="circle">
              <Typography sx={{ fontSize: "15px" }}>U</Typography>
            </div>
            <span className="tags">Action</span>
            <span className="tags">Thriller</span>
          </div>
        </div>
      </div>
      <div className="DateAndOtherDiv">
        <div>
          <div className="dateContainer">
            <IconButton onClick={getPreviousDates} disabled={startIndex === 0}>
              <ChevronLeftIcon />
            </IconButton>

            {formattedDates.map(({ weekday, day, month }, index) => (
              <div key={index} className="dateItem">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {weekday}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: 15, fontWeight: 500 }}
                >
                  {day}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {month}
                </Typography>
              </div>
            ))}

            <IconButton onClick={getNextDates} disabled={startIndex + 5 === 7}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="theaterAndShowTimeDiv">
        <div className="attributesContainer">
          <div className="legendContainer">
            <div className="showTimeLegend">
              <div className="legendIconGreen"></div>
              <div className="legendText">Available</div>
            </div>
            <div className="showTimeLegend">
              <div className="legendIconRed"></div>
              <div className="legendText">Fast Filling</div>
            </div>
            <div className="showTimeLegend">
              <div className="subTitle">LAN</div>
              <div className="legendText">subtitles language</div>
            </div>
          </div>
        </div>
        {theatres.theatres.map((data) => (
          <TheaterList data={data} />
        ))}
      </div>
    </div>
  );
};

const TheaterList = ({ data }) => {
  return (
    <div className="list">
      <div className="listInfo">
        <div className="listName">
          <div className="listTitle">
            <div className="listTitleName">
              <Typography className="name">{data.name}</Typography>
              <div className="listVenueInfo">
                <IconButton sx={{ cursor: "pointer" }}>
                  <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontSize: 10, paddingLeft: 0.5 }}>
                    INFO
                  </Typography>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="showTimeDetailsContainer">
        <div className="showTimePillWraper">
          {data.showtimes.map((data) => (
            <ShowTimeComp data={data} />
          ))}
        </div>
        <div className="flag"></div>
      </div>
    </div>
  );
};

function ShowTimeComp({ data }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customPaperProps = {
    style: {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      top: "10px",
      maxWidth: "515px",
    },
    elevation: 10,
  };
  const navigate = useNavigate();
  return (
    <div className="showTimePill">
      <Button sx={{ color: "#4abd5d" }} onClick={handleClick}>
        {data.time}
      </Button>
      <Dialog open={open} onClose={handleClose} PaperProps={customPaperProps}>
        <DialogTitle className="title">Terms & Conditions</DialogTitle>
        <DialogContent className="contant">
          Wearing a face mask and following other Covid guidelines are mandatory
          (As per the directions from your local authorities)..
          <div className="contant" style={{ color: "#ff0000" }}>
            1. Kindly check the selected show is an AM or PM (Early morning or
            Midnight).
            <br /> 2. A Customer Under the Influence of Alcohol will not be
            allowed inside the Cinema. Ticket Amount will not be Refunded.
          </div>
          3. No Seat Delivery for Online Food & Beverage Order. <br />
          4. Outside Food & Beverages is not Allowed inside the Cinema. <br />
          5. Smoking is Strictly Prohibited inside the Premises.
          <br /> 6. Post 1 hour of the showtime Customers will not be permitted
          inside the cinema. <br />
          7. Tickets are compulsory for children above 3 years of Age. <br />
          8. Children below the Age of 18 Can`t be allowed for `A` Certified
          Movies. <br />
          9. Decisions taken by SSC Management is Final & Abiding.
        </DialogContent>
        <DialogActions className="dialogAction">
          <div className="dialogActionButtonCancel" onClick={handleClose}>
            Cancel
          </div>
          <div className="dialogActionButtonAccept" onClick={navigate('/')}>
            Accept
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BuyTickets;
