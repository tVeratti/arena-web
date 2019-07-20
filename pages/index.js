// import Blog from '../components/blog';
// import testBlog from '../_posts/blog/2019-05-25-test.md';
import Parallax from '../components/parallax';

import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__background" />
        <div className="home__characters">
          <img src="/static/images/char_1.png" />
          <img src="/static/images/char_2.png" />
        </div>
      </div>

      <div className="home__content">
        <h1>Arena Project Testing</h1>
        <div>Updated: Jul 8, 2019</div>
        <a href="./static/arena.zip">Download .zip</a>
      </div>

      <div className="home__footer">
        <span>tatianaveratti@gmail.com</span>
      </div>
      {/* <h2>Dev Blogs</h2>
      <ul>
        <li>
          <Blog markdown={testBlog} />
        </li>
      </ul> */}
    </div>
  );
}

export default Home;
