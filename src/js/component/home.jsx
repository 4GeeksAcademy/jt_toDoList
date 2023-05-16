import React, {useState} from "react";
import Button from "./button";

const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [ tarea, setTarea] = useState([])

	return (
		<>	
			<div className="row justify-content-center">
				<div className="col-6 mt-5 text-center display-4 text-success">
					<h1>To do List</h1>
				</div>

				<figure className="text-center mb-5">
					<blockquote className="blockquote">
						<p>“If it weren’t for the last minute, nothing would get done”</p>
					</blockquote>
					<figcaption className="blockquote-footer">
						<cite title="Source Title">Rita Mae Brown</cite>
					</figcaption>
					</figure>

			</div>
			<div className="row justify-content-center">
				<div className="col-sm-10 col-md-8 col-lg-5">
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-center shadow-lg mx-4">
							<input
								type="text"
								onChange={(e) => setInputValue(e.target.value)}
								value={inputValue}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										if (inputValue.trim() !== "")
										setTarea([inputValue].concat(tarea));
									  setInputValue('');
									}
								  }}
								placeholder="Write your new task!"></input>
							<span class="badge bg-success">Press Intro</span>
						</li>
						{tarea.map((toDo, index) => (
						<li className="list-group-item d-flex justify-content-between align-items-center shadow-lg  mx-4">
    						{toDo}
							<button className="btn btn-outline-danger btn-sm" type="button" onClick={()=> setTarea(tarea.filter((t, currentIndex) => index != currentIndex ))}><i className="fas fa-trash"></i></button> 
						</li>
						))}
					</ul>
				</div>
			</div>

			<div className="row my-5">
				<div className="fixed-bottom p-4 text-danger text-center">
        			Made with ❤️ by <b>Julia</b>
      			</div>
			</div>
		</>
	);
};

export default Home;
