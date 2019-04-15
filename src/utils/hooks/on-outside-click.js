import { useEffect } from 'react';

export default function onOutsideClick(ref, handler) {
    useEffect(() => {
        const listener = e => {
            /* istanbul ignore next */
            if (!ref.current) return;

            if (!ref.current.contains(e.target)) {
                handler && handler(e);
            }
        };

        document.addEventListener('click', listener);

        return () => document.removeEventListener('click', listener);
    }, [ref, handler]);
}
