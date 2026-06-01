import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from  "@hookform/resolvers/zod";
import "./Register.css";
import axios from "axios";

const formSchema = z.object({
    first_name: z.string()
        .min(1, "First Name is required")
        .min(2, "First Name must be at least 2 characters")
        .regex(/^[A-Za-z]+$/, "Only Characters are allowed"),
    middle_name: z.string()
        .min(1, "Middle Name is required")
        .min(2, "Middle Name must be at least 2 characters")
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
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter valid email"),
    gender: z.string()
        .min(1, "Gender is required"),
    aadhar: z.string()
        .min(1, "AADHAR Number is required")
        .regex(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/, "Please Enter valid AADHAR Number"),
    pan_number: z.string()
        .min(1, "PAN number is required")
        .regex(/^[A-Z]{3}[PCHFATBLJG][A-Z]\d{4}[A-Z]$/, "Please Enter valid PAN Number"),
    password: z.string()
        .min(1, "Password is required")
})

export default function Register(){

    const {register, formState: {errors}, reset, handleSubmit} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            middle_name: "",
            last_name: "",
            email: "",
            mobile: "",
            gender: "",
            aadhar: "",
            pan_number: "",
            password: ""
        }
    })

    function submit(data){
        console.log(data);
        axios.post("http://localhost:4000/customer/register", data)
            .then(res=>{
                console.log(res);
            })

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

                <label htmlFor="middle_name">Middle Name:</label>
                <input 
                    {...register("middle_name")}
                    id="middle_name" 
                    name="middle_name" 
                    placeholder="Enter First Name" />

                <br />
                <p className="error-phrase">{errors?.middle_name?.message}</p>

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
                    placeholder="Enter Mobile Number" />
                <br/>
                <p className="error-phrase">{errors?.mobile?.message}</p>
                
                <label htmlFor="email">Email:</label>
                <input 
                    {...register("email")}
                    id="email"  
                    placeholder="Enter email" />
                <br/>
                <p className="error-phrase">{errors?.email?.message}</p>
                
                <label>Gender:</label>
                <input id="male" type="radio" value={"Male"} {...register("gender")} /> <label htmlFor="male">Male</label>
                <input id="female" type="radio" value={"Female"} {...register("gender")} /> <label htmlFor="female">Female</label>
                <p className="error-phrase">{errors?.gender?.message}</p>


                <label htmlFor="aadhar">AADHAR Number:</label>
                <input 
                    {...register("aadhar")}
                    id="aadhar"  
                    placeholder="Enter aadhar number" />
                <br/>
                <p className="error-phrase">{errors?.aadhar?.message}</p>


                <label htmlFor="pan">PAN Number:</label>
                <input 
                    {...register("pan_number")}
                    id="pan"  
                    placeholder="Enter PAN Number" />
                <br/>
                <p className="error-phrase">{errors?.pan_number?.message}</p>
                
                <label htmlFor="password">Password:</label>
                <input 
                    {...register("password")}
                    id="password"  
                    type="password"
                    placeholder="Enter Password" />
                <br/>
                <p className="error-phrase">{errors?.password?.message}</p>

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