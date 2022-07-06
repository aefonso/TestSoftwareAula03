import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes do Index', () => {
        const { getByText, getByTestId } = render(<App />);
        expect(getByText("Texto Inicial")).toBeTruthy();
        expect(getByTestId("bt-index")).toBeTruthy();
    })
})

describe('Testes de Navegação', () => {
    it('Navegação de Index para Dobro', () => {
        const { getByTestId } = render(<App />);
        const botao = (getByTestId("bt-index"));
        fireEvent.press(botao);

    })
})

