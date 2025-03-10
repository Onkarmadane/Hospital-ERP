// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext'; // Adjust path as needed
// import Swal from 'sweetalert2';
// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     // Mock API response
//     const mockLogin = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => { // Simulate network delay
//                 if (email === 'test@example.com' && password === 'password123') {
//                     resolve({
//                         refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0MTA2OTkzNywiaWF0IjoxNzQwNDY1MTM3LCJqdGkiOiJkMDVjYmE4MTJjOWU0N2YxODgxMTUxZmYyY2Y5ODFhNiIsInVzZXJfaWQiOjF9.Q66To5SVsfRp2PziZs5thI8sLwfCeHRgsJv_cihwr2w",
//                         access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQwNTUxNTM3LCJpYXQiOjE3NDA0NjUxMzcsImp0aSI6ImFmNGFlZGI1YzI3NDQ0MjFiZDY3ZjRiZmY3ZWM2YmFhIiwidXNlcl9pZCI6MX0.r_7zinz2ydkuGIUyfhMJFkY35K_PZ_IHtvF2LI62sdQ",
//                         linked_hotel: [1]
//                     });
//                 } else {
//                     reject(new Error('Invalid credentials'));
//                 }
//             }, 1000); // 1-second delay
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const data = await mockLogin(); // Use mock API instead of fetch
//             const { access } = data;

//             localStorage.setItem('accessToken', access);
//             login();
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success',
//                 text: 'Login successful!',
//                 timer: 1500,
//             }).then(() => navigate('/doctor/Dashboard'));
//         } catch (err) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Invalid email or password',
//             })
//             setError('Invalid email or password');
//         }
//     };

//     return (
//         <section className="bg-white text-black">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
//                     <img
//                         className="w-8 h-8 mr-2"
//                         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//                         alt="logo"
//                     />
//                     Flowbite
//                 </a>
//                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
//                             Sign in to your account
//                         </h1>
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                             <div>
//                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
//                                     Your email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="name@company.com"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     id="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     placeholder="••••••••"
//                                     className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-start">
//                                     <div className="flex items-center h-5">
//                                         <input
//                                             id="remember"
//                                             aria-describedby="remember"
//                                             type="checkbox"
//                                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                                         />
//                                     </div>
//                                     <div className="ml-3 text-sm">
//                                         <label htmlFor="remember" className="text-black">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                 </div>
//                                 <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
//                                     Forgot password?
//                                 </a>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                             >
//                                 Sign in
//                             </button>
//                             <p className="text-sm font-light text-black dark:text-black">
//                                 Don’t have an account yet?{' '}
//                                 <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
//                                     Sign up
//                                 </a>
//                             </p>
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
import { useAuth } from '../Context/AuthContext'; // Adjust path as needed
import Swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    // Mock API response with doctorType
    const mockLogin = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => { // Simulate network delay
                if (email === 'ayurvedic@example.com' && password === 'password123') {
                    resolve({
                        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        // linked_hotel: [1],
                        doctorType: 'Ayurvedic'
                    });
                } else if (email === 'allopathic@example.com' && password === 'password123') {
                    resolve({
                        refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                        // linked_hotel: [1],
                        doctorType: 'Allopathic'
                    });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000); // 1-second delay
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

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
        }
    };

    return (
        <section className="bg-white text-black">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a> */}
                
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                            Sign in to your account
                        </h1>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full p-3 border border-primary rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;