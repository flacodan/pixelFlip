export default function GridButtons () {
    return (
        <>  
            <div className="buttonDiv">
                <div><button>PREV PAGE</button></div>
                <div><button>NEXT PAGE</button></div>
                <div><button>COPY PREV</button></div>
                <div><button style={{color: 'red'}}>CLEAR PAGE</button></div>
                <div><button>FLIP!</button></div>
            </div>
        </>
    )
}