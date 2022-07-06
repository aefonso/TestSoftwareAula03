import { Text, View, Button } from "react-native";

export default props => {
    return (
        <View>
            <Text>Texto Inicial</Text>
            <Button
            title="Ir para Index"
            onPress={() => {
                props.navigation.navigate("Index");
            }}
            />
        </View>
    )
}