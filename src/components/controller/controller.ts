import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data:any)=>void) {
        this.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data:any)=>void): void {
        const target = e.target as HTMLElement; 
        const newsContainer = e.currentTarget as HTMLElement; 

        let currentTarget: HTMLElement | null = target;

        while (currentTarget && currentTarget !== newsContainer) {
            if (currentTarget.classList.contains('source__item')) {
                const sourceId = currentTarget.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            currentTarget = currentTarget.parentElement; 
        }
    }
}

export default AppController;
