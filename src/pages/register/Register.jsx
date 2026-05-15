import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from  "@hookform/resolvers/zod";
import "./Register.css";

const formSchema = z.object({
    first_name: z.string()
        .min(1, "First Name is required")
        .min(2, "First Name must be at least 2 characters")
        .regex(/^[A-Za-z]+$/, "Only Characters are allowed"),
        last_name: z.string()
        .min(1, "Last Name is required")
        .min(2, "Last Name must be at least 2 characters")
        .regex(/^[A-Za-z]+$/, "Only Characters are allowed"),
    mobile: z.string()
        .min(1, "Mobile number is required")
        .min(10, "Mobile number must ne 10-digit number")
        .max(10, "Mobile number must ne 10-digit number")
        .regex(/^[6789]{1}[0-9]{9}/, "Please enter valid mobile number"),
    email: z.string()
        .min(1, "Email is required")
        .max(40, "Email should be less than 40 characters")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter valid email")
})

export default function Register(){

    const {register, formState: {errors}, reset, handleSubmit} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            mobile: "",
            email: ""
        }
    })

    function submit(data){
        console.log(data);
    }
    return(
        <>
        <div className="m-4">
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="first_name">First Name:</label>
                <input 
                    {...register("first_name")}
                    id="first_name" 
                    name="first_name" 
                    placeholder="Enter First Name" />

                <br />
                <p className="error-phrase">{errors?.first_name?.message}</p>

                <label htmlFor="last_name">Last Name:</label>
                <input 
                    {...register("last_name")}
                    id="last_name" 
                    name="last_name" 
                    placeholder="Enter Last Name" />
                
                <br />
                <p className="error-phrase">{errors?.last_name?.message}</p>

                <label htmlFor="mobile">mobile:</label>
                <input 
                    {...register("mobile")}
                    id="mobile" 
                    name="mobile" 
                    placeholder="Enter Mobile Number" />
                <br/>
                <p className="error-phrase">{errors?.mobile?.message}</p>
                
                <label htmlFor="email">Email:</label>
                <input 
                    {...register("email")}
                    id="email" 
                    name="email" 
                    placeholder="Enter email" />
                <br/>
                <p className="error-phrase">{errors?.email?.message}</p>

                <button type="submit" onClick={submit}>submit</button>
                <button onClick={()=> reset()}>Reset</button>
            </form>

            <hr/>
            <div>
                {/* <p>First Name: {form.first_name}</p>
                <p>Last Name: {form.last_name}</p>
                <p>Mobile: {form.mobile}</p> */}
            </div>
        </div>
        </>
    )
}