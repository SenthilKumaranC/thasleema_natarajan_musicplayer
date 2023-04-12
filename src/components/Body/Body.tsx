import { useContext } from "react";
import { ThemeContext } from "../MusicPlayer/MusicPlayer";
import PlayList from "../PlayList/PlayList";
import "./Body.css";

const Body = () => {
  const { buttonColor } = useContext(ThemeContext);

  return (
    <div className="Body">
      <button style={{ backgroundColor: buttonColor }}>Some Button</button>
      <ThemeContext.Provider value={{ buttonColor: "#0000ff" }}>
        <PlayList></PlayList>
      </ThemeContext.Provider>
    </div>
  );
};

export default Body;
