import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"Blog"}
        title="Blog"
        subTitle={
          "Delve into our culinary adventures, recipes, and behind-the-scenes stories"
        }
      />
      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-wrapper">
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/single-blog-1.jpg"
                      alt="Blog Image"
                    />
                    <span className="post-date">
                      <a href="#">
                        25<span>Sep</span>
                      </a>
                    </span>
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span className="cat-btn">
                          <a href="#">Fastfood</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user" />
                          <a href="#">Kevin D. Stanford</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comment-dots" />
                          <a href="#">Comments (05)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="main-post">
                    <div className="entry-content">
                      <h3 className="title">
                        Use Google CrUX To Analyze And Compare Frameworks Game
                        Changer Browser Back/Forward Cache
                      </h3>
                      <p>
                        Sit amet consectetur adipiscing elit. Et id purus sem
                        morbi. Integer a sollicitudin ac eget sed consectetur et
                        nam. Elementum eu egestas faucibus bibendum aliquetesy
                        ullamcorper quis aliquet lorem. Mor phasellus dictum
                        tellus, massa congue sapien mollis suspendisse pretium.
                        Malesuada id enim vitae dignissim. Sed sit mattis some
                        adipiscing lectus consectetur. Sagittis, praesent
                        ullamcorper cras ac at iaculis luxury elementum in.
                        Faucibus massa libero sit laoreet. Scelerisque egestas
                        molestie velit ultrices sed senectus rhoncus.
                      </p>
                      <p>
                        Nemo enim ipsam voluptatem quia volupt pernatur aut odit
                        aut fugit sed quia consequuntur magni dolores eos qui
                        ratione volumessequ nesciunt. Neque porro quisquam est
                        qui dolorem ipsum quia dolor sit amet coctetur adipisci
                        velit sed
                      </p>
                      <div className="quote-admin">
                        <div className="quote-inner-content">
                          <div className="quote-admin-content">
                            <h3>
                              Create An Information Architecture That’s Easy To
                              Use Way Precise Usability Considerations For
                              Partially
                            </h3>
                            <h5>Ronald M. Spino</h5>
                          </div>
                        </div>
                      </div>
                      <p>
                        Mor phasellus dictum tellus, massa congue sapien mollis
                        suspendisse pretium. Malesuada id enim vitae dignissim.
                        Sed sit mattis some adipiscing lectus consectetur.
                        Sagittis, praesent ullamcorper cras ac at iaculis luxury
                        elementum.
                      </p>
                    </div>
                  </div>
                  <div className="entry-footer">
                    <div className="tag-links">
                      <h4>Popular Tags :</h4>
                      <a href="#">Restaurant,</a>
                      <a href="#">Food,</a>
                      <a href="#">Stalls</a>
                    </div>
                    <div className="social-share">
                      <h4>Share News :</h4>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*===  Post Author Box  ===*/}
                <div className="post-author-box d-flex mb-60 wow fadeInUp">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/author-1.jpg"
                      alt="post author"
                    />
                  </div>
                  <div className="author-content">
                    <h4>Thomas B. Gibson</h4>
                    <span className="position">Author</span>
                    <p>
                      Dictum tellus massa congue sapien mollis suspende preti
                      Malesuada id enim vitae dignissim. Seds mattis adipiscineg
                      lectusey consectetur. Sagittis, praesent ullamcorpere
                    </p>
                  </div>
                </div>
                {/*===  Post Navigation  ===*/}
                <div className="post-navigation-item mb-30 wow fadeInUp">
                  <div className="prev-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img src="assets/images/blog/prev.jpg" alt="Post Thumb" />
                      <div className="overlay">
                        <i className="far fa-angle-left" />
                      </div>
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          Sep 25, 2022
                        </a>
                      </span>
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          <a>Fluid Sizing Instead Of Media Queries</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="next-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img src="assets/images/blog/next.jpg" alt="Post Thumb" />
                      <div className="overlay">
                        <i className="far fa-angle-right" />
                      </div>
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          Sep 25, 2022
                        </a>
                      </span>
                      <h6>
                        <Link legacyBehavior href="/blog-details">
                          <a>Fluid Sizing Instead Of Media Queries</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                {/*===  Comments Area  ===*/}
                <div className="comments-area mb-50 wow fadeInUp">
                  <h4 className="comments-title mb-40">Popular Comments</h4>
                  <ul className="comments-list">
                    <li className="comment mb-30">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-1.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            James J. Brown
                            <span className="date">
                              <i className="far fa-clock" />5 Minute Ago
                            </span>
                          </span>
                          <p>
                            Dictum tellus massa congue sapien mollis suspen
                            Malesuada too idenim vitae dignissim sed sit mattis
                            adipiscineg
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-30">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-2.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Richie D. Johnson
                            <span className="date">
                              <i className="far fa-clock" />5 Minute Ago
                            </span>
                          </span>
                          <p>
                            Dictum tellus massa congue sapien mollis suspen
                            Malesuada idenim vitae dignissim sed sit mattis
                            adipiscineg
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="comment mb-30">
                      <div className="comment-avatar">
                        <img
                          src="assets/images/blog/comment-3.jpg"
                          alt="comment author"
                        />
                      </div>
                      <div className="comment-wrap">
                        <div className="comment-author-content">
                          <span className="author-name">
                            Clifford D. Blake
                            <span className="date">
                              <i className="far fa-clock" />5 Minute Ago
                            </span>
                          </span>
                          <p>
                            Dictum tellus massa congue sapien mollis suspen
                            Malesuada too idenim vitae dignissim sed sit mattis
                            adipiscineg
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*===  Comments Form  ===*/}
                <div
                  className="comments-respond mb-35 wow fadeInUp"
                  id="comment-respond"
                >
                  <h4 className="comments-heading mb-40">Leave a Reply</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="comment-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name *"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email *"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="url"
                            className="form_control"
                            placeholder="Website *"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn btn-red">
                            send reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget search-widget mb-30 wow fadeInUp">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search"
                        name="search"
                        required=""
                      />
                    </div>
                  </form>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Hamburger<span className="number">(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Italian Pizza<span className="number">(07)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Vegetable Soup<span className="number">(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Seafoods<span className="number">(04)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sandwich<span className="number">(09)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Smashin Podcast Episode Vitaly Friedman Elliot
                            </a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">Sep 18, 20222</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Rethinking Server-Timing Critical Monitoring</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">Sep 18, 2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Use Google Compare to Performance Frame</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">Sep 18, 2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-4.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            <a>Even Small UX Changes Increase Conversion</a>
                          </Link>
                        </h6>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">Sep 18, 2022</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Contact Info Widget ===*/}
                <div
                  className="sidebar-widget contact-info-widget mb-40 border-0 p-0 bg_cover wow fadeInUp"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/contact-info-bg.jpg)",
                  }}
                >
                  <div className="contact-info-content">
                    <h3 className="title">Need Quality and fresh Foods</h3>
                    <p>
                      Sit amet consectetur adipiscing elit proin pretium cursus
                      lectus
                    </p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn btn-white">Contact us</a>
                    </Link>
                  </div>
                </div>
                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget tag-cloud-widget mb-40 border-0 wow fadeInUp">
                  <h4 className="widget-title">Products Tags</h4>
                  <a href="#">Restaurant</a>
                  <a href="#">Seafoods</a>
                  <a href="#">Burger</a>
                  <a href="#">Pizza</a>
                  <a href="#">Soup</a>
                  <a href="#">Crap</a>
                  <a href="#">Juice</a>
                  <a href="#">Bread</a>
                  <a href="#">Drink &amp; Fruits</a>
                  <a href="#">Ice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </Layout>
  );
};
export default BlogDetails;
