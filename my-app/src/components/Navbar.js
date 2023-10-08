import { BsCart4 } from "react-icons/bs";
import { useGlobalContext } from "./Context";


const Navbar = () => {
	const {cartItems} = useGlobalContext();

	const inCart= ()=>{

		let totalInCart = 0;

		for(let i = 0; i< cartItems.length; i++){
			totalInCart += cartItems[i].amount
		}

		return (totalInCart)

	}

	return (
		<nav>
			<div className="nav-center">
				<h3>React Website using hooks</h3>
				<div className="nav-container"><BsCart4 /><div className="amount-container"><p className="total-amount">{inCart()}</p></div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
