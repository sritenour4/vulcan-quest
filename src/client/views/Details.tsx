import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { IStatue } from '../utils/types';

const Details: React.FC<DetailsProps> = props => {

    const { statueid } = useParams();
    const [statue, setStatue] = React.useState<IStatue>(null);  
    
    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/statues/${statueid}`);
            const blog = await res.json();
            
            setStatue(statue);            
        })();
    }, []);

    return (
        <main className="container">
          
        </main>
    );
};

interface DetailsProps { }

export default Details;