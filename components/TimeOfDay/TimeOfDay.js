import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TimeOfDay extends Component{
    constructor(props) {
        super(props);
        this.state = {
        timeOfDay : this.getTimeOfDay()
        };
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({timeOfDay:this.getTimeOfDay()});
        },1000);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    };

    getTimeOfDay() {
        const hours = new Date().getHours();
        if (hours < 12) {
            return 'morning';
        } else if (hours < 14) {
            return 'afternoon';
        } else if (hours < 18) {
            return 'evening';
        } else {
            return 'night';
        };
    };

    render() {
    const {name} = this.props;
    const {timeOfDay} = this.state;

    if (!name) return null;

    let message = '';
    switch(timeOfDay) {
    case 'morning' : message = `Good Morning, ${name}!`;
    break;

    case 'afternoon' : message = `Good Afternoon, ${name}!`;
    break;

    case 'evening' : message = `Good Evening, ${name}!`;
    break;

    case 'night' : message = `Good Night, ${name}!`;
    break;
    };

    return(
        <View>
        <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'red'}}>{message}</Text>
        </View>
    );
}};

export default TimeOfDay;