import { View, Text, TouchableOpacity } from "react-native";
const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dd99ff",
    },
    h1: {},
    h2: {},
    h3: {},
    header: {},
};
export default function Home() {
    return (
        <View style={styles.container}>
            <Text>HOME PRINCIPAL</Text>
        </View>
    );
}
