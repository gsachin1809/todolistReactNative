/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet } from 'react-native';
import { Container, Header,
          Title, Content,
          Footer, FooterTab,
          Button, Left,
          Right, Body,
          Icon, Text ,
          Form, Item,
          Input, Label ,
          List ,ListItem,
          Alert} from 'native-base';

type Props = {};
export class Home extends Component<Props> {
  // var props = Props;
  constructor(props){
    super(props);
    this.state = {
      listItem : [],
      newItem : ''
    }
    this.addItem = this.addItem.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
  }

  addItem = () => {
    var listItem = this.state.listItem;
    if(this.state.newItem != ''){
      var taskItem = {
        task : this.state.newItem,
        isCompleted : 0
      }
      listItem.push(taskItem);
      this.setState({listItem : listItem , newItem : ''});
    }

  }

  markAsDone = (index) =>{
    // alert("Are you sure you  are done..?");
    var oldList = this.state.listItem;
    if(oldList[index].isCompleted == 1){
      oldList[index].isCompleted = 0;
    }else{
      oldList[index].isCompleted = 1;
    }
    this.setState({
      listItem : oldList
    })
    // Alert.alert("I am clicked");

  }

  render() {
    const displayListItem = this.state.listItem.map((item , index) =>
        <ListItem button={true} onPress={() => this.markAsDone(index)} key={index}>
          {(item.isCompleted == 1)?(
            <Text style={{ textDecorationLine : 'line-through' }}>{index + 1}. {item.task }  </Text>
          ):(
            <Text>{index + 1}. {item.task }  </Text>
          )}
        </ListItem>
    );
    return (
      <Container>
        <Header>
         <Body>
           <Title>ToDo App</Title>
         </Body>

       </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Item to add</Label>
              <Input
                    onChangeText={(text) => {this.setState({newItem : text}); }}
                    value={this.state.newItem}/>
            </Item>
          </Form>
          <Button block onPress={() => { this.addItem() }}>
            <Text>Add </Text>
          </Button>
          <List>
            {displayListItem}
          </List>
        </Content>
      </Container>
    );
  }
}
