import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Infoot from '../components/Main/Infoot';


const mapStateToProps = (state, props) => {
    return {

    }
}

const mapdispatchToProps = (dispatch, props) => {
    return {
        ...bindActionCreators({

        }, dispatch)
    }
}

const containerApp = connect(mapStateToProps, mapdispatchToProps)(Infoot)

export default containerApp