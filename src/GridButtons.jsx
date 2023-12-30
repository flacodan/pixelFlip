export default function GridButtons () {
    return (
        <>  
            <div className="buttonDiv">
                <div><button onClick={onSave}>SAVE PAGE</button></div>
                <div><button>&lt;&lt; PAGE</button></div>
                <div><button>PAGE &gt;&gt;</button></div>
                <div><button>COPY PREV</button></div>
                <div><button style={{color: 'red'}}>CLEAR PAGE</button></div>
                <div><button>FLIP!</button></div>
            </div>
        </>
    )
}