import { Container,Content,Input,Header,LoginButton,TextButton,Image,SwitchView,TextSwitch } from '../authStyles/styles'
import React, { Component } from 'react'


export default class Register extends Component
{
    state = 
    {
        email: '',
        password: '',
        name: '',
        loading: false
    }

    handleLogin = async () =>
    {
        try
        {
            this.props.navigation.navigate('Main')
        }
        catch(error)
        {
            console.log(error)
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
                    <Input placeholder="Nome" />
                    <Input keyboardType="email-address" autoCapitalize='none' autoCorrect={false}  placeholder="Email" />
                    <Input secureTextEntry autoCapitalize='none' placeholder = "Senha"/>
                    <LoginButton onPress={this.handleLogin}>
                        <TextButton>Registrar</TextButton>
                    </LoginButton>
                </Content>
            </Container>
        )
    }
}