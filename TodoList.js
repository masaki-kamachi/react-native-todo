import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends Component {

  // 削除ボタンを押されたTodoのフラグを立てます。
  handleDelete(id) {
    let data = this.props.data;
    data.filter((data) => data.id === id).forEach((data) => {
      data.doneFlg = 'Y'
    });
    this.props.onItemDelete(data);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let doneFlg = this.props.index === 0 ? 'N': 'Y';
    if (this.props.data < 1) {
      return null;
    }
    let data = ds.cloneWithRows(this.props.data.filter((data) => data.doneFlg === doneFlg));
    if (data < 1) {
      return null;
    }
    return (
      <View>
        <ListView
          dataSource={data}
          renderRow={(rowData) => <TodoItem data={rowData} onItemDelete={this.handleDelete.bind(this)} />}
        />
      </View>
    );
  }
}
