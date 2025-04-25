import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "@/context/auth-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/assets/logo.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { handleForgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const success = await handleForgotPassword(email);
    if (success) {
      navigate(`/auth/verify-otp?type=forgot-password&email=${email}`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight text-center">
            Forgot Password
          </CardTitle>
        </CardHeader>
        <Link
                  to="/"
                  className="flex items-center group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <div className="lg bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-indigo-800 flex items-center justify-center p-8">
                              <img
                                src={Logo}
                                alt="e-Renaissance logo"
                                className="w-3/4 max-w-md h-auto transform hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                </Link>
        <CardContent className="p-0 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-semibold text-gray-900 dark:text-white mb-2 mt-2"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-gray-300 dark:border-gray-600 rounded-lg"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
            >
              Send OTP
            </Button>
          </form>
        </CardContent>
        <div className="flex justify-between mt-4">
          <Link
            to="/auth/verify-otp"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-semibold tracking-wide transition-colors duration-200"
          >
            Verify OTP?
          </Link>
          <Link
            to="/auth"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-semibold tracking-wide transition-colors duration-200"
          >
            Sign In?
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ForgotPassword;
