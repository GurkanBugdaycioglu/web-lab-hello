// src/component/Button.jsx
export default function Button({ 
    children, 
    variant = "primary", 
    size = "md", 
    ...props 
}) {
    const variants = {
        primary: "bg-blue-800 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    };

    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${props.className || ""}`}
            {...props}
        >
            {children}
        </button>
    );
}