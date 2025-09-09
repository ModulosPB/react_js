import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => {
    // se usa done para indicar a jest que espere a que termine la promesa
    // y no termine la prueba antes de que se resuelva
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
            
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
        
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
        //no pasará por el then si no encuentra el héroe
        //es decir, si hay ese héroe no pasaría el test
           .then( hero => {
               expect( hero ).toBeFalsy();
               done();
           })
           .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
            });
        
    });


});