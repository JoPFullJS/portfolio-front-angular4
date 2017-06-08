import { DemocliPage } from './app.po';

describe('democli App', () => {
  let page: DemocliPage;

  beforeEach(() => {
    page = new DemocliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
