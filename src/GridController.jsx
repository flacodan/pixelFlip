import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "./Grid";
import GridButtons from "./GridButtons";
import ColorPalette from "./ColorPalette";


let currentPage = 0;

export default function GridController() {

    const [selectedColor, setSelectedColor] = useState('transparent');
    const [pixelGrid, setPixelGrid] = useState([]); // pixelGrid is an array of colors, length 64 ( for 8 x 8 table )

    useEffect(() => {
        axios.get('/getAllPages')
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
        let response = await axios.put(`/saveGrid/${indexToSave}`, pixelGrid);
        return response;
    }

    const prevPage = async () => {
        // Trigger Save on current page first
        let getDbResponse = await axios.get('/getAllPages'); // Get full db because we need length and also to display the next page
        let currDb = getDbResponse.data;
        const dbLength = currDb.length;
        if(currentPage === 0) { // if a current page is first page, remain on page
            alert("Already on the first page.");
        } else {
            currentPage -= 1;
        }
        setPixelGrid(currDb[currentPage]);
    }

    const nextPage = async () => {
        // Trigger Save on current page first
        let getDbResponse = await axios.get('/getAllPages'); // Get full db because we need length and also to display the next page
        let currDb = getDbResponse.data;
        const dbLength = currDb.length;
        if((dbLength - currentPage) === 1) { // if a current page is last page, create a blank page
            let response = await axios.put(`/addNewPage/${dbLength}`);
            currDb = response.data;
        }
        currentPage += 1;
        setPixelGrid(currDb[currentPage]);
    }

    const copyPrev = async () => {
        if(confirm('This will replace your current pixel page, continue?')) {
            // load pixels from prev page
            let getDbResponse = await axios.get('/getAllPages'); // Get full db to copy the prev page
            let currDb = getDbResponse.data;
            let pageToCopy = currentPage - 1;
            setPixelGrid(currDb[pageToCopy]);
        }
    }

    const clearGridPage = async (indexToClear) => {
        indexToClear = currentPage;
        let response = await axios.post(`/clearGrid/${indexToClear}`);
        setPixelGrid(response.data[indexToClear]);
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

    function delay(milliseconds){
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    
    const flipPages = async () => {
        // get current db, flip through each index/page
        console.log("Now flipping pages...");
        let getDbResponse = await axios.get('/getAllPages');
        let currDb = getDbResponse.data;
        const dbLength = currDb.length;
        for(let i = 0; i < dbLength; i++) {
            //load each pixel grid page
            setPixelGrid(currDb[i]);
            await delay(200);
        };
    }

    return (
        <>
            <div className="parent">
                <div id = "paletteDiv">
                    <ColorPalette 
                    onColorClick={handleColorClick}/>
                </div>
                <div>
                    <Grid 
                    pixelGrid={pixelGrid} 
                    selectedColor={selectedColor} 
                    onPixelClick={handlePixelClick} 
                    currentPage={currentPage}/>
                </div>
                <div>
                    <GridButtons 
                    pixelGrid={pixelGrid} 
                    onSave={saveGridToDb} 
                    onPrevious={prevPage} 
                    onNext={nextPage}
                    onCopy={copyPrev} 
                    onClear={clearGridPage} 
                    onDelete={deleteGrid} 
                    onFlip={flipPages}
                    currentPage={currentPage} />
                </div>
            </div>
                <div id="footerDiv">
                    <span>... pixelGridPage thumbnails appear here ...</span>
                </div>
        </>
    )
}