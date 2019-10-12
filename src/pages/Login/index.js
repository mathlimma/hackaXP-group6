import { Container,Content,Input,Header,LoginButton,TextButton,Image,TextSwitch,SwitchView } from '../authStyles/styles'
import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

export default class Login extends Component
{
    state = 
    {
        email: '',
        password: '',
        loading: false
    }

    handleLogin = async () =>
    {
        this.setState({loading: true })
        try
        {
            this.props.navigation.navigate('Main')
        }
        catch(error)
        { 
            console.log(error);
        }

    }

    render()
    {
        return (
            <Container>
                <Header>
                    <Image source={require('../../assets/logo.png')}/>
                </Header>
                <Content>
                    <Input keyboardType="email-address" autoCapitalize='none' autoCorrect={false} autoFocus={true} placeholder="Email" />
                    <Input secureTextEntry autoCapitalize='none' placeholder = "Senha"  />
                    <LoginButton onPress={this.handleLogin}>
                        <TextButton>Logar</TextButton>
                    </LoginButton>
                    {this.state.loading && <ActivityIndicator size="small" color="#F2E74B" />}
                </Content>
            </Container>
        )
    }
}