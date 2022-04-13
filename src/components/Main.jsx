import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Films from "./Films";
import get from "../base/get";

const Main = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <Banner />
      <Films
        isLargeRow
        title={"NETFLIX ORIGINALS"}
        movie_request={get.fetchNetflixOriginals}
      />
      <Films title={"Trending now"} movie_request={get.fetchTrending} />
      <Films title={"Top Rated"} movie_request={get.fetchTopRated} />
      <Films title={"Action movies"} movie_request={get.fetchActionMovies} />
      <Films title={"Comedy movies"} movie_request={get.fetchComedyMovies} />
      <Films title={"Horror movies"} movie_request={get.fetchHorrorMovies} />
      <Films title={"Romance movies"} movie_request={get.fetchRomanceMovies} />
      <Films title={"Documentaries"} movie_request={get.fetchDocumentaries} />
    </>
  );
};

export default Main;
