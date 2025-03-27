import { useState } from 'react';
import { RiLoginBoxFill } from 'react-icons/ri';

// Assuming these are your custom components
import Input from './FormFields/InputField';  // Adjust path as needed
import Button from './Button'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Basic validation
        if (password1 !== password2) {
            setError("Passwords don't match");
            setIsLoading(false);
            return;
        }

        const payload = {
            first_name: firstName,
            last_name: lastName,
            mobile: mobile,
            is_receptionist: role === 'receptionist',
            is_doctor: role === 'doctor',
            password1: password1,
            password2: password2
        };

        try {
            // Replace with your actual API endpoint
            // const response = await fetch('/api/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(payload)
            // });
            // const data = await response.json();
            console.log('Signup payload:', payload);
            // Handle successful signup (e.g., redirect to login)
        } catch (err) {
            setError(err.message || 'An error occurred during signup');
        } finally {
            setIsLoading(false);
        }
    };

    function HandleSignin() {
        navigate('/')
    }

    return (
        <section className="bg-background text-text min-h-screen py-5 flex items-center justify-center">
            <div className="flex flex-col lg:w-[95%] max-w-4xl">
                <div className="bg-background rounded-lg shadow dark:border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-xl">
                        <h1 className="text-lg font-bold leading-tight tracking-tight text-text sm:text-xl md:text-2xl ">
                            Create your account
                        </h1>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-text">
                                        First Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full text-sm sm:text-base"
                                        placeholder="John"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-text">
                                        Last Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full text-sm sm:text-base"
                                        placeholder="Doe"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-text">
                                        Mobile Number
                                    </label>
                                    <Input
                                        type="tel"
                                        name="mobile"
                                        id="mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full text-sm sm:text-base bg-white"
                                        placeholder="1234567890"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-text">
                                        Role
                                    </label>
                                    <select
                                        name="role"
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-background border border-gray-300 rounded-lg p-2 text-sm sm:text-base text-text"
                                        required
                                        disabled={isLoading}
                                    >
                                        <option value="">Select a role</option>
                                        <option value="receptionist">Receptionist</option>
                                        <option value="doctor">Doctor</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="password1" className="block mb-2 text-sm font-medium text-text">
                                        Password
                                    </label>
                                    <Input
                                        type="password"
                                        name="password1"
                                        id="password1"
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full text-sm sm:text-base"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-text">
                                        Confirm Password
                                    </label>
                                    <Input
                                        type="password"
                                        name="password2"
                                        id="password2"
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full text-sm sm:text-base"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <Button
                                Przez type="submit"
                                className="lg:w-1/4 md:w-1/3 sm-w-full mx-auto text-sm sm:text-base text-center flex justify-center items-center gap-2"
                                loading={isLoading}
                                loadingText="Creating account..."
                            >
                                <RiLoginBoxFill /> Sign up
                            </Button>
                        </form>
                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2 mt-4">
                            <p className="text-sm sm:text-base">Already have an account?</p>
                            <button
                                className="text-sm sm:text-base text-blue-600 hover:underline disabled:opacity-50"
                                onClick={HandleSignin}
                                disabled={isLoading}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;