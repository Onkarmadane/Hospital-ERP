const Input = ({ type = 'text', placeholder, value, onChange, error = false, ...props }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
        {...props}
      />
    );
  };
  // Usage: <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />