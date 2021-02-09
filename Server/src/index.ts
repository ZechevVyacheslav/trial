import App from './app/App';

const app_port = 3000;

App.getApp().listen(app_port, () => {
    console.log(`Server started at localhost:${app_port}`);
});
