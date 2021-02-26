import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
//1. Make an axios call to retrieve all color data and push to state on mounting.

  const getColors = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log(res.data)
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(()=>{
    getColors()
  },[])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:

