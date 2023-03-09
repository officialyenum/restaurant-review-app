import React from "react";
import classes from "./welcome.module.css";
import WelcomeImage from "../../assets/welcome.webp";

export const Welcome = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <img src={WelcomeImage} alt="Welcome" />
        </div>
        <div className={classes.rightContainer}>
          <h1>
            <span>Welcome</span>
            <br /> to Restaurant Hygiene Review in Bristol
          </h1>
          <p>
            Lorem ipsum dolor sit amet. In quia laudantium eos unde ipsum et
            ullam iste aut obcaecati modi et optio ipsam. Qui voluptas iure non
            beatae impedit rem reiciendis obcaecati. Aut dignissimos labore in
            mollitia accusantium et architecto quas. Aut consectetur officia et
            cupiditate voluptas vel cupiditate commodi eos nemo facere est Quis
            nesciunt. A eius laudantium ea aperiam Quis cum suscipit ducimus vel
            molestiae omnis eum sapiente perspiciatis et mollitia optio et
            debitis pariatur. Ut sequi minus quo similique unde ut iusto sunt ea
            temporibus error et aperiam cumque. Et doloremque iusto ea dolores
            voluptatem ea repudiandae voluptas nam magni voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};
