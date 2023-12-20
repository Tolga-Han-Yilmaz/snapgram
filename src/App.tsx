import { Routes, Route } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/Signinform';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_auth/forms/RootLayout';
import Home from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout/>}>
              <Route path="/sign-in" element={< SigninForm />} />
              <Route path="/sign-up" element={< SignupForm />} />
            </Route>

            {/* privat routes */}
            <Route element={<RootLayout/>}>

            <Route index element={<Home />} />
            </Route>
        </Routes>

    </main>
  )
}

export default App
