import * as React from 'react';

const Hash: React.FC<HashProps> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hash" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="9" x2="19" y2="9" />
            <line x1="5" y1="15" x2="19" y2="15" />
            <line x1="11" y1="4" x2="7" y2="20" />
            <line x1="17" y1="4" x2="13" y2="20" />
            <h6 className="text-info text-center">VulcansOnParade</h6>
        </svg>
    );
}

interface HashProps {}

export default Hash; 