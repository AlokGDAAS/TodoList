import React from "react";



export default function Modal() {
	
    
	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your shopping cart?</h4>

				<div className="btn-container">
					<button  type="button"className="btn confirm-btn">confirm</button>
					<button	 type="button" className="btn clear-btn">cancel</button>
				</div>
				
			</div>
		</aside>
	);
}