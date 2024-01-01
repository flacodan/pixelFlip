import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import GridButtons from "./GridButtons";
import ColorPalette from "./ColorPalette";

export default function GridController() {

    const [selectedColor, setSelectedColor] = useState('transparent');
    const [pixelGrid, setPixelGrid] = useState([]); // pixelGrid is an array of colors, length 64 ( for 8 x 8 table )

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
            let tempArray = [...pixelGrid];
            pixel.style.backgroundColor = selectedColor;
            tempArray.splice(+pixel.id, 1, selectedColor);
            setPixelGrid(tempArray);
        }
    }
    
    const loadGridPage = (db) => {
        let tempArray = [];
        for (let i = 0; i < db[0].length; i++) {
            const pixel = document.getElementById(i);
            pixel.style.backgroundColor = db[0][i];
            tempArray.push(db[i]);
        }
        console.log("In loadGridPage : " + tempArray[0]);
        setPixelGrid(tempArray[0]);
    }


    const saveGridToDb = async (pixelGrid) => {
        console.log("GridController. Sending this array: " + pixelGrid);
        console.log(pixelGrid.length);
        await axios.put('/saveGrid', pixelGrid);
    }

    const deleteGrid = async (indexToDelete) => {
        // I can see a need for both 'Clear grid' and 'Delete grid' - since proj requires 'delete' I'll do that for now
        // TODO: Implement 'clear grid'
        let response = await axios.delete('/deleteGrid/$indexToDelete');
        //Now either load the next or previous grid page, or if there are no more pages, create an empty page
        loadGridPage(response.data);
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
                    <GridButtons pixelGrid={pixelGrid} onSave={saveGridToDb} onDelete={deleteGrid} />
                </div>
            </div>
                <div id="footerDiv">
                    <span>... pixelGridPage thumbnails appear here ...</span>
                </div>
        </>
    )
}