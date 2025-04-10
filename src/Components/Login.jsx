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
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();
//     const queryClient = useQueryClient();

//     const loginMutation = useMutation({
//         mutationFn: queryFunctions.performLogin,
//         onSuccess: async (data) => {
//             console.log('Login Success Data:', data);
//             if (!data.access_token || !data.refresh_token) {
//                 throw new Error('Invalid response format: missing tokens');
//             }
//             const { access_token, refresh_token } = data;
//             localStorage.setItem('accessToken', access_token);
//             localStorage.setItem('refreshToken', refresh_token);
//             console.log('Tokens stored:', { accessToken: access_token, refreshToken: refresh_token });

//             // Fetch user details after login
//             try {
//                 const userDetails = await queryFunctions.fetchUserDetails(access_token);
//                 console.log('User Details:', userDetails);

//                 // Determine user type
//                 const userData = userDetails.data;
//                 let redirectPath = '/doctor/Dashboard'; // Default to doctor

//                 // Check email suffix
//                 if (userData.email.endsWith('@receptionist.com')) {
//                     redirectPath = '/doctor/Dashboard';
//                 }
//                 // Alternatively, use flags if email suffix isn't reliable
//                 else if (userData.is_receptionist) {
//                     redirectPath = '/receptionist/Dashboard';
//                 } else if (userData.is_doctor) {
//                     redirectPath = '/doctor/Dashboard';
//                 }

//                 // Construct welcome message with username
//                 const username = `${userData.first_name} ${userData.last_name}`;
//                 console.log('Login completed, redirecting to:', redirectPath);

//                 Swal.fire({
//                     icon: 'success',
//                     title: `Welcome, ${username}!`,
//                     text: 'You have successfully logged in.',
//                     timer: 1500,
//                     confirmButtonColor: '#77db8f'
//                 }).then(() => navigate(redirectPath));
//             } catch (userError) {
//                 console.error('User Details Fetch Error:', userError);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: 'Failed to fetch user details. Redirecting to default dashboard.',
//                     confirmButtonColor: '#77db8f'
//                 }).then(() => navigate('/doctor/Dashboard')); // Fallback
//             }
//         },
//         onError: (err) => {
//             console.error('Login Error:', {
//                 message: err.message,
//                 status: err.response?.status,
//                 data: err.response?.data,
//             });
//             const errorMessage = err.response?.status === 500
//                 ? 'Server error. Please try again later.'
//                 : err.message || 'Invalid email or password';
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: errorMessage,
//                 confirmButtonColor: '#77db8f'
//             });
//             setError(errorMessage);
//         },
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');
//         loginMutation.mutate({ email, password });
//     };

//     return (
//         <section className="bg-background text-text min-h-screen">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <div className="w-full bg-background rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-text">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
//                             Sign in to your account
//                         </h1>
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
//                                     Your email
//                                 </label>
//                                 <Input
//                                     type="text"
//                                     name="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full"
//                                     placeholder="name@company.com"
//                                     required
//                                     disabled={loginMutation.isLoading}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-text">
//                                     Password
//                                 </label>
//                                 <Input
//                                     type="password"
//                                     name="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     placeholder="••••••••"
//                                     className="w-full"
//                                     required
//                                     disabled={loginMutation.isLoading}
//                                 />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 className="mx-auto w-full text-center flex justify-center"
//                                 loading={loginMutation.isLoading}
//                                 loadingText="Signing in..."
//                             >
//                                 <RiLoginBoxFill /> Sign in
//                             </Button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../Context/AuthContext';
import { queryFunctions } from '../ApiService'; // Adjust path
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
    const queryClient = useQueryClient();

    const loginMutation = useMutation({
        mutationFn: queryFunctions.performLogin,
        onSuccess: async (data) => {
            console.log('Login Success Data:', data);
            if (!data.access_token || !data.refresh_token) {
                throw new Error('Invalid response format: missing tokens');
            }
            const { access_token, refresh_token } = data;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            console.log('Tokens stored:', { accessToken: access_token, refreshToken: refresh_token });

            // Fetch user details after login
            try {
                const userDetails = await queryFunctions.fetchUserDetails(access_token);
                console.log('User Details:', userDetails);

                // Determine user type
                const userData = userDetails.data;
                let userType = 'doctor'; // Default to doctor

                // Check email suffix or flags
                if (userData.email.endsWith('@receptionist.com') || userData.is_receptionist) {
                    userType = 'receptionist';
                } else if (userData.is_doctor) {
                    userType = 'doctor';
                }

                // Store user type in localStorage
                localStorage.setItem('userType', userType);
                console.log('User type stored:', userType);

                // Construct welcome message with username
                const username = `${userData.first_name} ${userData.last_name}`;
                console.log('Login completed, redirecting to:', '/doctor/Dashboard');

                Swal.fire({
                    icon: 'success',
                    title: `Welcome, ${username}!`,
                    text: 'You have successfully logged in.',
                    timer: 1500,
                    confirmButtonColor: '#77db8f'
                }).then(() => navigate('/doctor/Dashboard')); // Always redirect to /doctor/Dashboard
            } catch (userError) {
                console.error('User Details Fetch Error:', userError);
                // Fallback: assume doctor if user details fail
                localStorage.setItem('userType', 'doctor');
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch user details. Redirecting to default dashboard.',
                    confirmButtonColor: '#77db8f'
                }).then(() => navigate('/doctor/Dashboard'));
            }
        },
        onError: (err) => {
            console.error('Login Error:', {
                message: err.message,
                status: err.response?.status,
                data: err.response?.data,
            });
            const errorMessage = err.response?.status === 500
                ? 'Server error. Please try again later.'
                : err.message || 'Invalid email or password';
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
                confirmButtonColor: '#77db8f'
            });
            setError(errorMessage);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        loginMutation.mutate({ email, password });
    };

    return (
        <section className="bg-background text-text min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-background rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-text">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
                            Sign in to your account
                        </h1>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                                    Your email
                                </label>
                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full"
                                    placeholder="name@company.com"
                                    required
                                    disabled={loginMutation.isLoading}
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
                                    className="w-full"
                                    required
                                    disabled={loginMutation.isLoading}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mx-auto w-full text-center flex justify-center"
                                loading={loginMutation.isLoading}
                                loadingText="Signing in..."
                            >
                                <RiLoginBoxFill /> Sign in
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;