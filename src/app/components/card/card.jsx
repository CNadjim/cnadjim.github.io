import * as React from "react";
import './card.scss';
const Card = () => {
    return (
        <>
            <div
                className="my-card flex items-center m-5 relative p-4 bg-white rounded-lg overflow-hidden border shadow-md">
                <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                <div className="ml-3">
                    <p className="font-medium text-gray-800">John doe</p>
                    <p className="text-sm text-gray-600">Last online 4 hours ago</p>
                </div>
            </div>
        </>
    );
};

export default Card;