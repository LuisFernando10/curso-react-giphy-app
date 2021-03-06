
    import React, { useState } from 'react';
    import PropTypes from 'prop-types';

    export const CategoryAdd = ({ setCategories }) => {

        const [inputValue, setInputValue] = useState('');

        const handleInputValue = ( e ) => {
            setInputValue( e.target.value );
        };

        const handleSubmit = ( e ) => {
            e.preventDefault();
            
            if ( inputValue.trim().length > 2 ){
                setCategories( category => [ inputValue, ...category ] );
                setInputValue('');
            }
        };

        return (
            <form onSubmit={ handleSubmit }>
                <p>{ inputValue }</p>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputValue }
                />
            </form>
        )
    }

    CategoryAdd.propTypes = {
        setCategories: PropTypes.func.isRequired
    };
