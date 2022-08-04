import { useRouter } from "next/router";
import api from '../../services/api'

// Construindo uma página Dinamica
export default function Episode(){
    const route = useRouter();
    return ( 
        <>
            <h1>{route.query.id}</h1>
        </>
    );
}

