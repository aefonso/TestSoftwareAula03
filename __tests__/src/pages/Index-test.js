import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes do Index', () => {
        const { getByText, getByTestId } = render(<App />);
        expect(getByText("Tela Inicial")).toBeTruthy();
        expect(getByTestId("bt-index")).toBeTruthy();
    })
})

describe('Testes de Navegação', () => {
    it('Navegação de Index para Dobro', () => {
        const { getByText ,getByTestId} = render(<App />);
        const botao = (getByTestId("bt-index"));
        fireEvent.press(botao);

        expect(getByText("Tela Dobro")).toBeTruthy();

    })
})

