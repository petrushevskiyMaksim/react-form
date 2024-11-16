import React from 'react';
import CloseOutline from '../CloseOutline/CloseOutline';
import './SimpleModal.css';

export default function SimpleModal({ onClose, children, ref, state }) {
	return (
		<div ref={ref} className={`modal modal--${state}`}>
			<div className='modal-wrapper'>
				<div className='modal-content'>
					<button className='modal-button-close' onClick={() => onClose()}>
						<CloseOutline />
					</button>
					{children}
				</div>
			</div>
		</div>
	);
}
