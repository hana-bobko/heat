import { View, Text, ImageBackground, TextInput } from "react-native";
import styled from "styled-components/native";
export default function SignIn() {
    return (
        <ImageBackground style={{ flex: 1, padding: 20, justifyContent: "flex-end" }} source={require("../../assets/images/bd-signin.png")}>
            <Container>
                <LogoText>Heat</LogoText>
                <MarketingText>
                    Chat, share, and <PurpleText>connect</PurpleText> with your friends in real
                    <DarkPurpleText> time</DarkPurpleText>
                </MarketingText>
                <ContainerForm>
                    <LabelText>Username or e-mail</LabelText>
                    <Input secureTextEntry={false} placeholder="example@example.com" />
                    <LabelText>Password</LabelText>
                    <Input secureTextEntry placeholder="******" />
                </ContainerForm>
                <ButtonSubmit>
                    <LabelButton>Entrar</LabelButton>
                </ButtonSubmit>
            </Container>
        </ImageBackground>
    );
}

const LogoText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #b574c4;
`;
const MarketingText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`;
const PurpleText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #b574c4;
`;
const DarkPurpleText = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #5a189a;
`;
const LabelText = styled.Text`
    font-size: 14px;
    margin-bottom: 4px;
    color: #fff;
`;
const ButtonSubmit = styled.TouchableOpacity`
    border-radius: 45px;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-bottom: 4px;
    height: 45px;
    background-color: #5a189a;
`;
const ContainerForm = styled.View`
    margin-top: 40px;
`;
const LabelButton = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;
const Input = styled.TextInput`
    background-color: #fff;
    height: 45px;
    border-radius: 6px;
    margin-bottom: 6px;
    padding-left: 12px;
`;
const Container = styled.View`
    height: 80%;
    //background-color: red;
`;
