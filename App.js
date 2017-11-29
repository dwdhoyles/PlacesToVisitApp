//import stuff
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

//create stuff
class App extends React.Component {
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >
            {t}
          </Text>
        </TouchableOpacity>
      )
    })
  }
  render() {
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Odyssey</Text>
          <Text style={styles.todo}>Hello World!</Text>
          <Text style={styles.todo}>These are the places I would like to visit:</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            vale={this.state.text}
          />
          <Button
            title="Add your Odyssey"
            color="white"
            onPress={this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

//export stuff
export default App;

const styles = {
  wholeStyle: {
    backgroundColor: '#F44336',
    flex: 1,
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 20,
  },
  header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    margin: 10,
  },
  todo: {
    fontSize: 18,
    color: 'white'
  }
}
