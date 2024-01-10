

export default function Grid( { pixelGrid, selectedColor: selectedColor, onPixelClick, currentPage } ) {

    let displayPage = currentPage + 1;

    const handlePixelClick = (event) => {
        const { target } = event;
        if(target.tagName === 'TD') {
            onPixelClick(target, selectedColor);
        }
    }

    const loadPixelColors = () => {
        const pixelTDs = [];
        // map pixels one by one onto <td> elements, they'll be assigned to rows later
        for (let i = 0; i < 64; i++) {
            pixelTDs.push(<td key={i} id={i} style={{ backgroundColor: pixelGrid[i] }} ></td>);
        }
        return pixelTDs;
    }

    const loadRowsWithPixels = () => {
        const rows = [];
        let pixelList = loadPixelColors();
        for (let i = 0; i < 8; i++) {
            rows.push(<tr key={i}>{pixelList.slice(i * 8, (i + 1) * 8)}</tr>); // (0, 8) -> (8, 16) etc - slices  pixelList by 8s and puts them in a row
        }
        return rows;
    }

    return (
        <>
            <table onClick={handlePixelClick}>
                <tbody>
                    {loadRowsWithPixels()}
                </tbody>
            </table>
            <p>PAGE {displayPage}</p>
        </>
    )
}
