import './ModalModel.css';
import { Fragment, ReactDOM } from 'react';

const Backdrop = props => {
    return <div className='backdrop'/>
};

const ModalOverlay = (props) => {
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
}
const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalOverlay;