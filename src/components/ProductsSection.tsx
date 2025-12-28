import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const products = [
  {
    id: 1,
    name: "Arctic White Leather",
    price: 289,
    category: "Lifestyle",
    image: product1,
  },
  {
    id: 2,
    name: "Shadow Runner Pro",
    price: 349,
    category: "Performance",
    image: product2,
  },
  {
    id: 3,
    name: "Caramel Suede Classic",
    price: 269,
    category: "Casual",
    image: product3,
  },
  {
    id: 4,
    name: "Storm Grey Elite",
    price: 319,
    category: "Running",
    image: product4,
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="group relative card-gradient rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden p-8 bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full transition-all duration-300 ${
              isLiked ? "bg-primary text-primary-foreground" : "bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <button className="p-3 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-2">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-primary font-bold text-xl">${product.price}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-primary fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Featured Products
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Best <span className="text-gradient">Sellers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved pieces, crafted with premium materials and unparalleled attention to detail.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
