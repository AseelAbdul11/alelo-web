import React from "react";
import VideoPopup from "../../Components/VideoPopup/VideoPopup";
import { Card } from "../../Components/Card/Card";
import vide from '../../Assets/videos/video.mp4'

const Videos = () => {

  return <div>
    <Card  data ={{
    id: 1,
    name: "Fruits",
    language_name: [],
    video : vide
}}
  isSelectable ={false}
  productsID ={true}
  edit ={true}
  videocard ={true} />
  </div>;
};

export default Videos;
