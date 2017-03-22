import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
import Firebase from '../Connector/Firebase';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ListViewBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([{'address': 'aaa', 'age': '', 'batteryOrderDate': '', 'cardAvailability': '',
                'hearingAid': 'Conan', 'mobilePhoneNumber': 'xx', 'name': 'conan', 'note': 'note',
                'phoneNumber': '000-000', 'registrationDate': '1212', 'sex': 'M'}]),
            temp: "hello"
        }
    }

    componentDidMount() {
        Firebase.reference.once("value", snapshot => {
            const store = snapshot.val();
            console.log(this.state.dataSource);
            this.setState({
                dataSource: ds.cloneWithRows(store),
                temp: "wow"
            });
            console.log(this.state.dataSource);
        });
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={({address, age, batteryOrderDate, cardAvailability, hearingAid, mobilePhoneNumber, name, note, phoneNumber, registrationDate, sex}) => <Text>{address}</Text>}
                />
                <Text>{this.state.temp}</Text>
            </View>
        );
    }
}
