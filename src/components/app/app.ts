import { INewsResponse } from '../../interfaces/news';
import { ISourceResponse } from '../../interfaces/source';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e:Event) => this.controller.getNews(e, (data) => this.view.drawNews(data as INewsResponse)));
        this.controller.getSources((data) => this.view.drawSources(data as ISourceResponse));
    }
}

export default App;
