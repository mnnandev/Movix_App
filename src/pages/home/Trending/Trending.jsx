import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Crousal from "../../../components/Crousal/Crousal";

const Trending = () => {
  const [endPoint, SetEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const ontabChange = (tab) => {
    SetEndpoint(tab === "Day" ? "day" : "week")
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "week"]} ontabChange={ontabChange} />
      </ContentWrapper>
      <Crousal data = {data?.results} loading = {loading}/>
    </div>
  );
};

export default Trending;
