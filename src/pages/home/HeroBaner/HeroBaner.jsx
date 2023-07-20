import React, { useEffect, useState } from "react";
import "./HeroBaner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import Img from "../../../components/LazyloadImages/Images";

const HeroBaner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const Navigate = useNavigate("")
  const {url} = useSelector((state) => state.home)
  const {data,loading} = useFetch("/movie/upcoming")

  useEffect(()=>{
   const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
   setBackground(bg)
  },[data])

  const SearchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      Navigate(`/search/${query}`)
    }
  };
  return (
    <div className="heroBanner">
      { !loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies,TV shows and people to discover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv shows..."
              onKeyUp={SearchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
      </div>
  );
};

export default HeroBaner;
