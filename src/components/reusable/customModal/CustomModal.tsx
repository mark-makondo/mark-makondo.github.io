import React from 'react';
import './index.css';
import Props from './customModal.type';

const CustomModal: React.FC<Props> = ({
    className = '',
    renderBody = () => 'Sample Modal',
    isOpen = false,
    onClose = () => '',
}) => {
    const handleOnClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onClose();
    };

    if (!isOpen) return <></>;
    return (
        <div className="r-custom-modal">
            <div className="r-custom-modal-overlay" onClick={(e) => handleOnClose(e)}></div>
            <div className={`r-custom-modal-body ${className}`}>
                <div className="r-custom-modal-exit" onClick={(e) => handleOnClose(e)}>
                    🗙
                </div>
                {renderBody()}
            </div>
        </div>
    );
};

export default CustomModal;
