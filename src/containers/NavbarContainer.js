import Navbar from "../component/Navbar"
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = state => ({
    data: state.cardItems
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)