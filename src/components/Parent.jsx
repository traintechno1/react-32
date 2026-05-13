import Child from "./Child";

export default function Parent(){

    function getDataFromChild(data){
        console.log(data);
    }
    return(
        <>
            <div>
                <h2>Parent component</h2>
                <Child 
                    firstName="Saurabh" 
                    last_name="Varpe" 
                    age={25} 
                    email="saurabh.varpe@gmail.com"
                    isContractor={true}
                    address={
                        {
                           city: "Pune",
                           country: "India",
                           pinCode: 411041
                        }
                    }
                    mobileNumbers={[9821287391, 7321879384]}
                    getDataFromChild={getDataFromChild}
                />
            </div>
        </>
    )
}