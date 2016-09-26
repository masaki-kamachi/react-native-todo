import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';

import realm from './realm';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  // セルをクリックされた際に詳細ページに遷移します。
  handleDetail(id) {
    this.props.onForward(id);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let doneFlg = this.props.index === 0 ? "N" : "Y";
    let data = ds.cloneWithRows(realm.objects('Data').filtered('doneFlg =="' + doneFlg + '"'));
    return (
      <View>
        <ListView
          dataSource={data}
          renderRow={(rowData) => <TodoItem data={rowData} onDetail={this.handleDetail.bind(this)}/>}
        />
      </View>
    );
  }
}
