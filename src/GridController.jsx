import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import GridButtons from "./GridButtons";
import ColorPalette from "./ColorPalette";

export default function GridController() {

    const [selectedColor, setSelectedColor] = useState('transparent');
    const [pixelGrid, setPixelGrid] = useState([]); // pixelGrid is an array of colors, length 64

    useEffect(() => {
        axios.get('/loadGridPage')
        .then((response) => {
            loadGridPage(response.data);
        })
    }, []);

    const handleColorClick = (color) => { 
        console.log('Clicked a new palette color: ' + color);
        setSelectedColor(color); 
        document.getElementById('paletteDiv').style.backgroundColor = color;
    };

    const handlePixelClick = (pixel) => {
        if(pixel && selectedColor) {
            console.log('Clicked on pixel: ' + pixel.id);
            pixel.style.backgroundColor = selectedColor;
        }
    }
    
    const loadGridPage = (db) => {
        let tempArray = [];
        for (let i = 0; i < db[0].length; i++) {
            const pixel = document.getElementById(i);
            pixel.style.backgroundColor = db[0][i];
            tempArray.push(db[i]);
        }
        setPixelGrid(tempArray);
    }


    const saveGridToArray = async (tempArray) => {
        await axios.post('/saveGrid', tempArray);
    }

    const deleteArray = () => {
        // Delete
        // Figure out how to indicate which array should be deleted
    }

    return (
        <>
            <div className="parent">
                <div id = "paletteDiv">
                    <ColorPalette onColorClick={handleColorClick}/>
                </div>
                <div>
                    <Grid selectedColor={selectedColor} onPixelClick={handlePixelClick}/>
                </div>
                <div>
                    <GridButtons db={pixelGrid} onSave={saveGridToArray} />
                </div>
            </div>
                <div id="footerDiv">
                    <span>... pixelGridPage thumbnails appear here ...</span>
                </div>
        </>
    )
}