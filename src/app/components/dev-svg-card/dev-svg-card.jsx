import data from '../../../assets/devicon.json';
import './dev-svg-card.scss';
import {getRandomArbitrary} from "../dev-font-card/dev-font-card";
import importSgvAsReactComponent from "../../utils/import-sgv-as-react-component";
import * as React from "react";
import {Zoom} from "react-awesome-reveal";

const jsonArray = Array.from(data);

function getName() {
    let names = jsonArray.map(iteration => iteration.name);
    let randomNumber = getRandomArbitrary(0, names.length);
    return names[randomNumber];
}

function getFileName(name) {
    let fileName = null;
    let devIconInfo = jsonArray.find(predicate => predicate.name === name);
    if (devIconInfo) {
        let svgVersions = Array.from(devIconInfo.versions.svg);
        let plainVersion = svgVersions.find(predicate => predicate.includes("plain"));
        let originalVersion = svgVersions.find(predicate => predicate.includes("original"));
        let svgWordMarkVersion = svgVersions.find(predicate => predicate.includes("wordmark"));
        if (originalVersion) {
            fileName = name + "-" + originalVersion;
        } else if (svgWordMarkVersion) {
            fileName = name + "-" + svgWordMarkVersion;
        } else {
            fileName = name + "-" + svgVersions[0];
        }
    }
    return fileName;
}

function getColor(name) {
    let color = null;
    let devIconInfo = jsonArray.find(predicate => predicate.name === name);
    if (devIconInfo) {
        color = devIconInfo.color;
    }
    return color;
}

const DevSvgCard = ({name, fileName, backgroundColor, fillWhite}) => {
    if (name == null) {
        name = getName();
    }

    if (fileName == null) {
        fileName = getFileName(name);
    }

    let color = getColor(name);

    const {SvgIcon} = importSgvAsReactComponent(name, fileName);

    if (SvgIcon) {
        return (
            <>
                <Zoom triggerOnce={true}>
                    <div className="my-card flex flex-col items-center p-4 overflow-hidden gap-4">
                        <div className="h-32 w-32">
                            <div className="w-full h-full flex border-4 shadow-md border-white rounded-full svg-avatar overflow-hidden"
                                 style={{backgroundColor: `${backgroundColor ? backgroundColor : color}`}}>
                                <SvgIcon className={fillWhite ? "svg-fill-white" : null}/>
                            </div>
                        </div>
                        <div className="w-full border-white border-2 text-hero-color text-center bg-white rounded capitalize shadow-sm text-sm">
                            {name}
                        </div>
                    </div>
                </Zoom>
            </>
        );
    }

    return null;

}

export default DevSvgCard;