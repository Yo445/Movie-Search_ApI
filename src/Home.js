import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import { BrowserRouter as Router, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to bottom right, #73cece, #451576)",
    backgroundSize: "cover",
    minHeight: "95vh",
    padding: "15px",
  },

  searchContainer: {
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
    width: "1000px",
    borderRadius: "5px 0 0 5px",
  },
  input: {
    width: "70%",
    marginRight: "5px",
  },
  button: {
    padding: theme.spacing(2),
    minWidth: "auto",
    backgroundColor: "#5e055e",
    color: "#dddd",
  },
  showContainer: {
    justifyContent: "center",
  },
  showCard: {
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
    backdropFilter: "blur(4px)",
    backgroundColor: "transparent",
    border: "1px solid purple",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
    height: "500px",
    maxWidth: "700px",
    overflow: "hidden",
    paddingBottom: "15px",
  },

  cardContent: {
    textAlign: "center",
    color: "#5e055e",
  },
  rating: {
    color: "#DAA520",
    textShadow: "0 0 2px black",
  },

  loading: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  paragraph: {
    color: "#2c053b",
    textAlign: "justify",
    textIndent: "1em",
    lineHeight: "1.5",
    maxHeight: "150px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  h1: {
    textAlign: "center",
    color: "black",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  link: {
    padding: "10px 20px",
    backgroundColor: "#5e055e",
    color: "#dddd",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
    marginLeft: "25px",
    marginRight: "25px",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
    display: "flow",
  },
  linkHover: {
    backgroundColor: "#451576",
  },
  imdbLink: {
    padding: "10px 20px",
    backgroundColor: "#DAA520", // Yellow background color
    color: "#000", // Black text color
    textDecoration: "none",
    borderRadius: "5px",
    margin: "auto",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
    display: "flow",
    textAlign: "center",
    marginLeft: "25px",
    marginRight: "25px",
  },
  imdbLinkHover: {
    backgroundColor: "#B8860B", // Darker yellow on hover
  },
}));

export default function Home() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchShows = () => {
    setLoading(true);
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => {
        setShows(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>Movie App</h1>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} className={classes.searchContainer}>
          <TextField
            className={classes.input}
            label="Search For Movies"
            variant="outlined"
            key="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              searchShows();
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            onClick={searchShows}
          >
            Search
          </Button>
        </Grid>
        {loading && (
          <Grid item xs={12} className={classes.loading}>
            <CircularProgress />
          </Grid>
        )}
        <Grid item xs={12} container className={classes.showContainer}>
          {shows.map((show) => (
            <Grid
              color="primary"
              key={show.show.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Card className={classes.showCard}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    color="#721694"
                  >
                    <b>{show.show.name}</b>
                  </Typography>
                  <img
                    src={show.show.image ? show.show.image.medium : ""}
                    alt={show.show.name}
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.paragraph}
                  >
                    <span className={classes.rating}>
                      Rating: {show.show.rating.average || "N/A"}
                    </span>
                  </Typography>
                </CardContent>
                <Link
                  to={`/show/${show.show.id}`}
                  className={classes.link}
                  onMouseEnter={(e) =>
                    e.target.classList.add(classes.linkHover)
                  }
                  onMouseLeave={(e) =>
                    e.target.classList.remove(classes.linkHover)
                  }
                >
                  View Details
                </Link>{" "}
                <a
                  href={`https://www.imdb.com/find?q=${encodeURIComponent(
                    show.show.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.imdbLink}
                  onMouseEnter={(e) =>
                    e.target.classList.add(classes.imdbLinkHover)
                  }
                  onMouseLeave={(e) =>
                    e.target.classList.remove(classes.imdbLinkHover)
                  }
                >
                  View on IMDb
                </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
