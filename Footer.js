import React from "react";
import logo_footer from "./logo-baluchon-footer.png"; 
import footer_fond from "./image-footer-fond.jpg";
import footer_devant from "./footer-devant.png";
import "./Footer.css";
import SocialFollow from "./SocialFollow";
import image_footer from "./image_footer.png";
import Reco from "./reco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook_Icon from "./Facebook_Icon";

// <!-- FOOTER -->

class Footer extends React.Component {
  render() {
    return (
      <>
<div className="footer-border"></div>
  <footer>
    <div className="div-footer-left">
      <div className="p-footer-left">
        <img id="img_1" src={footer_fond} alt=""></img>
          <div className="frame">
            <a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/">
              <img id="img_2" src={footer_devant} alt=""></img></a>
              <aside><a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/"
              target="_blank" rel="noopener noreferrer"></a>
              <a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/"
              target="_blank" rel="noopener noreferrer" p className="text">Tiny house Baluchon</a>
              <p className="text2">92 698 mentions J'aime</p></aside>
          </div>
            <div className="boutons">
              <a href="https://www.facebook.com/v2.11/plugins/error/confirm/page?iframe_referer=http%3A%2F%2Fwww.tinyhouse-baluchon.fr%2F&kid_directed_site=false&secure=true&plugin=page&return_params=%7B%22adapt_container_width%22%3A%22true%22%2C%22app_id%22%3A%221221591291190830%22%2C%22channel%22%3A%22https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1a9eb39317bc78%26domain%3Dwww.tinyhouse-baluchon.fr%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fwww.tinyhouse-baluchon.fr%252Ff2c5ba3cb19103c%26relation%3Dparent.parent%22%2C%22container_width%22%3A%22340%22%2C%22hide_cover%22%3A%22false%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FTiny-house-Baluchon-705501889540422%2F%22%2C%22locale%22%3A%22fr_FR%22%2C%22sdk%22%3A%22joey%22%2C%22show_facepile%22%3A%22false%22%2C%22small_header%22%3A%22false%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3Anull%7D"
              target="_blank"><button className="fb-like"><Facebook_Icon />
              J'aime cette Page</button></a>
              <a href='http://www.tinyhouse-baluchon.fr/'target="_blank">
              <button className="info">ⓘ En savoir plus</button></a>
              </div>
              </div>
            <p className="phrase-footer">
              La perfection est atteinte, non pas lorsqu'il n'y a plus rien à
              ajouter, mais lorsqu'il n'y a plus rien à retirer.
            </p>
            <p className="auteur">ANTOINE DE SAINT-EXUPÉRY</p>
          </div>
          
          <div className="div-footer-right">
            <img className="logo_footer" src={logo_footer} alt="" />
            <SocialFollow />
            <ul className="menu-footer">
              <li className="menu_item_footer">
              <a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/"
              target="_blank" rel="noopener noreferrer">Accueil</a>
              </li>
              <li className="menu_item_footer">
                <a href="http://www.tinyhouse-baluchon.fr/contact/"
                target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
              <li className="menu_item_footer">
                <a href="http://www.tinyhouse-baluchon.fr/mentions-legales/"
                target="_blank" rel="noopener noreferrer">Mentions légales</a>
              </li>
              <li className="menu_item_footer">
                <a href="http://www.tinyhouse-baluchon.fr/credits/"
                target="_blank" rel="noopener noreferrer">Crédits</a>
              </li>
            </ul>
          </div>
        </footer>
        </>
    );
  }
}

export default Footer;

{/* <div class="footer-border"></div>
<footer>
  <div class="div-footer-left">
    <p class="phrase-footer">
      La perfection est atteinte, non pas lorsqu'il n'y a plus rien à
      ajouter, mais lorsqu'il n'y a plus rien à retirer.
    </p>
    <p class="auteur">ANTOINE DE SAINT-EXUPÉRY</p>
  </div>
  <div class="div-footer-right">
    <img class="logo_footer" src={logo_footer} alt="" />
    <SocialFollow />
    <ul class="menu-footer">
      <li class="menu_item_footer">
        <a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/">Accueil</a>
      </li>
      <li class="menu_item_footer">
        <a href="http://www.tinyhouse-baluchon.fr/contact/">Contact</a>
      </li>
      <li class="menu_item_footer">
        <a href="http://www.tinyhouse-baluchon.fr/mentions-legales/">
          Mentions légales
        </a>
      </li>
      <li class="menu_item_footer">
        <a href="http://www.tinyhouse-baluchon.fr/credits/">Crédits</a>
      </li>
    </ul>
  </div>
</footer> */}