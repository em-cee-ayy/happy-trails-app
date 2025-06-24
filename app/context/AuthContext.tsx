import { auth } from "@/lib/firebase"; // Using alias for cleaner import
import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

// Define the shape of the context data
type AuthContextType = {
  user: User | null; // The Firebase user object
  isLoading: boolean;
};

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

// Create a provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user to null if logged out, or user object if logged in
      setIsLoading(false); // Loading is finished once we have a user or know there isn't one
    });

    // Unsubscribe to the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook for easy access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};
