import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const supabase = useSupabaseClient();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello');

    // send email
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000'
    });
    console.log(data);
    console.log(error);

    console.log('1 done');

    /**
     * Step 2: Once the user is redirected back to your application,
     * ask the user to reset their password.
     */
    useEffect(() => {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == 'PASSWORD_RECOVERY') {
          const newPassword = prompt(
            'What would you like your new password to be?'
          );
          if (newPassword) {
            const { data, error } = await supabase.auth.updateUser({
              password: newPassword
            });
          }

          if (data) alert('Password updated successfully!');
          if (error) alert('There was an error updating your password.');
        }
      });
    }, []);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Reset Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="w-full text-white bg-primary hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
