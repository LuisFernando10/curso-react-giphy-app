
    import React, { Fragment, useState } from 'react';
    import { CategoryAdd } from './components/CategoryAdd';
    import { GifGrid } from './components/GifGrid';
    //import PropTypes from 'prop-types'

    const GifExpertApp = () => {

        //const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
        const [ categories, setCategories ] = useState([ 'One Punch' ]);

        /*const handleAdd = () => {
            
            setCategories( [ ...categories, 'HunterXHunter' ] );
            //setCategories( category => [ ...categories, 'HunterXHunter' ] );
        };*/

        return(
            <>
                <h2>GifExpertAps</h2>
                <CategoryAdd setCategories={ setCategories }/>
                <hr/>
                <ol>
                    {
                        categories.map( category => (
                            <GifGrid
                                key={ category }
                                category={ category }
                            />
                        ))
                    }
                </ol>
            </>
        );
    };

    export default GifExpertApp;
    
    