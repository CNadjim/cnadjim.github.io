import React, {useLayoutEffect, useRef, useState} from "react";
import DevFontCard from "../dev-font-card/dev-font-card";
import './square-background.scss';

const SquareBackgroundTech = (props) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(elementRef.current.parentNode.offsetWidth);
            setHeight(elementRef.current.parentNode.offsetHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const columns = Math.round(height / 150) + 2;
    const rows = Math.round(width / 150) + 2;

    let mask = props.mask ? props.mask : "[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]";

    return (
        <>
            <div ref={elementRef}
                 className={`absolute z-0 w-full h-full overflow-hidden ${mask}`}>
                <table>
                    <tbody>
                    {[...Array(columns)].map((column, columnKey) => {
                        return (
                            <tr key={columnKey + 'tr'}>
                                {[...Array(rows)].map((row, rowKey) => {
                                    return (
                                        <td key={rowKey + 'td'}>
                                            <DevFontCard/>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default SquareBackgroundTech;