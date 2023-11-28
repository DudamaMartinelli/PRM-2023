import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { TopicContextProveider } from './contexts/TopicContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <TopicContextProveider>
        <App />
      </TopicContextProveider>
    </AuthContextProvider>
  </BrowserRouter>,
)
