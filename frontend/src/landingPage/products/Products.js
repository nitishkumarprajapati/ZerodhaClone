import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero"

function Products() {
    const products = [
      {
        title: "Kite",
        imgLink: "media/assets/products-kite.png",
        content:
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        links: ["Try demo", "Learn more"],
        storeLinks: [
          "media/assets/google-play-badge-light.svg",
          "media/assets/appstore-badge-light.svg",
        ],
        layout: "left",
      },
      {
        title: "Console",
        imgLink: "media/assets/products-console.png",
        content:
          "The central dashboard for your Zerodha account. Track trades and investments, manage tax reports, analyse portfolio performance, and monitor every activity in one place.",
        links: ["Learn more"],
        storeLinks: [],
        layout: "right",
      },
      {
        title: "Coin",
        imgLink: "media/assets/products-coin.png",
        content:
          "Buy direct mutual funds online, commission-free, delivered straight to your demat account. A simple way to build long-term wealth without extra layers of cost.",
        links: ["Coin"],
        storeLinks: [
          "media/assets/google-play-badge-light.svg",
          "media/assets/appstore-badge-light.svg",
        ],
        layout: "left",
      },
      {
        title: "Kite Connect API",
        imgLink: "media/assets/landing.svg",
        content:
          "Build powerful trading platforms and investment products with Zerodha's simple HTTP/JSON APIs. Connect market data, orders, and portfolio actions into your own workflows.",
        links: ["Kite Connect"],
        storeLinks: [],
        layout: "right",
      },
      {
        title: "Varsity mobile",
        imgLink: "media/assets/varsity-products.svg",
        content:
          "An easy-to-follow learning platform for stock market education, from basics to advanced concepts. Learn investing and trading with beautifully structured lessons.",
        links: ["Varsity"],
        storeLinks: [
          "media/assets/google-play-badge-light.svg",
          "media/assets/appstore-badge-light.svg",
        ],
        layout: "left",
      },
    ];

    return (    
        <>
       <Hero/>
       {products.map((product, index) =>
        product.layout === "left" ? (
          <LeftSection key={index} {...product} />
        ) : (
          <RightSection key={index} {...product} />
        )
       )}
       <Universe/>
        </>
      );
}

export default Products;
