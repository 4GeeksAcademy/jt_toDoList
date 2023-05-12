import React, {useState} from "react";

const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [ tarea, setTarea] = useState([])

	return (
		<>	
			<div className="row justify-content-center">
				<div className="col-12">
					<h1>Lista de tareas</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between align-items-center">
							<input
								type="text"
								onChange={(e) => setInputValue(e.target.value)}
								value={inputValue}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
									  setTarea([inputValue].concat(tarea));
									  setInputValue('');
									}
								  }}
								placeholder="Write your new task!"></input>
							<span class="badge bg-success">Press Intro</span>
						</li>
						{tarea.map((toDo, index) => (
						<li className="list-group-item d-flex justify-content-between align-items-center">
    						{toDo}
							<button class="btn btn-outline-danger btn-sm" type="button" id="button-addon2" onClick={()=> setTarea(tarea.filter((t, currentIndex) => index != currentIndex ))}><i class="fas fa-trash"></i></button> 
						</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Home;
