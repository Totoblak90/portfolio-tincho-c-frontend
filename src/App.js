import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";
import { selectGallery } from "./Redux/gallery/selectors";
import { setGalleries } from './Redux/gallery'
import axios from "axios";
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const galleries = useAppSelector(selectGallery)

  useEffect( () => {
    const  getGallery = async () =>{
      const res = await axios.get(`http://localhost:1500/api/gallery`, {})
      dispatch(setGalleries(res.data))
    }

  
getGallery()

    
  

  },[])
    console.log("Galleries", galleries)

  return (
      <div className="App">
        El App.js carga
      </div>
  );
}


export default App;
