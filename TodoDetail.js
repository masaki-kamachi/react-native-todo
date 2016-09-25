import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class TodoItem extends Component {

  // 削除ボタンを押下された時の処理の入り口になります。
  handleDelete(e) {
    this.props.onDelete(this.props.todo.id);
  }

  render() {
    let doneText = this.props.todo.doneFlg === 'N' ? '完了' : '完了済み';
    return (
      <View style={styles.box}>
        <Text>
          {this.props.todo.item}
        </Text>
        <TouchableHighlight
          onPress={this.handleDelete.bind(this)}
          style={styles.button}>
          <View>
            <Text>{doneText}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 10
  },
  textInput: {
    height: 20,
    margin: 10,
    flex: 4
  },
  button: {
    height: 30,
    margin: 10,
    padding: 8,
    flex:1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center'
  },
});
