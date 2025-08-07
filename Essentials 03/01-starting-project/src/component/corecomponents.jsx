import Coreconcept from "./Corecomponent.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function Corecomponents (){
    return (
<section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <Coreconcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* /* <Coreconcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
            <Coreconcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
    );
}