import { useEffect, useState } from "react";
import "./BannerSlider.css";

const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600",
    title: "Fresh Groceries",
    subtitle: "Delivered in 10 Minutes ⚡",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600",
    title: "Fresh Fruits",
    subtitle: "Healthy & Organic",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543168256-418811576931?w=1600",
    title: "Daily Essentials",
    subtitle: "Everything You Need",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1600",
    title: "Dairy Products",
    subtitle: "Fresh Every Morning",
  },
];

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img
        src={banners[current].image}
        alt="Banner"
      />

      <div className="banner-overlay">
        <h1>{banners[current].title}</h1>

        <p>{banners[current].subtitle}</p>

        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default BannerSlider;