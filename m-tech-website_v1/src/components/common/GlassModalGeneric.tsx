import React from 'react';

interface DataItem {
    title: string;
    desc: string;
    details: string[];
}

interface GlassModalGenericProps {
    isOpen: boolean;
    onClose: () => void;
    data: DataItem;
}

const GlassModalGeneric: React.FC<GlassModalGenericProps> = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white border-opacity-50 text-black max-w-md w-11/12 relative text-left">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-3xl font-bold text-white cursor-pointer"
                >
                    &times;
                </button>

                <h2 className="text-center text-2xl font-bold border-b-2 border-white border-opacity-50 pb-2 mb-4">
                    {data.title}
                </h2>

                <p className="mb-4 text-base">{data.desc}</p>

                <ul className="list-disc list-inside space-y-2">
                    {data.details.map((detail, index) => (
                        <li key={index} className="text-sm">{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GlassModalGeneric;