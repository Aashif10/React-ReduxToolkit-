import Home from "../Components/Home"
import { connect } from "react-redux"

import {addToCart} from "../Services/Action/Action"

const mapStateToProbs = state => ({
    
})

const mapDispatchToProbs =dispatch=> ({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProbs,mapDispatchToProbs)(Home)




// export default Home;