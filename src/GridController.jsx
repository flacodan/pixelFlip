import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import GridButtons from "./GridButtons";
import ColorPalette from "./ColorPalette";

export default function GridController() {

    const [selectedColor, setSelectedColor] = useState('transparent');
    const [pixelGrid, setPixelGrid] = useState([]); // pixelGrid is an array of colors, length 64 ( for 8 x 8 table )
    let currentPage = 0;

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
        for (let i = 0; i < 64; i++) {
            const pixel = document.getElementById(i);
            pixel.style.backgroundColor = db[currentPage][i];
            tempArray.push(db[i]);
        }
        console.log("In loadGridPage, is db an array? " + Array.isArray(db));
        console.log("In lG db length is: " + db.length);
        console.log("In lG db is: " + db);
        console.log("In loadGridPage sending this to setPixelGrid: " + tempArray[currentPage]);
        setPixelGrid(tempArray[currentPage]);
        // setPixelGrid(tempArray);
    }

    const saveGridToDb = async (pixelGrid) => {
        let indexToSave = currentPage;
        console.log("GridController. Sending this array: " + pixelGrid);
        console.log(pixelGrid.length);
        await axios.put(`/saveGrid/${indexToSave}`, pixelGrid);
    }

    const deleteGrid = async (indexToDelete) => {
        indexToDelete = currentPage;
        let response = await axios.delete(`/deleteGrid/${indexToDelete}`);
        
        console.log("In deleteGrid, is response.data an array? " + Array.isArray(response.data));
        console.log("Array is: " + response.data);
        // loadGridPage(response.data[idx]); // send the db array index idx to loadGridPage to display it
        // loadGridPage(response.data); // send the db array index idx to loadGridPage to display it
        console.log("Set grid to this using idx " + indexToDelete + " : " + response.data[indexToDelete]);
        setPixelGrid(response.data[indexToDelete]); // !!!!!!!!!!!!!!! CHANGE THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <>
            <div className="parent">
                <div id = "paletteDiv">
                    <ColorPalette onColorClick={handleColorClick}/>
                </div>
                <div>
                    <Grid pixelGrid={pixelGrid} selectedColor={selectedColor} onPixelClick={handlePixelClick} currentPage={currentPage}/>
                </div>
                <div>
                    <GridButtons pixelGrid={pixelGrid} onSave={saveGridToDb} onDelete={deleteGrid} currentPage={currentPage} />
                </div>
            </div>
                <div id="footerDiv">
                    <span>... pixelGridPage thumbnails appear here ...</span>
                </div>
        </>
    )
}