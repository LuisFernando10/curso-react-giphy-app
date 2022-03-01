
    import React from 'react';
    import '@testing-library/jest-dom'; // Para tener las ayudas
    import { shallow } from 'enzyme';
    import { CategoryAdd } from '../components/CategoryAdd';

    describe('Prueba en CategoryAdd.js', () => { 
        
        const setCategories = jest.fn(); // Jest crea una función por default para usar como referencia
        let wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);

        // Reinicio de procesos/datos (antes de cada prueba)
        beforeEach( () => {
            jest.clearAllMocks(); // Limpiamos simulaciones o mocks/funciones en jest
            wrapper = shallow(<CategoryAdd setCategories={ setCategories } />);
        });

        test('Debe: Retornar componente < CategoryAdd />', () => { 
            expect( wrapper ).toMatchSnapshot();
        });

        test('Debe: Detectar cambio en la caja de texto', () => {

            const element_input = wrapper.find('input');
            const value = 'Hola Mundo';

            element_input.simulate('change', {
                target: {
                    value
                }
            });

            expect( wrapper.find('p').text().trim() ).toBe( value );
        });

        test('Debe: Bloquear el submit cuando no hay valor en el input', () => { 
          
            //wrapper.find('form').simulate('submit', { preventDefault: () => {} }); // Forma larga para función del 'preventDefault'
            wrapper.find('form').simulate('submit', { preventDefault(){} }); // Forma corta de definir una referencia de función para el 'preventDefault'

            expect( setCategories ).not.toHaveBeenCalled();// Método para saber si la función 'setCategories' se ejecutó 1 o más veces
        });

        test('Debe: llamar setCateories y limpiar caja de texto', () => {
          
            const value = 'Hola Mundo';

            // 1. (Simular el Change), cambiando el valor del input y estableciendo un valor 'const value'
            wrapper.find('input').simulate('change', { target: { value } });

            // 2. (Simular el Submit)
            wrapper.find('form').simulate('submit', { preventDefault(){} });

            // 3. Llamar a 'setCategory' por lo menos una vez
            expect( setCategories ).toHaveBeenCalled(); // Llamada al menos 1 vez
            // expect( setCategories ).toHaveBeenCalledTimes(2); // Llamada por lo menos 2 veces 
            // expect( setCategories ).toHaveBeenCalledWith( expect.any(function) ); // Valida que el argumento sea estrictamente cualquier tipo de función

            // 4. El valor del input se debe setear a: ''
            expect( wrapper.find('input').prop('value') ).toBe('');
        });
     });