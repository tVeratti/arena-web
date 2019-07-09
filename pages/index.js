// import Blog from '../components/blog';
// import testBlog from '../_posts/blog/2019-05-25-test.md';

import './index.scss';

function Home() {
  return (
    <div className="home">
      <h1>Arena Project Testing</h1>
      <div>Updated: Jul 8, 2019</div>
      <a href="./static/arena.zip">Download .zip</a>

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
