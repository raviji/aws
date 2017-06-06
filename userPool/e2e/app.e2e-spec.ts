import { UserPoolPage } from './app.po';

describe('user-pool App', () => {
  let page: UserPoolPage;

  beforeEach(() => {
    page = new UserPoolPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
