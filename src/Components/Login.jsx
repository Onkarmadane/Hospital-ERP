import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Adjust path as needed
import Swal from 'sweetalert2';
import Button from './Button';
import { RiLoginBoxFill } from "react-icons/ri";
import Input from './FormFields/InputField';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const mockLogin = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'ayurvedic@example.com' && password === 'password123') {
                    resolve({
                        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        doctorType: 'Ayurvedic'
                    });
                } else if (email === 'allopathic@example.com' && password === 'password123') {
                    resolve({
                        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        doctorType: 'Allopathic'
                    });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const data = await mockLogin();
            const { access, doctorType } = data;

            localStorage.setItem('accessToken', access);
            localStorage.setItem('doctorType', doctorType);
            login();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login successful!',
                timer: 1500,
            }).then(() => navigate('/doctor/Dashboard'));
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid email or password',
            });
            setError('Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };
    function HandleSignup(){
        navigate('/signup')
    }

    return (
        <section className="bg-background text-text min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-background rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-text">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
                            Login to your account
                        </h1>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                                    Your email
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full"
                                    placeholder="name@company.com"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-text">
                                    Password
                                </label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full "
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mx-auto w-full text-center flex justify-center"
                                loading={isLoading}
                                loadingText="Signing in..." // Custom loading text
                            >
                                <RiLoginBoxFill /> Log in
                            </Button>
                        </form>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2 mt-4">
                        <p className='text-center'>Don't Have an Accout? </p>
                        <button
                              className="text-sm sm:text-base text-blue-600 hover:underline disabled:opacity-50"
                              onClick={HandleSignup}
                              disabled={isLoading}
                            >
                                 Sign up
                            </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useAuth } from '../Context/AuthContext';
// import { queryFunctions } from '../ApiService'; // Adjust path
// import Swal from 'sweetalert2';
// import Button from './Button';
// import { RiLoginBoxFill } from "react-icons/ri";
// import Input from './FormFields/InputField';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const queryClient = useQueryClient();

//   // Replace mockLogin with useMutation
//   const loginMutation = useMutation({
//     mutationFn: queryFunctions.performLogin,
//     onSuccess: (data) => {
//       const { access, doctorType } = data;
//       localStorage.setItem('accessToken', access);
//       localStorage.setItem('doctorType', doctorType);
//       login();
//       Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: 'Login successful!',
//         timer: 1500,
//       }).then(() => navigate('/doctor/Dashboard'));
//     },
//     onError: (err) => {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Invalid email or password',
//       });
//       setError('Invalid email or password');
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     loginMutation.mutate({ email, password });
//   };

//   return (
//     <section className="bg-background text-text">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-background rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-text">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
//               Sign in to your account
//             </h1>
//             {error && <p className="text-red-500 text-sm">{error}</p>}
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
//                   Your email
//                 </label>
//                 <Input
//                   type="text"
//                   name="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full"
//                   placeholder="name@company.com"
//                   required
//                   disabled={loginMutation.isLoading}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-text">
//                   Password
//                 </label>
//                 <Input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="w-full"
//                   required
//                   disabled={loginMutation.isLoading}
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="mx-auto w-full text-center flex justify-center"
//                 loading={loginMutation.isLoading}
//                 loadingText="Signing in..."
//               >
//                 <RiLoginBoxFill /> Sign in
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;