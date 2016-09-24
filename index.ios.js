import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // Todoの配列のデータ更新の共通処理になります。
  handleItemSubmit(data) {
    this.setState({ data: data });
  }

  render() {
    const routes = [
      { title: 'TodoApp', index: 0 },
      { title: 'Done', index: 1 },
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={(route, navigator) => {
          return (
            <View style={{
              marginTop: 60
            }}>
              <TodoForm onItemSubmit={this.handleItemSubmit.bind(this)} data={this.state.data} index={route.index}/>
              <TodoList onItemDelete={this.handleItemSubmit.bind(this)} data={this.state.data} index={route.index}/>
            </View>
          );
        }}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>　{
                if (route.index === 1) {
                  return (
                    <TouchableHighlight onPress={() => {
                      navigator.pop();
                    }}>
                      <Text style={{color: 'white'}}>Todo</Text>
                    </TouchableHighlight>
                  );
                }
                return null;
              },
              RightButton: (route, navigator, index, navState) =>　{
                if (route.index === 0) {
                  return (
                    <TouchableHighlight onPress={() => {
                      navigator.push(routes[1]);
                    }}>
                      <Text style={{color: 'white'}}>Done</Text>
                    </TouchableHighlight>
                  );
                }
                return null;
              },
              Title: (route, navigator, index, navState) =>　{
                return (<Text style={{color: 'white', fontSize: 20}}>{route.title}</Text>);
              },
            }}
       style={{backgroundColor: 'steelblue'}}
     />
  }
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
