
class WorkspacePage {
    constructor(page) {
        this.page = page;
        //Top Bar 
        this.globalSearch = page.getByRole('textbox', { name: 'Search partners, agreements,' });
        this.buttonEssentials = page.getByRole('button', { name: 'Essentials' });
        this.buttonFull = page.getByRole('button', { name: 'Full', exact: true });
        this.currencySelector = page.getByRole('button', { name: 'SDR ▾' });
        this.demoSelector = page.getByRole('button', { name: 'Demo' });
        this.notificationsButton = page.locator('button[data-act="goalerts"]');


        //Login user profile buttons
        this.bobProfile = page.getByRole('button', { name: 'BF' });
        this.charlesProfile = page.getByRole('button', { name: 'CA', exact: true });
        this.danaProfile = page.getByRole('button', { name: 'DO' });
        this.elenaProfile = page.getByRole('button', { name: 'EV', exact: true });
        this.aliciaProfile = page.getByRole('button', { name: 'AM' });


    }
}

