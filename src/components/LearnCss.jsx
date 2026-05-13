
import "../assets/styles/LearnCss.css";
import styles from "../assets/styles/style.module.css";


export default function LearnCSS(){
    return(
        <>

            {/* inline css */}
            <h2 style={{
                color: 'red',
                fontSize: '28px'
                }}>Learning Using CSS in React Component</h2>

            <div className="box">
                <p className={styles.content}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste maiores cupiditate voluptate minima debitis animi, error tenetur, reiciendis consectetur nihil commodi harum tempora dolores reprehenderit dignissimos atque iusto eveniet. Voluptas illo, eos expedita eius unde esse explicabo dolore quae eum tempora rerum iure accusantium saepe, vel modi aut fugit sit facere officiis facilis! Recusandae eligendi exercitationem, ipsum facilis consequuntur quibusdam praesentium, eos cumque consequatur sunt aliquid a assumenda necessitatibus molestiae iste vitae unde. Illo, autem reprehenderit dolorem dolor nulla, odit quia ipsum natus porro ducimus odio vero eius voluptatum velit tenetur tempora! Doloribus labore et facere ipsa illo corrupti est.</p>
            </div>
        </>
    )
}