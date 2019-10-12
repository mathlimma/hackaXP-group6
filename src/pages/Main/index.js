import { FlatList,ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import { Container,FlatListDate,Footer,DateView,DateText,Header,Title,TextHistory} from './styles'

export default class Main extends Component
{
      
    state =
    {
        stress : [],
        days: [],
        exist: false,
        day: '',
        visible: false,
        current: {}
    }

    
    render()
    {
        return (
            <Container>
                <Header>
                    <FlatListDate>
                        <FlatList showsHorizontalScrollIndicator={false} style={{flex:1}} data={this.state.days} renderItem={this.renderItem} keyExtractor={(item) => item} horizontal />
                        
                    </FlatListDate>

                </Header>

                <Footer>
                    {this.state.visible && (this.state.exist? <Update onClose={() => this.setState({visible: false})} data={this.state.current} /> : <Create onClose={() => this.setState({visible: false})} date={this.state.day}/>)}
                    {this.state.loading && <ActivityIndicator size="small" color="#CC0066" />}
                </Footer>
            </Container>
        )
    }
}