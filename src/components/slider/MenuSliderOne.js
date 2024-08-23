import Link from "next/link";
import Slider from "react-slick";
import { menuSliderOne } from "../../sliderProps";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../service/productService";
const MenuSliderOne = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setProductList([]);
    // popUploader(dispatch, true);

    let temp = [];
    getAllProducts()
      .then((res) => {
        res.data?.records.map((product, index) => {
          if (product?.status === 1) {
            temp.push({
              id: product?.id,
              name: product?.name,
              status: product?.status,
              price: product?.fromPrice,
              files: product?.productFile,
              description: product?.description,
              category: product?.category,
            });
          }
        });
        setProductList(temp);
        // setCurrentPage(res?.data?.currentPage);
        // setTotalRecodes(res?.data?.totalCount);
        // popUploader(dispatch, false);
      })
      .catch((c) => {
        // popUploader(dispatch, false);
        handleError(c);
      });
  };

  return (
    <Slider {...menuSliderOne} className="menu-slider-one wow fadeInUp">
      {productList.map((menu) => {
        return (
          <div className="menu-grid-item-one text-center mb-60">
            <div className="thumb">
              {menu?.files && menu.files.length > 0 ? (
                menu.files.map((img, index) => {
                  if (img?.isDeafult) {
                    return (
                      <img
                        src={img?.originalPath}
                        alt={menu.name}
                        className="rounded"
                        onError={(e) =>
                          (e.target.src =
                            "https://i.ibb.co/qpB9ZCZ/placeholder.png")
                        }
                      />
                    );
                  }
                })
              ) : (
                <img
                  src="https://i.ibb.co/qpB9ZCZ/placeholder.png"
                  className="rounded"
                  alt="placeholder"
                />
              )}
            </div>
            <div className="text">
              <h3 className="title">
                <Link legacyBehavior href="/product-details">
                  {menu?.name}
                </Link>
              </h3>
              <p>{menu?.description}</p>
              <span className="price">
                <span className="currency">LKR</span>
                {menu?.price}
              </span>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default MenuSliderOne;
