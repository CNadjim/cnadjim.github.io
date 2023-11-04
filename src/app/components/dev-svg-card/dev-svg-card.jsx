import './dev-svg-card.scss';
import importSgvAsReactComponent from "../../utils/import-sgv-as-react-component";
import * as React from "react";
import {getBackgroundColor, getFileName, getIconByName} from "../../utils/devicon";


const DevSvgCard = ({name, fileName, tooltip, backgroundColor, fillWhite}) => {
    let icon = getIconByName(name);

    if (fileName == null) {
        fileName = getFileName(icon, "svg");
    }

    if (backgroundColor == null) {
        backgroundColor = getBackgroundColor(icon);
    }

    const {loading, SvgIcon} = importSgvAsReactComponent(icon.name, fileName);

    if (loading) {
        return null;
    }

    if (SvgIcon) {
        return (
            <>
                <div className="my-card flex flex-col p-4 overflow-hidden gap-4">
                    <div
                        className="flex flex-1 border-4 shadow-md border-white rounded-full svg-avatar overflow-hidden"
                        style={{backgroundColor: `${backgroundColor}`}}>
                        <SvgIcon className={fillWhite ? "svg-fill-white" : ''}/>
                    </div>
                    <div
                        className="flex-none px-4 py-1 text-hero-color text-center bg-white rounded-full capitalize shadow-md text-sm">
                        {tooltip ? tooltip : icon.name}
                    </div>
                </div>
            </>
        );
    }

    return null;

}

export default DevSvgCard;