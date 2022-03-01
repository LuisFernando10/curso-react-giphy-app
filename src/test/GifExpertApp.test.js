
    import GifExpertApp from '../GifExpertApp';
    import { shallow } from 'enzyme'

    describe('Prueba en: GifExpertApp.js', () => { 
        
        const wrapper = shallow( <GifExpertApp /> );

        test('Debe: Retornar componente <GifExpertApp />', () => { 
            expect( wrapper ).toMatchSnapshot();    
        });

        test('Debe: Mostrar listado de categorías', () => { 
        
            const categories = ['Yuyu Hakusho', 'Death Note'];
            const wrapper = shallow( <GifExpertApp defaultCategory={ categories } /> );

            expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('GifGrid').length ).toBe( categories.length )
        })
     })