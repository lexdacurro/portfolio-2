
"use client";
// import { createRoot } from "react-dom/client";
import { Sprite, Stage } from "react-pixi-fiber";
import bunny from "./bunnys.png"
function Bunny (props) {
  return <Sprite texture={PIXI.Texture.from(bunny)} {...props} />;
}

const container = document.getElementById("container");
// const root = createRoot(container);

export default function MinigameComponents() {
    return (
        <div> 
            HELLO 
            <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
            <Bunny x={200} y={200} />
        </Stage>,
        </div>
    )
}