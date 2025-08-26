import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // 전역 CSS 임포트
import { Provider } from 'react-redux';
import store from './redux/redux.js'; // 생성한 Redux 스토어 임포트

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider로 앱을 감싸 스토어 제공 */}
      <App />
    </Provider>
  </React.StrictMode>,
);
