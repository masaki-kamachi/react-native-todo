import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class TodoItem extends Component {

  // 削除ボタンを押下された時の処理の入り口になります。
  handleDelete(e) {
    this.props.onItemDelete(this.props.data.id);
  }

  render() {
    return (
      <View style={styles.box}>
        <Text key={this.props.data.id} style={styles.textInput}>
          {this.props.data.item}
        </Text>
        <TouchableHighlight
          onPress={this.handleDelete.bind(this)}
          style={styles.button}>
          <View>
            <Text>完了</Text>
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
