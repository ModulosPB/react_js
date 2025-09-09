import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        //en un H2
        expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')

    });

    test('debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        // elemento sobre el que hago click
        fireEvent.click( screen.getByText('+1') )
        // como el valor inicial es 10 espero 11
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {
        //Arrange (Preparar)
        render( <CounterApp value={ initialValue } /> );
        //Act (Actuar)
        fireEvent.click( screen.getByText('-1') );
        //Assert (Afirmar)
        expect( screen.getByText('9') ).toBeTruthy();

    });
//screen.debug(); no mostra el html generado después del evento
    test('debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        // busca atributo, no contenido, por si este cambia
        // usa aria-label pero aparece al renderizar como name????
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });




});