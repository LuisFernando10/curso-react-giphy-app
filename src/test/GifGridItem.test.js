
    import React from 'react';
    import '@testing-library/jest-dom';
    import { shallow } from 'enzyme';
    import { GifGridItem } from '../components/GifGridItem';
    
    describe('Pruebas al componente: GifGridItem.js', () => { 

        const title = 'Imagen Prueba';
        const url = 'https://localhost/algo.jpg';
        const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
        
        test('Retorna: Componente <GifGridItem />', () => { 
            expect( wrapper ).toMatchSnapshot();
        });

        test('Retorna: String con el párrafo del title', () => { 

            const element_p = wrapper.find('p');
            expect( element_p.text().trim() ).toBe( title );
        });

        test('Retorna: Strings con las props del componente', () => { 

            const element_img = wrapper.find('img');
            
            // Dos formas diferentes de recuperar las 'props' del componente mediante los métodos: 'props() y prop()'
            expect( element_img.props().src ).toBe( url );
            expect( element_img.prop('alt') ).toBe( title );
        });

        test('Valida: Clase animate__fadeInDown', () => { 

            const element_div = wrapper.find('div');
            
            //const clas_name = element_div.prop( 'className' );
            //expect( className.includes('animate__fadeInDown') ).toBe( true );
            
            expect( element_div.hasClass('animate__fadeInDown') ).toBe( true );
        });
     });