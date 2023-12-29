import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import GridButtons from "./GridButtons";
import ColorPalette from "./ColorPalette";

export default function GridController() {

    const [selectedColor, setSelectedColor] = useState('transparent');
    const [pixelGrid, setPixelGrid] = useState([]);

    useEffect(() => {
        axios.get('/loadGridPage')
        .then((response) => {
            setPixelGrid(response.data)
        })
    }, []);

    const handleColorClick = (color) => { 
        console.log('Clicked a new palette color: ' + color);
        setSelectedColor(color); };

    const handlePixelClick = (pixel) => {
        if(pixel && selectedColor) {
            console.log('Clicked on pixel: ' + pixel.id);
            pixel.style.backgroundColor = selectedColor;
        }
    }

    const setPixelGrid = (db) => {
        for (let i = 0; i < db.length; i++) {
            const pixel = document.getElementById(i);
            pixel.style.backgroundColor = db[i];
        }
    }

    const saveGridToArray = () => {
        // create a temp array to hold values
        // get an object containing the table
        // set a pixelIndex counter to 0
        // loop through rows
        //     loop through td in each row
        //         if tc.color != null
        //              set temp array[pixelIndex] to the color value of the td
        //         else
        //                set temp array[pixelIndex] to null  // necessary? will it get set to null if no bgcolor attribute exists?
        //         increment pixelIndex
        // Verify that temp array.length = 64
        // return temp array to server.js POST
    }

    const deleteArray = () => {
        // Delete
        // Figure out how to indicate which array should be deleted
    }

    return (
        <>
            <div className="parent">
                    <div>
                        <ColorPalette onColorClick={handleColorClick}/>
                    </div>
                    <div>
                        <Grid selectedColor={selectedColor} onPixelClick={handlePixelClick}/>
                    </div>
                    <div>
                        <GridButtons/>
                    </div>
            </div>
        </>
    )
}