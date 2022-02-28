
    import { useEffect, useState } from "react"
    import { getGifs } from "../components/helpers/getGifs";

    export const useFetchGifs = ( category ) => {
      
        const [state, setState] = useState( {
            data: [],
            loadig: true
        } );

        useEffect( () => {

            getGifs( category )
                .then( imgs => {
                    setState({
                        data: imgs,
                        loadig: false 
                    });
                });
        }, [ category ] )

        return state;
    }
    