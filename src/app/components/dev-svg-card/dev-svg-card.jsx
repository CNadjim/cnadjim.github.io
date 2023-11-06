import './dev-svg-card.scss';
import importSgvAsReactComponent from "../../utils/import-sgv-as-react-component";
import * as React from "react";
import {getBackgroundColor, getFileName, getIconByName} from "../../utils/devicon";

const LoadingSvg = () => {
    return (
        <>
            <div className="flex flex-1 animate-pulse ">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
        </>
    )
}
const DevSvgCard = ({name, fileName, tooltip, backgroundColor, fillWhite}) => {
    let icon = getIconByName(name);

    if (fileName == null) {
        fileName = getFileName(icon, "svg");
    }

    if (backgroundColor == null) {
        backgroundColor = getBackgroundColor(icon);
    }

    const {loading, SvgIcon} = importSgvAsReactComponent(icon.name, fileName);

    let content = loading ? <LoadingSvg/> : <SvgIcon className={fillWhite ? "svg-fill-white" : ''}/>

    return (
        <>
            <div className="my-card flex flex-col p-4 overflow-hidden">
                <div className="flex flex-1 border-4 shadow-md border-white rounded-full svg-avatar overflow-hidden"
                     style={{backgroundColor: `${loading ?  'white' : backgroundColor}`}}>
                    ${content}
                </div>
                <div
                    className="flex-none px-4 py-1 mt-3 text-hero-color text-center bg-white rounded-full capitalize shadow-md text-sm">
                    {loading ? 'loading ... ' : tooltip ? tooltip : icon.name}
                </div>
            </div>
        </>
    );

}

export default DevSvgCard;