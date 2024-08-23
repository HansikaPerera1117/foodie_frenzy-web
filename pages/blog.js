import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
import { useEffect, useState } from "react";
import { getAllCategories } from "../src/service/categoriesService";
const BlogStandard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = "Blogs | Foodie Frenzy Restaurant";
    loadAllCatagories();
  }, []);

  const loadAllCatagories = () => {
    let temp = [];
    setCategories([]);
    // popUploader(dispatch, true);
    getAllCategories()
      .then(async (resp) => {
        resp?.data?.records.map((category, index) => {
          if (category?.status === 1) {
            temp.push({
              id: category?.id,
              // image:
              //   category?.file && category.file.length > 0
              //     ? category.file.map((img) => {
              //         img?.originalPath;
              //       })
              //     : defaultCategoryImg,
              image:
                category?.file && category.file.length > 0
                  ? category.file[0]?.originalPath // Ensure you're accessing the correct property
                  : null,
              name: category?.name,
              description:
                category?.description != null ? category?.description : "",
              categories_status: category?.status,
            });
          }
        });
        await setCategories(temp);
        console.log(temp);

        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };

  return (
    <Layout>
      <PageBanner
        pageName={"Blogs"}
        title="Blog"
        subTitle={
          "Delve into our culinary adventures, recipes, and behind-the-scenes stories"
        }
      />
      <section className="blog-standard-section pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 order-lg-1 order-2">
              <div className="blog-standard-wrapper mb-30">
                <div className="blog-item-two mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-4.jpg" alt="Post Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Sep</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
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
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Use Google CrUX To Analyze And Compare Frameworks Game
                          Changer Browser Back/Forward Cache
                        </a>
                      </Link>
                    </h3>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms pleasure moment
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">read more</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-quote-item mb-50 wow fadeInUp">
                  <div className="entry-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Resilience, Flexibility And Immediacy Working With
                          Headless SystemsUse Google Analyze And Compare Game
                          Changer Browser Back/Forward Cache
                        </a>
                      </Link>
                    </h3>
                    <h5>Martin M. Nordquist</h5>
                  </div>
                </div>
                <div className="blog-item-two mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-5.jpg" alt="Post Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Sep</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
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
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Partytown Eliminates Website Bloat From Third-Party
                          Scripts Changer Browser Back/Forward Cache
                        </a>
                      </Link>
                    </h3>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms pleasure moment
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">read more</a>
                    </Link>
                  </div>
                </div>
                <div className="blog-quote-item mb-50 wow fadeInUp">
                  <div className="entry-content">
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Windows High Contrast Mode Forced Colors Mode And CSS
                          Custom Properties
                        </a>
                      </Link>
                    </h3>
                    <h5>James B. Lindsey</h5>
                  </div>
                </div>
                <div className="blog-item-two mb-50 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-6.jpg" alt="Post Image" />
                    <span className="post-date">
                      <a href="#">
                        25<span>Sep</span>
                      </a>
                    </span>
                  </div>
                  <div className="entry-content">
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
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Guide To Audio Visualization With JavaScript And GSAP
                          Information Architecture That Is Easy To Use
                        </a>
                      </Link>
                    </h3>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms pleasure moment
                    </p>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">read more</a>
                    </Link>
                  </div>
                </div>
                <div className="qichen-pagination wow fadeInUp">
                  <ul>
                    <li>
                      <a href="#" className="prev">
                        <i className="fas fa-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#" className="next">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 order-lg-2 order-1">
              <div className="sidebar-widget-area">
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    {categories.map((cat) => {
                      return (
                        <li>
                          <a>{cat?.name}</a>
                        </li>
                      );
                    })}
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
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>
                              Smashin Podcast Episode Vitaly Friedman Elliot
                            </a>
                          </Link>
                        </h5>
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
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>Rethinking Server-Timing Critical Monitoring</a>
                          </Link>
                        </h5>
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
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>Use Google Compare to Performance Frame</a>
                          </Link>
                        </h5>
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
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            <a>Even Small UX Changes Increase Conversion</a>
                          </Link>
                        </h5>
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
                    <a href="#" className="main-btn btn-white">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default BlogStandard;
