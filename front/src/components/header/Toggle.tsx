import React from 'react';
import { useState } from 'react';


const Toggle = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (<div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
            . . .
        </button> {
            isExpanded && <ul>
                <li>Entrée
                </li>
                <li>Plat
                </li>
                <li>Desserts
                </li>
            </ul>
        }
    </div>);

};

export default Toggle;