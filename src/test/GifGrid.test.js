    
    import { GifGrid } from '../components/GifGrid';
    import { shallow } from 'enzyme';
    import { useFetchGifs } from '../hooks/useFetchGifs';
    
    // Forma de 'simular' o 'fingir' que ya traemos la información/data desde nuestro componente renderizado por nuesto CustomHook
    jest.mock('../hooks/useFetchGifs');

    describe('Pruebas en: GifGrid.js', () => { 
        
        const category = 'One Punch';

        test('Debe: Retornar componente < GifGrid />', () => { 

            // Aisgnamos el 'state' inicial del Hook y simulamos la data
            useFetchGifs.mockReturnValue({
                data: [],
                loading: true
            });

            const wrapper = shallow( <GifGrid category={ category }/> );
            expect( wrapper ).toMatchSnapshot();
         });

         test('Debe: Mostrar items cuando se cargan imágenes en useFetchGifs', () => { 
            
            const gifs = [
                {
                    id: 'ABC',
                    url: 'https://localhost/cualquier/cosa.png',
                    title: 'Cualquier Cosa'
                },
                {
                    id: 'DEF',
                    url: 'https://localhost/otra/cosa.png',
                    title: 'Otra Cosa'
                }
            ];
            
            useFetchGifs.mockReturnValue({
                data: gifs,
                loading: false
            });

            const wrapper = shallow( <GifGrid category={ category }/> );
            
            //expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('p').exists() ).toBe( false );
            expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

          });
     })