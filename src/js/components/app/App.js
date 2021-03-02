/* eslint-disable class-methods-use-this */
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

export default class App {
  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
  }

  run() {
    document.body.append(this.header.render());
    document.body.append(this.main.render());
    document.body.append(this.footer.render());
  }
}
