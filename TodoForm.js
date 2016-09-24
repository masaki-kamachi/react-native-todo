import React, { Component } from 'react';
import { Text, TextInput, View, TouchableHighlight, StyleSheet } from 'react-native';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  // Todoに新規の値を追加します。
  handleSubmit(e) {
    let item = this.state.text;
    if (!item || item == '') {
      return;
    }
    let data = this.props.data;
    data.push({id: data.length + 1, item: item, doneFlg: 'N'});
    this.props.onItemSubmit(data);
    this.setState({ text: ' '});
  }

  render() {
    // Done表示画面のときは入力フォームを表示させない。
    if (this.props.index === 1) {
      return null;
    }
    return (
      <View style={styles.box}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          onPress={this.handleSubmit.bind(this)}
          style={styles.button}>
          <View>
            <Text>投稿</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row'
  },
  textInput: {
    height: 40,
    margin: 10,
    flex: 4,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 40,
    margin: 10,
    padding: 13,
    flex:1,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    alignItems: 'center'
  },
});
