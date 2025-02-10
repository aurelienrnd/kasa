import Kasa_logo_white from '../../assets/logo/logo-kasa-white.png';

function Footer() {
  return (
    <footer>
      <div>
        <img src={Kasa_logo_white} alt="Logo kasa" className="logo-footer" />
        <p className="copywriter">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
