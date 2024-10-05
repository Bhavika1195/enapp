import { useRef, useState } from "react";
import axios from "axios";

function Enquiry() {
	const rName = useRef();
	const rPhone = useRef();
	const rQuery = useRef();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [query, setQuery] = useState("");
	const [msg, setMsg] = useState("");

	const hName = (event) => { setName(event.target.value); }
	const hPhone = (event) => { setPhone(event.target.value); }
	const hQuery = (event) => { setQuery(event.target.value); }

	const se = (event) => {
		event.preventDefault();
		let data = { name, phone, query };
		let url = "https://exp-mail-5oct24.onrender.com/se";
		axios.post(url, data)
			.then(res => {
				setMsg("we will get back to you");
				setName("");
				setPhone("");
				setQuery("");
				rName.current.focus();
			})
			.catch(err => {
				setMsg("issue" + err);
			});
	}
	return (
		<>
			<center>
				<h1>Enquiry Form</h1>
				<form onSubmit={se}>
					<input type="text" placeholder="enter name" ref={rName} onChange={hName} value={name} />
					<br /><br />
					<input type="number" placeholder="enter phone number" ref={rPhone} onChange={hPhone} value={phone} />
					<br /><br />
					<textarea type="text" placeholder="enter ur query" row={3} cols={30} ref={rQuery} onChange={hQuery} value={query} ></textarea>
					<br /><br />
					<input type="submit" />
				</form>
				<h2>{msg}</h2>
			</center>
		</>


	);


}
export default Enquiry;