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
import {
  BrowserRouter as Router,
  Link,
  RouterProvider,
} from "react-router-dom";
import ShowDetails from "./ShowDetails";
import router from "./Routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React, { useState } from "react";
// import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Grid,
//   TextField,
//   Button,
//   CircularProgress,
//   Card,
//   CardContent,
//   Typography,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundImage: "linear-gradient(to bottom right, #73cece, #451576)",
//     backgroundSize: "cover",
//     minHeight: "95vh",
//     padding: "15px",
//   },

//   searchContainer: {
//     marginBottom: theme.spacing(4),
//     display: "flex",
//     alignItems: "center",
//     marginTop: "40px",
//     width: "1000px",
//     marginBottom: "40px",
//     borderRadius: "5px 0 0 5px",
//   },
//   input: {
//     width: "70%",
//     marginRight: "5px",
//   },
//   button: {
//     padding: theme.spacing(2),
//     minWidth: "auto",
//     backgroundColor: "#5e055e",
//     color: "#dddd",
//   },
//   showContainer: {
//     justifyContent: "center",
//   },
//   showCard: {
//     margin: theme.spacing(1),
//     borderRadius: theme.spacing(2),
//     backdropFilter: "blur(4px)", // Adjust blur amount as needed
//     backgroundColor: "transparent",
//     border: "1px solid purple", // Add border with color purple
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)", // Add box shadow
//     height: "500px",
//     maxWidth: "700px",
//     overflow: "hidden",
//   },

//   cardContent: {
//     textAlign: "center",
//     color: "#5e055e",
//   },
//   rating: {
//     color: "#DAA520", // Yellow color for rating
//     textShadow: "0 0 2px black",
//   },

//   loading: {
//     textAlign: "center",
//     marginTop: theme.spacing(2),
//   },
//   paragraph: {
//     color: "#2c053b",
//     textAlign: "justify",
//     textIndent: "1em",
//     lineHeight: "1.5",
//     maxHeight: "150px", // Set maximum height for the paragraph
//     overflow: "hidden",
//     textOverflow: "ellipsis", // Display ellipsis when text overflows
//   },
// }));

// function App() {
//   const classes = useStyles();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [shows, setShows] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchShows = () => {
//     setLoading(true);
//     axios
//       .get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
//       .then((response) => {
//         setShows(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching shows:", error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className={classes.root}>
//       <Grid container direction="column" alignItems="center">
//         <Grid item xs={12} className={classes.searchContainer}>
//           <TextField
//             className={classes.input}
//             label="Search For Movies"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Button
//             className={classes.button}
//             variant="contained"
//             //color="primary"
//             onClick={searchShows}
//           >
//             Search
//           </Button>
//         </Grid>
//         {loading && (
//           <Grid item xs={12} className={classes.loading}>
//             <CircularProgress />
//           </Grid>
//         )}
//         <Grid item xs={12} container className={classes.showContainer}>
//           {shows.map((show) => (
//             <Grid
//               color="primary"
//               key={show.show.id}
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//             >
//               <Card className={classes.showCard}>
//                 <CardContent className={classes.cardContent}>
//                   <Typography
//                     variant="h5"
//                     component="h2"
//                     gutterBottom
//                     color="#721694"
//                     //color="primary"
//                   >
//                     <b>{show.show.name}</b>
//                   </Typography>
//                   <img
//                     src={show.show.image ? show.show.image.medium : ""}
//                     alt={show.show.name}
//                   />
//                   <Typography
//                     variant="body1"
//                     component="p"
//                     className={classes.paragraph}
//                   >
//                     <span className={classes.rating}>
//                       Rating: {show.show.rating.average || "N/A"}
//                     </span>
//                     <br />
//                     {show.show.summary}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default App;

//------------------------

// import React, { useState } from "react";
// import axios from "axios";
// import Search from "./components/Search";
// import Detail from "./components/Detail";
// import "./App.css";

// function App() {
// 	const [state, setState] = useState({
// 		s: "sherlock",
// 		results: [],
// 		selected: {},
// 	});

// 	const apiurl =
// 		"https://www.omdbapi.com/?apikey=a2526df0";

// 	const searchInput = (e) => {
// 		let s = e.target.value;

// 		setState((prevState) => {
// 			return { ...prevState, s: s };
// 		});
// 	};

// 	const search = (e) => {
// 		if (e.key === "Enter") {
// 			axios(apiurl + "&s=" + state.s).then(
// 				({ data }) => {
// 					let results = data.Search;

// 					console.log(results);

// 					setState((prevState) => {
// 						return {
// 							...prevState,
// 							results: results,
// 						};
// 					});
// 				}
// 			);
// 		}
// 	};

// 	const openDetail = (id) => {
// 		axios(apiurl + "&i=" + id).then(({ data }) => {
// 			let result = data;

// 			setState((prevState) => {
// 				return { ...prevState, selected: result };
// 			});
// 		});
// 	};

// 	const closeDetail = () => {
// 		setState((prevState) => {
// 			return { ...prevState, selected: {} };
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>Movie Mania</h1>
// 			</header>
// 			<main>
// 				<Search
// 					searchInput={searchInput}
// 					search={search}
// 				/>

// 				<div className="container">
// 					{state.results.map((e) => (
// 						<div
// 							className="item"
// 							onClick={() =>
// 								openDetail(e.imdbID)
// 							}
// 						>
// 							<img
// 								style={{ width: "200px" }}
// 								src={e.Poster}
// 							/>
// 							<h3 style={{ color: "white" }}>
// 								{e.Title}
// 							</h3>
// 						</div>
// 					))}
// 				</div>

// 				{typeof state.selected.Title !=
// 				"undefined" ? (
// 					<Detail
// 						selected={state.selected}
// 						closeDetail={closeDetail}
// 					/>
// 				) : (
// 					false
// 				)}
// 			</main>
// 		</div>
// 	);
// }

// export default App;
