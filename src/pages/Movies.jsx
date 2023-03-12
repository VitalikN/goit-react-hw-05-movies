import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <section>
      <h2>Our mission</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, nesciunt
        veniam. Excepturi itaque, voluptates fugiat perspiciatis quo saepe! Iste
        eaque porro eveniet error dicta, modi ipsum hic quis minima inventore.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat
        illum excepturi odit doloremque, vitae quasi corporis commodi nisi quae
        perspiciatis amet consectetur reprehenderit inventore laborum facilis
        quia mollitia exercitationem eaque rerum dignissimos maiores, quos iure
        blanditiis. Dolorem, nam? Aliquid sequi molestias vel, tenetur maxime
        pariatur? Molestiae libero cum quidem.
      </p>
      <ul>
        <li>
          <Link to="Cast">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
