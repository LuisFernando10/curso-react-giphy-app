    
    import React from 'react';
    import PropTypes from 'prop-types';
    import { useFetchGifs } from '../hooks/useFetchGifs';
    import { GifGridItem } from './GifGridItem';

    export const GifGrid = ( { category } ) => {

        /*const [images, setImages] = useState( [] );

        /// El Hook 'UseEffect', permite ejecutar una única vez cuando el componente es renderizado por primera vez
        useEffect( () => {
            getGifs( category )
                .then( setImages );// Sólo se coloca la referencia al el método porque la promesa y el método reciben un parámetro, entonces se omite
        }, [ category ]);// Agregamos la 'categoría' para que si 'cambia', entonces ejecutamos nuevamente el Effect
        */

        const { data:images, loadig } = useFetchGifs( category ); // 'data:images', es la forma de renombrar una 'prop' cuando en el archivo local, queremos personalizar su nombre

        return (
            <>
                <h2>{ category }</h2>

                {/* { loadig ? <p>Cargando...</p> : null } //Ésta es la forma larga de evaluar dos condiciones  */}
                { loadig && <p className='animate__animated animate__shakeX'>Cargando...</p> }
                <div className='card-grid'>
                    {
                        images.map( ( img ) => (
                            <GifGridItem
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
                </div>
            </>
        )
    }

    GifGrid.propTypes = {
        category: PropTypes.string.isRequired
    }