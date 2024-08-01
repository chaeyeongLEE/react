import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data.js';
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

// function CoreConcept(props) {
//     return (
//         <li>
//             <img src={props.image} alt={props.title} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//     )
// }

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} description={CORE_CONCEPTS[0].description} />
                        <CoreConcept title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} description={CORE_CONCEPTS[1].description} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
