import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola, Soy Goku';
    // con la sentencia de abajo se puede ver el html generado, monta el componente
    //     const { container } = render( <FirstApp title={ title } /> );
    // cuando el html del comopnente no se va a cambiar ya se puede desscomentar el snapshot
    // si ponemos consolo.log(container) vemos las propiedades que expone
    // se parece a un nodo HTML
// la sentencia de abajo crea un archivo en la carpeta __snapshots__
// y compara con el que ya existe
// si no existe lo crea
// si cambia el html generado falla la prueba
// se puede actualizar con el comando jest --updateSnapshot o jest -u
// puede no ser útil si el componente cambia mucho
// cuando da error se puede pulsar "u" en la terminal para actualizar el snapshot
    //     expect( container ).toMatchSnapshot();

    // });

    test('debe de mostrar el título en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        //busca títle en el html generado
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        //esto es mas estricto que toContain (si ha espacios no cuela)
        // expect(h1.innerHTML).toBe( title )
        expect(h1.innerHTML).toContain( title )
        //este atributo lo pusimo en el h1 del componente FirstApp para pruebas
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText,getByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );
        //porque hay dos subtitulos, toBeTruthy solo encuentra uno y da error
        // expect( getByText(subTitle) ).toBeTruthy();
        expect( getAllByText(subTitle).length ).toBe(2);

    });


});