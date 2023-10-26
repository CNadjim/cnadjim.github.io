import React, {useEffect, useRef, useState} from "react";

function importSgvAsReactComponent(name, fileName) {
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`../../assets/icons/${name}/${fileName}.svg`)).ReactComponent;
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, []);

    return {loading, SvgIcon: ImportedIconRef.current};
}

export default importSgvAsReactComponent;