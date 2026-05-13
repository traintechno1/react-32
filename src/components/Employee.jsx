import "../assets/styles/Employee.css"

export default function Employee({employee}){ 
    return(
        <>
            <div className="employee-card">
                <p><span className="fw-bold">Id:</span> {employee.id}</p>
                <p><span className="fw-bold">Name:</span> {employee.name}</p>
                <p><span className="fw-bold">Email:</span> {employee.email}</p>
                <p><span className="fw-bold">DOJ:</span> {employee.doj}</p>
            </div>
        </>
    )
}