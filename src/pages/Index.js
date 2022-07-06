import { Text, View, Button } from "react-native";

export default props => {
    return (
        <View>
            <Text>Texto Inicial</Text>
            <Button
            title="Ir para dobro"
            onPress={() => {
                props.navigation.navigate("Dobro");
            }}
            />
        </View>
    )
}