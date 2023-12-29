

export default function ColorPalette({ onColorClick }) {

    return (
        <>
            <div style={{backgroundColor: "black"}} className="paletteColorDiv" onClick={() => onColorClick('black')}></div>
            <div style={{backgroundColor: "red"}} className="paletteColorDiv" onClick={() => onColorClick('red')}></div>
            <div style={{backgroundColor: "yellow"}} className="paletteColorDiv" onClick={() => onColorClick('yellow')}></div>
            <div style={{backgroundColor: "orange"}} className="paletteColorDiv" onClick={() => onColorClick('orange')}></div>
            <div style={{backgroundColor: "blue"}} className="paletteColorDiv" onClick={() => onColorClick('blue')}></div>
            <div style={{backgroundColor: "green"}} className="paletteColorDiv" onClick={() => onColorClick('green')}></div>
            <div style={{backgroundColor: "grey"}} className="paletteColorDiv" onClick={() => onColorClick('grey')}></div>
            <div style={{backgroundColor: "white"}} className="paletteColorDiv" onClick={() => onColorClick('white')}></div>
        </>
    )
}