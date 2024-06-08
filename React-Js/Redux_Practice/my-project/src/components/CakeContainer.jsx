import {buy_cake} from '../redux/Index'
import { connect } from "react-redux";

const Cakecontainer = (props) => {
    return ( 
        <div>
            <h2>number of cakes -{props.numOfCake}</h2>
            <button onClick={props.buy_cake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buy_cake: () => dispatch(buy_cake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
    (Cakecontainer)