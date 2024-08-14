import './style.css'

fetch("http://localhost:4000/tasks")
.then(e => e.json())
.then(data => console.log(data))