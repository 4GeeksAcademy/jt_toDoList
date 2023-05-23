import React, {useState, useEffect} from "react";

const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [ tarea, setTarea] = useState([])
	const [ placeholder, setPlaceholder] = useState ("")

	const handleClick = (index) => {
		setTarea(tarea.filter((t, currentIndex) => currentIndex !== index));
	};

	useEffect(() => {
		if (tarea.length === 0) {
		  setPlaceholder("There are no to dos, please enter a new one!");
		} else {
			setPlaceholder("Write your new task!");
		}
	  }, [tarea]);

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
								placeholder={placeholder}></input>
							<span class="badge bg-success">Press Intro</span>
						</li>
						{tarea.map((toDo, index) => (
						<li className="list-group-item d-flex justify-content-between align-items-center shadow-lg  mx-4">
    						{toDo}
							<button className="btn btn-outline-danger btn-sm" type="button" onClick={() => handleClick(index)}><i className="fas fa-trash"></i></button> 
						</li>
						))}
					</ul>
					<h1 className="fs-6 m-4 fw-light">Tareas pendientes: {tarea.length} </h1>
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
