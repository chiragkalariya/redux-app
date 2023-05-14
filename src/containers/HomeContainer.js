import Shop from "../component/Shop"
import { connect } from "react-redux"
import { addToCart } from "../services/action/action"

const mapDispatchToProps = dispatch => ({
    addToCartHandler:data => dispatch(addToCart(data))
})

const mapStateToProps = state => ({
    // cardData:state.data
})
export default connect(mapStateToProps, mapDispatchToProps)(Shop)