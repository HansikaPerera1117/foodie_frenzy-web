import { Fragment, useEffect, useRef, useState } from "react";
import { getAllGalleryImages } from "../service/galleryService";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const GalleryIsotope = () => {
  const [galleryList, setGalleryList] = useState([]);

  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState([]);
  //-------------------------- pagination --------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecodes, setTotalRecodes] = useState(0);

  // let dispatch = useDispatch();

  useEffect(() => {
    loadAllGallery(currentPage);
  }, []);

  const loadAllGallery = (currentPage) => {
    let temp = [];
    setGalleryList([]);
    // popUploader(dispatch, true);
    getAllGalleryImages(currentPage)
      .then((resp) => {
        resp?.data.map((gallery, index) => {
          temp.push({
            id: gallery?.id,
            src: gallery?.file?.originalPath,
          });
        });
        console.log(temp);

        setGalleryList(temp);
        // setCurrentPage(resp?.data?.currentPage);
        // setTotalRecodes(resp?.data?.totalCount);
        // popUploader(dispatch, false);
      })
      .catch((err) => {
        // popUploader(dispatch, false);
        handleError(err);
      });
  };

  return (
    <Fragment>
      <div className="row gallery-row">
        {galleryList.map((image) => {
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-column cat-1">
              <div className="gallery-item-two mb-35 wow fadeInUp">
                <div className="gallery-img">
                  <img src={image?.src} alt="Gallery Image" />
                  <div className="hover-overlay">
                    <a
                      className="icon-btn"
                      onClick={(e) => {
                        setImg(true);
                        setImgValue([
                          { src: image?.src, alt: "gallery image" },
                        ]);
                      }}
                    >
                      <i class="far fa-image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Lightbox
          open={img}
          close={() => setImg(false)}
          slides={imgValue}
          styles={{
            container: { backgroundColor: "rgba(38, 31, 65, .85)" },
          }}
          render={{
            buttonPrev: imgValue.length <= 1 ? () => null : undefined,
            buttonNext: imgValue.length <= 1 ? () => null : undefined,
          }}
        />
      </div>
    </Fragment>
  );
};
export default GalleryIsotope;
