// import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { sendPictureService } from "./lib/sendPictureService";
import { deletePictureService } from "./lib/deletePictureService";
import Header from "./Header";
import Picture from "./Picture";
import Footer from "./Footer";
import Uploads from "./Uploads";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }


  getAllPhotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ photos: data });
      });
  };

  componentDidMount = () => {
    this.getAllPhotos();
  };

  render() {
    return (
      <Router>
        <Header />
        <h1>Vos plus belles réalisations</h1>
        <main>
        <nav>
          <ul><p>Catégories</p>
            <li><a href="">Clés en main</a></li>
            <li><a href="">Hors d'eau hors d'air</a></li>
            <li><a href="">Auto-construite</a></li>
            {/* <li><Link to="/about">About</Link></li> */}
          </ul>
        </nav>
        <section class="section">
          <Route path="/" exact>
            <Home photos={this.state.photos} />
          </Route>
          <Route path="/:id" component={Picture} />
          <Route path="/uploads" component={Uploads} />
        </section>
        </main>

      <Footer />
      </Router>
    
    );
  }
}

// Composant (fonctionel) HOME
const Home = (props) => {
  const monImage = JSON.stringify({
    albumId: 2,
    title: "blablaballa",
    url: "https://via.placeholder.com/300",
    thumbnailUrl: "https://via.placeholder.com/150",
  });

  return (
    <>

      <div>
      {/* <button onClick={() => sendPictureService(monImage)}>Send data</button>
      <button onClick={() => deletePictureService(3)}>Delete data</button> */}
      </div>

      {props.photos.slice(0, 18).map((item) => {
        return (
          <Link to={`/${item.id}`} key={item.id}>
            <img src={item.thumbnailUrl} alt="images-exemples" />
          </Link>
          
          
        );
      })}
    </>
  );
};

// // Composant Picture : qui va afficher une seule image (cliquée)
// class Picture extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { picture: [] };
//   }

//   getPicture = () => {
//     fetch(
//       "https://jsonplaceholder.typicode.com/photos/" +
//         this.props.match.params.id
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         console.log(this.props.match);
//         this.setState({ picture: data });
//       })
//       .catch((error) => console.log(error.message));
//   };

//   componentDidMount = () => {
//     this.getPicture();
//   };

//   render() {
//     return (
//       <>
//         <div>Picture n°{this.props.match.params.id}</div>
//         <img src={this.state.picture.url} alt="" />
//       </>
//     );
//   }
// }

// Composant Uploads
// const Uploads = () => {
//   return <h2>le Uploads</h2>;
// };
// APP DE BASE


    // <div className="App">
    //   <div class="top-header hidden-xs" id="top">
    //     <ul class="menu">
    //       <a id="menu-item-header" class="decoration"
    //       href="http://www.tinyhouse-baluchon.fr/presse/">Presse</a>
    //       <a id="menu-item-header" class="decoration"
    //       href= "http://www.tinyhouse-baluchon.fr/partenaires/">Partenaires</a>
    //       <a id="menu-item-header" class="decoration"
    //       href="http://www.tinyhouse-baluchon.fr/faq/">Questions fréquentes</a>
    //       <a id="menu-item-header" class="decoration"
    //       href="http://www.tinyhouse-baluchon.fr/tarifs/">Tarifs</a>
    //       <a id="menu-item-header" class="decoration"
    //       href="http://www.tinyhouse-baluchon.fr/contact/">Contact</a>
    //       <li><SocialFollow /></li>
    //       </ul>
    //   </div>
      

    //   <header class="header">
    //     <div class="container">
    //     <ul class="menu2">
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/actualites/">Actualités</a>
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/nos-tiny-houses/">Nos réalisations</a>
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/l-auto-construction/">Auto-constructions</a>
    //       <a id="menu2-item" href=""><img src={logo} alt="" /></a>
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/evenements/">Évènements</a>
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/les-remorques/">Remorques</a>
    //       <a id="menu2-item" class="deco-menu2"
    //       href="http://www.tinyhouse-baluchon.fr/qui-sommes-nous/">Qui sommes nous</a>
    //       </ul>
    //     </div>
    //   </header>

      // {/* <section class="section">
      // <div>BLABLA TEST</div>
      // </section> */}

  

      // <footer>
      //     <div class="div-footer-left">
      //       <img src={image_footer} alt="" />
      //       <p class="phrase-footer">
      //         La perfection est atteinte, non pas lorsqu'il n'y a plus rien à
      //         ajouter, mais lorsqu'il n'y a plus rien à retirer.
      //       </p>
      //       <p class="auteur">ANTOINE DE SAINT-EXUPÉRY</p>
      //     </div>
      //     <div class="div-footer-right">
      //       <img class="logo_footer" src={logo_footer} alt="" />
      //       <SocialFollow />
      //       <ul class="menu-footer">
      //         <li class="menu_item_footer">
      //           <a href="https://www.facebook.com/Tiny-house-Baluchon-705501889540422/"">Accueil</a>
      //         </li>
      //         <li class="menu_item_footer">
      //           <a href="http://www.tinyhouse-baluchon.fr/contact/">Contact</a>
      //         </li>
      //         <li class="menu_item_footer">
      //           <a href="http://www.tinyhouse-baluchon.fr/mentions-legales/">
      //             Mentions légales
      //           </a>
      //         </li>
      //         <li class="menu_item_footer">
      //           <a href="http://www.tinyhouse-baluchon.fr/credits/">Crédits</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </footer>