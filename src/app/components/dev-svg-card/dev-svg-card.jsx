import './dev-svg-card.scss';
import importSgvAsReactComponent from "../../utils/import-sgv-as-react-component";
import * as React from "react";
import {Zoom} from "react-awesome-reveal";
import {getBackgroundColor, getFileName, getIconByName} from "../../utils/devicon";


const DevSvgCard = ({name, fileName, tooltip,  backgroundColor, fillWhite}) => {
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
                <Zoom triggerOnce={true}>
                    <div className="my-card flex flex-col items-center p-4 overflow-hidden gap-4">
                        <div className="h-32 w-32">
                            <div
                                className="w-full h-full flex border-4 shadow-md border-white rounded-full svg-avatar overflow-hidden"
                                style={{backgroundColor: `${backgroundColor}`}}>
                                <SvgIcon className={fillWhite ? "svg-fill-white" : ''}/>
                            </div>
                        </div>
                        <div
                            className="w-full border-white border-2 text-hero-color text-center bg-white rounded capitalize shadow-sm text-sm">
                            {tooltip ? tooltip : icon.name}
                        </div>
                    </div>
                </Zoom>
            </>
        );
    }

    return null;

}

export default DevSvgCard;