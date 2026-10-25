import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  FileText,
  LayoutTemplate,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  X,
} from "lucide-react";
import "./Store.css";

const products = [
  {
    id: "react-business-kit",
    title: "React Business Website Kit",
    category: "React & Code",
    type: "Source Code",
    price: 1499,
    oldPrice: 2499,
    featured: true,
    description:
      "A flexible React starter kit for creating polished business websites and service landing pages.",
    details: [
      "Reusable React components",
      "Responsive layout structure",
      "Editable CSS styling",
      "Setup and customization guide",
    ],
    icon: Code2,
    color: "gold",
    badge: "BEST FOR DEVELOPERS",
  },
  {
    id: "portfolio-template",
    title: "Creator Portfolio Template",
    category: "Website Templates",
    type: "Website Template",
    price: 999,
    oldPrice: 1499,
    featured: true,
    description:
      "A modern portfolio starting point for developers, designers, photographers and content creators.",
    details: [
      "Home and profile sections",
      "Projects and work showcase",
      "Contact call-to-action",
      "Responsive design",
    ],
    icon: LayoutTemplate,
    color: "blue",
    badge: "CREATOR PICK",
  },
  {
    id: "website-launch-checklist",
    title: "Website Launch Checklist",
    category: "PDF Guides",
    type: "PDF Download",
    price: 149,
    featured: false,
    description:
      "A practical checklist for reviewing content, mobile layouts, technical setup and SEO before launch.",
    details: [
      "Content and page checks",
      "Mobile and design checks",
      "Technical launch review",
      "Basic SEO checklist",
    ],
    icon: FileText,
    color: "green",
    badge: "INSTANT DOWNLOAD",
  },
  {
    id: "youtube-content-planner",
    title: "YouTube Content Planner",
    category: "Planners",
    type: "PDF Planner",
    price: 199,
    featured: false,
    description:
      "Organize video ideas, research, scripts, production tasks and publishing dates in one worksheet.",
    details: [
      "Video idea worksheet",
      "Research and scripting tracker",
      "Production checklist",
      "Publishing review section",
    ],
    icon: FileText,
    color: "orange",
    badge: "FOR CREATORS",
  },
  {
    id: "react-ui-components",
    title: "React UI Components Pack",
    category: "React & Code",
    type: "Code Pack",
    price: 799,
    featured: false,
    description:
      "A reusable collection of UI patterns to help speed up common front-end development tasks.",
    details: [
      "Reusable component examples",
      "CSS customization",
      "Organized source files",
      "Usage instructions",
    ],
    icon: Code2,
    color: "purple",
    badge: "DEV TOOLKIT",
  },
  {
    id: "seo-starter-guide",
    title: "SEO Starter Guide",
    category: "PDF Guides",
    type: "PDF Guide",
    price: 249,
    featured: false,
    description:
      "A beginner-friendly guide to page titles, descriptions, internal links and technical SEO basics.",
    details: [
      "On-page SEO fundamentals",
      "Technical checks",
      "Content optimization",
      "Indexing preparation",
    ],
    icon: FileText,
    color: "green",
    badge: "BEGINNER FRIENDLY",
  },
  {
    id: "small-business-template",
    title: "Small Business Landing Page",
    category: "Website Templates",
    type: "Website Template",
    price: 1299,
    featured: false,
    description:
      "A customizable landing page concept for local businesses that need a professional online presence.",
    details: [
      "Business introduction",
      "Services and benefits",
      "Testimonials layout",
      "Inquiry call-to-action",
    ],
    icon: LayoutTemplate,
    color: "gold",
    badge: "BUSINESS PICK",
  },
  {
    id: "website-project-planner",
    title: "Website Project Planner",
    category: "Planners",
    type: "PDF Planner",
    price: 179,
    featured: false,
    description:
      "Plan project scope, client requirements, milestones and launch tasks in an organized worksheet.",
    details: [
      "Project brief worksheet",
      "Scope and deliverables",
      "Milestone planner",
      "Launch handover checklist",
    ],
    icon: FileText,
    color: "orange",
    badge: "PROJECT WORKFLOW",
  },
];

const categories = [
  "All Products",
  "Website Templates",
  "React & Code",
  "PDF Guides",
  "Planners",
];

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

function Store() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        category === "All Products" || product.category === category;

      const matchesSearch =
        !query ||
        `${product.title} ${product.description} ${product.category} ${product.type}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "title") {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else {
      result = [...result].sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [search, category, sort]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setSelectedProduct(null);
    setCartOpen(true);
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const IconForProduct = ({ product, size = 30 }) => {
    const Icon = product.icon;
    return <Icon size={size} strokeWidth={1.4} />;
  };

  return (
    <main className="store-page">
      <section className="store-hero">
        <div className="store-hero-grid" aria-hidden="true" />

        <div className="store-container store-hero-inner">
          <div className="store-hero-copy">
            <div className="store-eyebrow">
              <Sparkles size={14} />
              THE DIGITAL STORE
            </div>

            <h1>
              Useful tools.
              <br />
              <span>Better work.</span>
            </h1>

            <p>
              Templates, code packs and practical resources designed
              to help you build websites, organize projects and create
              with more confidence.
            </p>

            <div className="store-hero-actions">
              <a href="#store-library" className="store-primary-button">
                Explore Products
                <ArrowRight size={17} />
              </a>

              <Link
                to="/services/web-development"
                className="store-secondary-button"
              >
                Need a Custom Website?
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="store-trust-line">
              <Check size={15} />
              Practical digital resources for developers and creators
            </div>
          </div>

          <div className="store-hero-art">
            <div className="store-art-orbit store-art-orbit-one" />
            <div className="store-art-orbit store-art-orbit-two" />

            <div className="store-art-main-card">
              <div className="store-art-topline">
                <span>FAIZ ALAM / DIGITAL</span>
                <ShoppingBag size={17} />
              </div>

              <div className="store-art-product">
                <div className="store-art-product-icon">
                  <Code2 size={38} strokeWidth={1.2} />
                </div>
                <span>THE CREATOR TOOLKIT</span>
                <h2>
                  Build
                  <br />
                  something <em>great.</em>
                </h2>
              </div>

              <div className="store-art-bottom">
                <span>DESIGN · CODE · CREATE</span>
                <span>001 — 008</span>
              </div>
            </div>

            <div className="store-art-float store-art-float-top">
              <LayoutTemplate size={16} />
              Website templates
            </div>

            <div className="store-art-float store-art-float-bottom">
              <Download size={16} />
              Digital downloads
            </div>
          </div>
        </div>

        <div className="store-container store-hero-footer">
          <span>DESIGNED FOR PRACTICAL WORK</span>
          <span>CODE / TEMPLATES / GUIDES / PLANNERS</span>
        </div>
      </section>

      <section className="store-container store-benefits">
        <div>
          <span className="store-benefit-icon">
            <Code2 size={21} />
          </span>
          <div>
            <h3>Developer Friendly</h3>
            <p>Organized code and practical starting points.</p>
          </div>
        </div>

        <div>
          <span className="store-benefit-icon">
            <Download size={21} />
          </span>
          <div>
            <h3>Digital Resources</h3>
            <p>Guides, planners and downloadable files.</p>
          </div>
        </div>

        <div>
          <span className="store-benefit-icon">
            <Sparkles size={21} />
          </span>
          <div>
            <h3>Built to Customize</h3>
            <p>Starting points you can adapt to your needs.</p>
          </div>
        </div>
      </section>

      <section className="store-library" id="store-library">
        <div className="store-container">
          <div className="store-section-heading">
            <div>
              <span className="store-section-label">THE COLLECTION</span>
              <h2>Find your next useful resource.</h2>
              <p>
                Explore practical digital products for your next project.
              </p>
            </div>

            <button
              className="store-cart-button"
              onClick={() => setCartOpen(true)}
              type="button"
            >
              <ShoppingCart size={17} />
              Cart
              <span>{cartCount}</span>
            </button>
          </div>

          <div className="store-controls">
            <label className="store-search">
              <Search size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search templates, code, guides..."
                aria-label="Search digital products"
              />
              {search && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearch("")}
                >
                  <X size={15} />
                </button>
              )}
            </label>

            <label className="store-sort">
              <span>Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title">Name A–Z</option>
              </select>
            </label>
          </div>

          <div className="store-filters">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="store-results">
            <span>
              Showing <strong>{filteredProducts.length}</strong> products
            </span>
            <span>Prices shown in INR</span>
          </div>

          {filteredProducts.length ? (
            <div className="store-product-grid">
              {filteredProducts.map((product, index) => (
                <article
                  className="store-product-card"
                  key={product.id}
                  style={{ "--product-index": index }}
                >
                  <button
                    type="button"
                    className={`store-product-art ${product.color}`}
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View ${product.title}`}
                  >
                    {product.featured && (
                      <span className="store-product-featured">
                        FEATURED
                      </span>
                    )}

                    <span className="store-product-art-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="store-product-art-icon">
                      <IconForProduct product={product} size={43} />
                    </span>

                    <span className="store-product-art-title">
                      {product.category}
                    </span>

                    <span className="store-product-art-footer">
                      FAIZ ALAM / DIGITAL
                    </span>
                  </button>

                  <div className="store-product-info">
                    <div className="store-product-meta">
                      <span>{product.type}</span>
                      <span>{product.badge}</span>
                    </div>

                    <h3>{product.title}</h3>
                    <p>{product.description}</p>

                    <div className="store-product-bottom">
                      <div className="store-price">
                        <strong>{formatPrice(product.price)}</strong>
                        {product.oldPrice && (
                          <del>{formatPrice(product.oldPrice)}</del>
                        )}
                      </div>

                      <button
                        type="button"
                        className="store-view-button"
                        onClick={() => setSelectedProduct(product)}
                      >
                        View
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="store-empty">
              <Search size={27} />
              <h3>No products found</h3>
              <p>Try another keyword or category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All Products");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="store-custom-cta">
        <div className="store-container store-custom-inner">
          <div>
            <span className="store-section-label">NEED SOMETHING CUSTOM?</span>
            <h2>Have a project in mind?</h2>
            <p>
              Get a website designed around your business, goals and audience.
            </p>
          </div>

          <Link
            to="/services/web-development"
            className="store-primary-button"
          >
            Explore Web Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="store-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <section
            className="store-product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-modal-title"
          >
            <button
              type="button"
              className="store-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <X size={20} />
            </button>

            <div
              className={`store-modal-art ${selectedProduct.color}`}
            >
              <span>{selectedProduct.type}</span>
              <IconForProduct product={selectedProduct} size={52} />
              <small>FAIZ ALAM / DIGITAL</small>
            </div>

            <div className="store-modal-content">
              <span className="store-section-label">
                {selectedProduct.category}
              </span>

              <h2 id="store-modal-title">{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>

              <h3>What's included</h3>
              <ul>
                {selectedProduct.details.map((detail) => (
                  <li key={detail}>
                    <Check size={16} />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="store-modal-price">
                <strong>{formatPrice(selectedProduct.price)}</strong>
                {selectedProduct.oldPrice && (
                  <del>{formatPrice(selectedProduct.oldPrice)}</del>
                )}
              </div>

              <button
                type="button"
                className="store-primary-button store-add-button"
                onClick={() => addToCart(selectedProduct)}
              >
                <ShoppingCart size={17} />
                Add to Cart
              </button>

              <small className="store-demo-note">
                Demo storefront: checkout and payment are not connected yet.
              </small>
            </div>
          </section>
        </div>
      )}

      {cartOpen && (
        <div
          className="store-drawer-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setCartOpen(false);
            }
          }}
        >
          <aside
            className="store-cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-cart-title"
          >
            <div className="store-drawer-header">
              <div>
                <span className="store-section-label">YOUR SELECTION</span>
                <h2 id="store-cart-title">Shopping Cart</h2>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={21} />
              </button>
            </div>

            {cart.length ? (
              <>
                <div className="store-cart-items">
                  {cart.map((item) => (
                    <article className="store-cart-item" key={item.id}>
                      <div className={`store-cart-item-icon ${item.color}`}>
                        <IconForProduct product={item} size={22} />
                      </div>

                      <div className="store-cart-item-info">
                        <h3>{item.title}</h3>
                        <span>{formatPrice(item.price)}</span>

                        <div className="store-quantity">
                          <button
                            type="button"
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label={`Decrease ${item.title} quantity`}
                          >
                            <Minus size={13} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label={`Increase ${item.title} quantity`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="store-remove-item"
                        onClick={() =>
                          setCart((current) =>
                            current.filter((entry) => entry.id !== item.id)
                          )
                        }
                        aria-label={`Remove ${item.title}`}
                      >
                        <X size={16} />
                      </button>
                    </article>
                  ))}
                </div>

                <div className="store-cart-total">
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <button
                  type="button"
                  className="store-checkout-button"
                  onClick={() =>
                    alert(
                      "Checkout is not connected yet. The cart is currently a frontend demo."
                    )
                  }
                >
                  Continue to Checkout
                  <ArrowRight size={17} />
                </button>

                <p className="store-demo-note">
                  No payment will be taken. Payment integration will be added
                  separately.
                </p>
              </>
            ) : (
              <div className="store-cart-empty">
                <ShoppingBag size={34} />
                <h3>Your cart is empty</h3>
                <p>Add a product to see it here.</p>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}

export default Store;