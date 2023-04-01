import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  firstName: string;
  lastName: string;
/*   email: string;
  age: number; */
  password: string;
  confirmPassword: string;
}

const Signin = () => {
 const schema: ZodType<FormData> = z.object({
  firstName: z.string({required_error: "First name is required"}).nonempty().min(2,'Password too short - should be 2 chars minimum').max(30),
  lastName: z.string().nonempty().min(2).max(30),
/*   email: z.string({
    required_error: 'Email is required',
  }).email({ message: "Invalid email address" }).nonempty(),
  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  }).int().positive().max(120), */
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .nonempty()
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character")
  .regex(new RegExp(".*\\d.*"), "One number")
  .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),"One special character")
  .min(8, "Must be at least 8 characters in length"),
  confirmPassword: z.string({ required_error: 'Password is required'}).nonempty().max(30),
 })
 .refine((data) => data.password === data.confirmPassword, {
  message: "password don't match",
  path: ["confirmPassword"]
 })


  const { register, handleSubmit, formState:{errors, isSubmitting} } = useForm<FormData>({resolver: zodResolver(schema)})

  const submitData = (data: FormData) =>{
      console.log("it worked", data)
  }

  return (
    <div>
    <form onSubmit={handleSubmit(submitData)}>
      <div>
        <label htmlFor="userName">Name</label>
        <input type="text" {...register("firstName")}/>
        {<span>{errors.firstName?.message}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input type="text" {...register("lastName")}/>
        {<div>{errors.lastName?.message}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")}/>
        {<div>{errors.password?.message}</div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {<div>{errors.confirmPassword?.message}</div>}
      </div>
      <button type="submit" disabled={!isSubmitting}>Sign in</button>
    </form>
  </div>
  )
}

export default Signin