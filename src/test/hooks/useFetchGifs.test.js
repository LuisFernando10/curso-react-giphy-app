
    import { useFetchGifs } from '../../hooks/useFetchGifs';
    import { renderHook } from '@testing-library/react-hooks';

    describe('Pruebas en: useFetchGifs.js', () => { 
        
        test('Debe: Retornar estado inicial', async() => { 
            
            const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') ); // Creamos un componente 'virtual' y aquí se ejecutará nuestro CustomHook
            const { data, loadig } = result.current;

            await waitForNextUpdate(); // Limpiamos después de cargar la data

            expect( data ).toEqual([]);
            expect( loadig ).toBe(true);
         });

         test('Debe: Retornar el arreglo de imágenes y el loading en false', async() => { 
            
            const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );

            await waitForNextUpdate(); // Esperamos por próximo cambio en el 'useState' y limpiamos el Hook

            const { data, loadig } = result.current;
            
            //const [ data, loadig ] = useFetchGifs( 'One Punch' );

            expect( data.length ).toBe(10);
            expect( loadig ).toBe(false);
         });
     });