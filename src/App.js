import { Toaster } from 'react-hot-toast';
import Home from './components/Homes/Home';

function App() {
  return (
    <div>
      <Home/>
      <Toaster
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },
    
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
      />
    </div>
  );
}

export default App;
