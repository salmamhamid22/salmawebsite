import React from "react";
import ormvaImg from '../assets/images/ORMVA.png';
import loadingImg from '../assets/images/loading.jpg';
import brainImg from '../assets/images/brain.jpg';
import twitterImg from '../assets/images/twitter.jpg';
import panneauxImg from '../assets/images/panneaux.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets </h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><img src={ormvaImg} className="zoom" alt="ORMVA" width="100%"/></a>
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><h2>Projet ORMVA</h2></a>
                <p>Développement d'une application de gestion des ressources humaines pour l'Office Régional de Mise en Valeur Agricole, visant à améliorer le processus de recrutement.</p>
            </div>
         
            <div className="project">
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><img src={brainImg} className="zoom" alt="Brain Tumor Detection" width="100%"/></a>
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><h2>Détection des Tumeurs Cérébrales</h2></a>
                <p>Développement d'une application de détection des tumeurs cérébrales à l'aide de modèles d'apprentissage profond.</p>
            </div>
            <div className="project">
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><img src={twitterImg} className="zoom" alt="Sentiment Analysis Twitter" width="100%"/></a>
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><h2>Analyse de Sentiment sur Twitter</h2></a>
                <p>Création d'un modèle d'analyse des sentiments des tweets en utilisant des techniques de traitement du langage naturel (NLP).</p>
            </div>
            <div className="project">
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><img src={panneauxImg} className="zoom" alt="Panneaux Routiers" width="100%"/></a>
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><h2>Détection des Panneaux Routiers</h2></a>
                <p>Développement d'un modèle de vision par ordinateur pour la détection des panneaux routiers à partir d'images.</p>
            </div>
            <div className="project">
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><img src={loadingImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/salmamhamid22/salmamhamid22.github.io" target="_blank" rel="noreferrer"><h2>Autre Projet (En Attente)</h2></a>
                <p>Description d'un projet en attente de développement ou de lancement.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
