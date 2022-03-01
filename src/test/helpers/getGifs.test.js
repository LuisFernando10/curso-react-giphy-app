
    import { getGifs } from '../../components/helpers/getGifs';

    describe('Pruebas en método: getGifs()', () => { 
        
        test('Prueba: retorno de 10 elementos acorde a limit de la petición', async() => { 
            
            const gifs = await getGifs('One Peace');
            expect( gifs.length ).toBe(10);
        });

        test('Prueba: retorno de 0 elementos cuando no existe parámetro', async() => { 
            
            const gifs = await getGifs('');
            expect( gifs.length ).toBe(0);
        });
     })