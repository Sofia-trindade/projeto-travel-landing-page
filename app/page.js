
import styles from './page.module.css'

function Titulo({x, y}){
  return(
    <h2 style={{left:x, top:y}}className={styles.titulo}>
      Your perfect <br/>
      honeymoon
    </h2>
  )
  };

  function SubTitulo({x, y}){
    return(
      <p style={{left:x, top:y}}className={styles.subTitulo}>
      Mayami is more than a honeymoon destination – <br/>
      it’s a perfect romantic spot for couples who like <br/> 
      spending time in beach. </p>
    )
  };
  

export default function Home() {
  return (
    <main>
      <Titulo x={135} y={238}/>
      <SubTitulo x={136} y={465.04}/>
      
    </main>
    
   

    
  )
};
