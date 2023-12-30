export default function GridButtons () {

    const handleSave = () => {
        //what needs to happen here?
        //onSave(db);
    }

    return (
        <>  
            <div className="buttonDiv">
                <div><button onClick={handleSave}>SAVE PAGE</button></div>
                <div><button>&lt;&lt; PAGE</button></div>
                <div><button>PAGE &gt;&gt;</button></div>
                <div><button>COPY PREV</button></div>
                <div><button style={{color: 'red'}}>CLEAR PAGE</button></div>
                <div><button>FLIP!</button></div>
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