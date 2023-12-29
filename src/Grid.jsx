

export default function Grid( { selectedColor: selectedColor, onPixelClick } ) {

    // let [gridEdited, setGridEdited] = useState([]);
    // let [selectedPixel, setSelectedPixel] = useState(null);

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
                    <td style={{ backgroundColor: null }} id='0'></td>
                    <td style={{ backgroundColor: null }} id='1'></td>
                    <td style={{ backgroundColor: null }} id='2'></td>
                    <td style={{ backgroundColor: null }} id='3'></td>
                    <td style={{ backgroundColor: null }} id='4'></td>
                    <td style={{ backgroundColor: null }} id='5'></td>
                    <td style={{ backgroundColor: null }} id='6'></td>
                    <td style={{ backgroundColor: null }} id='7'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='8'></td>
                    <td style={{ backgroundColor: null }} id='9'></td>
                    <td style={{ backgroundColor: null }} id='10'></td>
                    <td style={{ backgroundColor: null }} id='11'></td>
                    <td style={{ backgroundColor: null }} id='12'></td>
                    <td style={{ backgroundColor: null }} id='13'></td>
                    <td style={{ backgroundColor: null }} id='14'></td>
                    <td style={{ backgroundColor: null }} id='15'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='16'></td>
                    <td style={{ backgroundColor: null }} id='17'></td>
                    <td style={{ backgroundColor: null }} id='18'></td>
                    <td style={{ backgroundColor: null }} id='19'></td>
                    <td style={{ backgroundColor: null }} id='20'></td>
                    <td style={{ backgroundColor: null }} id='21'></td>
                    <td style={{ backgroundColor: null }} id='22'></td>
                    <td style={{ backgroundColor: null }} id='23'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='24'></td>
                    <td style={{ backgroundColor: null }} id='25'></td>
                    <td style={{ backgroundColor: null }} id='26'></td>
                    <td style={{ backgroundColor: null }} id='27'></td>
                    <td style={{ backgroundColor: null }} id='28'></td>
                    <td style={{ backgroundColor: null }} id='29'></td>
                    <td style={{ backgroundColor: null }} id='30'></td>
                    <td style={{ backgroundColor: null }} id='31'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='32'></td>
                    <td style={{ backgroundColor: null }} id='33'></td>
                    <td style={{ backgroundColor: null }} id='34'></td>
                    <td style={{ backgroundColor: null }} id='35'></td>
                    <td style={{ backgroundColor: null }} id='36'></td>
                    <td style={{ backgroundColor: null }} id='37'></td>
                    <td style={{ backgroundColor: null }} id='38'></td>
                    <td style={{ backgroundColor: null }} id='39'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='40'></td>
                    <td style={{ backgroundColor: null }} id='41'></td>
                    <td style={{ backgroundColor: null }} id='42'></td>
                    <td style={{ backgroundColor: null }} id='43'></td>
                    <td style={{ backgroundColor: null }} id='44'></td>
                    <td style={{ backgroundColor: null }} id='45'></td>
                    <td style={{ backgroundColor: null }} id='46'></td>
                    <td style={{ backgroundColor: null }} id='47'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='48'></td>
                    <td style={{ backgroundColor: null }} id='49'></td>
                    <td style={{ backgroundColor: null }} id='50'></td>
                    <td style={{ backgroundColor: null }} id='51'></td>
                    <td style={{ backgroundColor: null }} id='52'></td>
                    <td style={{ backgroundColor: null }} id='53'></td>
                    <td style={{ backgroundColor: null }} id='54'></td>
                    <td style={{ backgroundColor: null }} id='55'></td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: null }} id='56'></td>
                    <td style={{ backgroundColor: null }} id='57'></td>
                    <td style={{ backgroundColor: null }} id='58'></td>
                    <td style={{ backgroundColor: null }} id='59'></td>
                    <td style={{ backgroundColor: null }} id='60'></td>
                    <td style={{ backgroundColor: null }} id='61'></td>
                    <td style={{ backgroundColor: null }} id='62'></td>
                    <td style={{ backgroundColor: null }} id='63'></td>
                </tr>
                </tbody>
            </table>
            <p>PAGE 1</p>
        </>
    )
}