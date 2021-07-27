import React, {Component} from 'react';

class Footer extends Component {
  render() {
      return (
          <footer className="App-footer">
            <p><i class="fa fa-envelope"></i> zacktcheng@gmail.com</p>
            <a href="https://github.com/zacktcheng" target="_blank" rel="#"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/zack-cheng-3684506b" target="_blank" rel="#"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.facebook.com" target="_blank" rel="#"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="#"><i class="fa fa-instagram"></i></a>
          </footer>
      );
  }
}

export default Footer;