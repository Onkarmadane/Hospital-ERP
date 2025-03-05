import { useFloating, offset, flip, arrow } from '@floating-ui/react';
import { useState } from 'react'

function Tooltip({ content, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { x, y, reference, floating, strategy, middlewareData } = useFloating({
        placement: 'top',
        middleware: [offset(8), flip()],
    });

    return (
        <div
            ref={reference}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {children}
            {isOpen && (
                <div
                    ref={floating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        right: x ?? 0,
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        zIndex: 50,
                        marginRight: '200px'
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
}

export default Tooltip