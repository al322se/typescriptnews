import { INewsResponse } from '../../interfaces/news';
import { ISourceResponse } from '../../interfaces/source';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:INewsResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:ISourceResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
