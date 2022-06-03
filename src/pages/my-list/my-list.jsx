import React from "react";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import MoviesList from "../../components/movies-list";

const MyList = () => {
  return (
    <div>
      <Topbar location="my-list" />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default MyList;
