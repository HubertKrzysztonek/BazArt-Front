import "./homePageNewestcomponentStyle.scss";
// import btnLeft from "../../assets/arrow-left-short.svg";
// import btnRight from "../../assets/arrow-right-short.svg";
import btnLeft from "../../assets/chevron-left-solid.svg";
import btnRight from "../../assets/chevron-right-solid.svg";

const HomeNewest = () => {
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const preBtn = [...document.querySelectorAll(".pre-btn")];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  return (
    <section className="product-slider">
      <h1 className="product-category">Najnowsze</h1>
      <button className="pre-btn">
        <img src={btnLeft} />
      </button>
      <button className="nxt-btn">
        <img src={btnRight} />
      </button>
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image">
            <span className="discount-tag">50% off</span>
            <img
              src="http://picsum.photos/300"
              className="product-thumb"
              alt=""
            />
            <button className="card-btn">Add to Fav</button>
          </div>
          <div className="product-info">
            <h2 className="product-brand">Product name</h2>
            <p className="product-short-descryption">
              a short line about the product
            </p>
            <span className="price">300 ZŁ</span>
            <span className="actual-price">600 ZŁ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewest;
