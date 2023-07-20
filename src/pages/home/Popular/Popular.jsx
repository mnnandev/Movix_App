import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Crousal from "../../../components/Crousal/Crousal";

const Popular = () => {
  const [endPoint, SetEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);
  const ontabChange = (tab) => {
    SetEndpoint(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "Tv shows"]} ontabChange={ontabChange} />
      </ContentWrapper>
      <Crousal data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
