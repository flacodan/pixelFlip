

export default function Grid( { selectedColor: selectedColor, onPixelClick } ) {

    // let [gridEdited, setGridEdited] = useState([]);
    // let [selectedPixel, setSelectedPixel] = useState(null);
    let currentPage

    const handlePixelClick = (event) => {
        const { target } = event;
        if(target.tagName === 'TD') {
            onPixelClick(target, selectedColor);
        }
    }

    return (
        <>
            <table onClick={handlePixelClick}>
                <tbody>
                <tr>
                    {/* <td style={{ backgroundColor: 'blue' }} id='0'></td> */}
                    <td id='0'></td>
                    <td id='1'></td>
                    <td id='2'></td>
                    <td id='3'></td>
                    <td id='4'></td>
                    <td id='5'></td>
                    <td id='6'></td>
                    <td id='7'></td>
                </tr>
                <tr>
                    <td id='8'></td>
                    <td id='9'></td>
                    <td id='10'></td>
                    <td id='11'></td>
                    <td id='12'></td>
                    <td id='13'></td>
                    <td id='14'></td>
                    <td id='15'></td>
                </tr>
                <tr>
                    <td id='16'></td>
                    <td id='17'></td>
                    <td id='18'></td>
                    <td id='19'></td>
                    <td id='20'></td>
                    <td id='21'></td>
                    <td id='22'></td>
                    <td id='23'></td>
                </tr>
                <tr>
                    <td id='24'></td>
                    <td id='25'></td>
                    <td id='26'></td>
                    <td id='27'></td>
                    <td id='28'></td>
                    <td id='29'></td>
                    <td id='30'></td>
                    <td id='31'></td>
                </tr>
                <tr>
                    <td id='32'></td>
                    <td id='33'></td>
                    <td id='34'></td>
                    <td id='35'></td>
                    <td id='36'></td>
                    <td id='37'></td>
                    <td id='38'></td>
                    <td id='39'></td>
                </tr>
                <tr>
                    <td id='40'></td>
                    <td id='41'></td>
                    <td id='42'></td>
                    <td id='43'></td>
                    <td id='44'></td>
                    <td id='45'></td>
                    <td id='46'></td>
                    <td id='47'></td>
                </tr>
                <tr>
                    <td id='48'></td>
                    <td id='49'></td>
                    <td id='50'></td>
                    <td id='51'></td>
                    <td id='52'></td>
                    <td id='53'></td>
                    <td id='54'></td>
                    <td id='55'></td>
                </tr>
                <tr>
                    <td id='56'></td>
                    <td id='57'></td>
                    <td id='58'></td>
                    <td id='59'></td>
                    <td id='60'></td>
                    <td id='61'></td>
                    <td id='62'></td>
                    <td id='63'></td>
                </tr>
                </tbody>
            </table>
            <p>PAGE 1</p>
        </>
    )
}