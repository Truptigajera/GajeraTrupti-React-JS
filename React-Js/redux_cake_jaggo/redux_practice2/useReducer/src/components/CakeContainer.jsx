import { buy_cake } from "../redux/Index";
import { connect } from "react-redux";
import { buy_chocolate } from "../redux/Index";
import React from 'react'

const CakeContainer = (props) => {
  return (
    <div>
      <h2>NUmber of Cakes - {props.numOfCake}</h2>
      <button onClick={props.buy_cake}>BuyCake</button>
      <h2>NUmber of Chocolate - {props.numOfChocolate}</h2>
      <button onClick={props.buy_chocolate}>BuyChocolate</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        numOfCake:state.numOfCake,
        numOfChocolate:state.numOfChocolate

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buy_cake:() => dispatch(buy_cake()),
        buy_chocolate:() => dispatch(buy_chocolate())

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
