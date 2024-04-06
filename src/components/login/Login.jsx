import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit =(data)=>console.log(data);
  return (
    <>
      <section id="login-section" style={{backgroundImage:`url(${'../image/login2.jpg'})`}}>
        <div className="container">
          <div className="row">
            <div className="contact-us">
              <div className="form-conatiner">
                <div className="form-image">
                  <img src='../image/login1.jpg' alt="" />
                </div>
                <form action="" /* onSubmit={handleSubmit(onSubmit)} */>
                  <h1 id="from-heading" className="text-black">Get in Touch</h1>
                  <div className="contact-form"  id="Name">
                    <i class="fa-solid fa-user  fa-sm"></i>
                    <input 
                    //  {...register("Name",{ required: true, minLength: {value:3 ,message:"value is too short"} ,maxLength:8 })}
                     type="text" 
                     placeholder="Name" 
                     required />
                     {/* {errors.Name && <div className="text-red-800">{errors.message}</div>} */}
                  </div>
                  <div className="contact-form" id="Email">
                    <i class="fa-solid fa-envelope fa-sm"></i>
                    <input 
                    //  {...register("email")}
                     type="text" 
                     placeholder="Email" 
                     />
                  </div>
                  {/* <div className="contact-form" id="select">
                    <select name="select" id="">
                      <option value="" selected disabled>Please select your query</option>
                      <option value="1">Membership</option>
                      <option value="2">Personal Training</option>
                      <option value="3">Services</option>
                      <option value="3">Products</option>
                      <option value="3">Others..</option>
                    </select>
                  </div> */}
                  <div className="contact-form" id="Message">
                    {/* <input type="text" placeholder="Message" /> */}
                    <i class="fa-solid fa-message fa-sm"></i>
                    <textarea 
                    // {...register("message",{ required: true, minLength: 10 })}
                     name="message" 
                     cols="30" rows="6"  
                     placeholder="Message.." 
                    >
                     </textarea>
                  </div>
                  <input type="submit" className="contact-btn" value='send message'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

{
  /* <i class="fa-solid fa-user"></i> */
}
{
  /* <i class="fa-solid fa-envelope"></i> */
}
{
  /* <i class="fa-solid fa-message"></i> */
}
