import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import z from "zod";

const formSchema = z.object({
    email: z.string()
        .min(1, "Email is required")
        .max(40, "Email should be less than 40 characters")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter valid email"),
    password: z.string()
        .min(1, "Password is required")
})

export default function Login(){

    const {register, formState: {errors}, reset, handleSubmit} = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    function submit(data){
        console.log(data);

        axios.post("http://localhost:4000/customer/login", data)
        .then(res=>{
            console.log(res);
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                reset();
        }).catch(e=>{
            toast.error("Unauthorised", {
                position: "top-right",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                reset();
        })
    }

    return(
        <>
            <h2>Login Page</h2>
            <div className="m-4">
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="email">Email:</label>
                <input 
                    {...register("email")}
                    id="email"  
                    placeholder="Enter email" />
                <br/>
                <p className="error-phrase">{errors?.email?.message}</p>
                

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
                <ToastContainer
                    position="top-right"
                    autoClose={6000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                    />

            <hr/>
        </div>
        </>
    )
}