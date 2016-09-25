import Realm from 'realm';

class Data extends Realm.Object{

}
Data.schema = {
    name: 'Data',
    primaryKey: 'id',
    properties: {
      id: 'int',
      item: 'string',
      doneFlg: {type: 'string', default: 'N'},
    },
};

export default new Realm({schema: [Data]});
