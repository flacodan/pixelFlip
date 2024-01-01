export default function GridButtons ({ pixelGrid, onSave, onDelete }) {

    const handleSave = () => {
        // current grid sent to the db[currentPage] on server.js as an array pushed onto the array of existing arrays. PUT
        console.log("In GridButtons, grid to save is: " + pixelGrid);
        onSave(pixelGrid);
    }

    const handlePrevPg = () => {
        // trigger 'Save' and then LOAD db[currentPage - 1] if it exists PUT GET
        // Remember to set currentArray appropriately
    }

    const handleNextPg = () => {
        // trigger 'Save' and then LOAD db[currentPage + 1] if it exists PUT GET or if next does not exist PUT POST
        // Remember to set currentArray appropriately
    }

    const handleCopy = () => {
        // (if db[currPg-1] exists) LOADs previous pg w/o changing currentPage# GET 
    }

    const handleClear = () => {
        // Sending the 0th array to be cleared until multiple arrays are implemented
        // 'Clear' will replace all the color values in the grid with the 'emptyGrid' array
        //onClear(0); 
    }

    const handleDelete = () => {
        // Sending the 0th array to be deleted until multiple arrays are implemented
        // 'Delete' will remove the currentArray and if index currentArray!=0 will move to index  currentArray-1
        // If indexCurrArray=0 && db length>1 we move to currentArray+1
        // Else we must be on the first and only pixelGrid array, so we just replace the current grid with a blank
        // Remember to set currentArray appropriately
        onDelete(0); 
    }

    const handleFlip = () => {
        // Loads db[0] pause 200ms, LOAD db[1], etc, looping to db.length
    }


    return (
        <>  
            <div className="buttonDiv">
                <div><button onClick={handleSave}>SAVE PAGE</button></div>
                <div><button onClick={handlePrevPg}>&lt;&lt; PAGE</button></div>
                <div><button onClick={handleNextPg}>PAGE &gt;&gt;</button></div>
                <div><button onClick={handleCopy}>COPY PREV</button></div>
                <div><button onClick={handleClear} style={{color: 'red'}}>CLEAR PAGE</button></div>
                <div><button onClick={handleDelete} style={{color: 'red'}}>DELETE PAGE</button></div>
                <div><button onClick={handleFlip}>FLIP!</button></div>
            </div>
        </>
    )
}


        
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