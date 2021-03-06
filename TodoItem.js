import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  handleDetail(e) {
    this.props.onDetail(this.props.data.id);
  }

  render() {
    return (
      <TouchableHighlight style={styles.box} onPress={this.handleDetail.bind(this)}>
        <Text key={this.props.data.id} style={styles.textInput}>
          {this.props.data.item}
        </Text>
      </TouchableHighlight>
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
