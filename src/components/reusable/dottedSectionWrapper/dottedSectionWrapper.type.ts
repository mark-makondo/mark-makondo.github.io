import React from 'react';

export default interface Props {
    children: React.ReactNode;
    className?: string;
    total: number;
    current: number;
    background?: string;
    id: string;
    isLoading?: boolean;
    style?: React.CSSProperties;
}
