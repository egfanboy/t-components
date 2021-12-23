import { useState } from 'react';

export const useDialog = () => {
    const [showDialog, setShowDialog] = useState(false);

    function toggle() {
        setShowDialog(!showDialog);
    }

    return { showDialog, toggle };
};
