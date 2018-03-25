import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/AuxComponent';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }


        componentWillMount() {

           this.reqInterseter =  axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            })

           this.resInterseter = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
                return error;
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterseter)
            axios.interceptors.response.eject(this.resInterseter)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }


        render() {

            return (
                <Aux>
                    <Modal
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )

        }
    }
}

export default withErrorHandler