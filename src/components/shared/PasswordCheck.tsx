import { type FormEvent, useEffect, useState } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('');
  const [okay, setOkay] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('okay')) setOkay(true);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password == 'beefchicken') {
      setOkay(true);
      localStorage.setItem('okay', 'true');
    } else alert('incorrect password');
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return null;
  return (
    <div
      className={`${
        okay && 'hidden'
      } z-10 w-screen h-screen absolute bg-white flex flex-col justify-center items-center`}
    >
      <form
        className="rounded-lg p-8 h-48 w-72 flex space-y-4 flex-col"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password (hint: something about chicken and beef, but it is not
          chickenbeef)
        </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          value={password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default PasswordCheck;
