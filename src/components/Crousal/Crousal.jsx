import React, { useEffect } from "react";
import "./crousal.scss";
import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/LazyloadImages/Images";
import PosterFallback from "../../assets/no-poster.png";
import "./crousal.scss";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../Genres/Genres";

const Crousal = ({ data, loading,endpoint,title }) => {
  const carousalContainer = useRef(null);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const skiItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  useEffect(()=> {
      navigation()
  },[])
  const navigation = (dir) => {
    const container = carousalContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
        container.scrollTo({
          left : scrollAmount,
          behavior : "smooth"
        })
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carousalContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : "PosterFallback";
              return (
                <div className="carouselItem" key={item.id} onClick={()=> navigate(`/${item.media_type}/${item.id}`)}>
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <div className="title">{item.title || item.name}</div>
                    <div className="date">
                      {dayjs(item.release_Date).format("MMM D,YYYY")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skiItem()}
            {skiItem()}
            {skiItem()}
            {skiItem()}
            {skiItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Crousal;
