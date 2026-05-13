import Employee from "./Employee";

export default function Employees(){

    let employees = [
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
        {
            id: 1000010,
            name: "Chetan Kharche",
            email: "chetan.kharche@tg.in",
            doj: '20-01-2026'
        },
        {
            id: 1000011,
            name: "Nikhil Karwade",
            email: "nikhil.karwade@tg.in",
            doj: '20-02-2026'
        },
        {
            id: 1000013,
            name: "Saurabh Varpe",
            email: "saurabh.varpe@tg.in",
            doj: '12-09-2024'
        },
    ]
    return(
        <>
            <div className="d-flex gap-3 flex-wrap mt-3">        
                {
                    employees.map(e=><Employee employee={e}></Employee>)
                } 
            </div>
        </>
    )
}