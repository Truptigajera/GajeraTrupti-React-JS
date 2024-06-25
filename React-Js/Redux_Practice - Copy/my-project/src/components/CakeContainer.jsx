import {buy_cake} from '../redux/Index'
import { connect } from "react-redux";
import { buy_chocolate } from '../redux/cake/CakeAction';

const CakeContainer = (props) => {
    return ( 
          <>
        <div>
            <h2>number of cakes -{props.numOfCake}</h2>
            <button onClick={props.buy_cake}>Buy cake</button>
        </div>
        <div>
            <h2>number of chocolate -{props.numOfChocolate}</h2>
            <button onClick={props.buy_chocolate}>Buy chocolate</button>
        </div>
          </>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake,
        numOfChocolate: state.numOfChocolate
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buy_cake: () => dispatch(buy_cake()),
        buy_chocolate: () => dispatch(buy_chocolate())
    }
     
}



 
 
export default connect(mapStateToProps, mapDispatchToProps)
    (CakeContainer) 