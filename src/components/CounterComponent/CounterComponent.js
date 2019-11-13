import React from 'react'
import {Button} from "../common/Button";
import styles from "./CounterComponent.module.css"

export class CounterComponent extends React.Component{
    state = {count: 0};

    handleIncrease = () =>{
        this.setState((prevState)=>({count: prevState.count+1}));
    };
    handleDecrease =() =>{
        this.setState((prevState) =>({count:prevState.count-1}))
    };


    render(){
        return(
            <div>
                 <Button name={'increase'} onClick={this.handleIncrease}/>
                <Button name={'decrease'} onClick={this.handleDecrease}/>
                <div className={styles.countWrapper}>
                    {this.state.count}
                </div>
            </div>
        )
    }

}