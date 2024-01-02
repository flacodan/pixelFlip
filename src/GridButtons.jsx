export default function GridButtons ({ pixelGrid, onSave, onDelete, currentPage }) {

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
        // Sending the 'currentPage'-th as array index to be cleared
        // 'Clear' will replace all the color values in the grid with the 'emptyGrid' array
        //onClear(currentPage); 
    }

    const handleDelete = () => {
        // Sending the 'currentPage'-th as index to be deleted
        // Remember to set currentArray appropriately
        onDelete(currentPage); 
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
