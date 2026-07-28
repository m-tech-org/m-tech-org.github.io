import { useEffect } from 'react';
import { Navigation } from '../components/Navigation.tsx';
import { Footer } from '../components/Footer.tsx';
import { ProductDetailsDialog } from '../components/ProductDetailsDialog.tsx';
import { products } from '../data/products.ts';
import styles from './products.module.css';

export default function Products() {
  useEffect(() => {
    document.title = 'Our Products - M-Tech';
  }, []);

  return (
    <div className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Products</h1>
        <p className={styles.heroDescription}>
          Ready-to-use tools we've built and shipped ourselves — self-hosted, no subscriptions locking your data
          hostage.
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.productsGrid}>
          {products.map((product, index) => {
            const isUpcoming = product.status === 'upcoming';
            const card = (
              <div
                className={isUpcoming ? `${styles.productCard} ${styles.upcomingCard}` : styles.productCard}
                role={isUpcoming ? undefined : 'button'}
                tabIndex={isUpcoming ? undefined : 0}
                style={{ animationDelay: `${Math.min(index, 8) * 80}ms` }}
              >
                <div className={isUpcoming ? `${styles.imageWrap} ${styles.upcomingBanner}` : styles.imageWrap}>
                  <img src={product.image} alt={product.title} className={styles.productImage} />
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productCategoryRow}>
                    <p className={styles.productCategory}>{product.category}</p>
                    <span className={styles.priceBadge}>{product.price}</span>
                  </div>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDescription}>{product.longDescription}</p>

                  <div className={styles.productMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Year</span>
                      <span className={styles.metaValue}>{product.year}</span>
                    </div>
                  </div>

                  <div className={styles.productTech}>
                    {product.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.productOutcome}>
                    <strong>Outcome:</strong> {product.outcome}
                  </div>

                  {product.coupons && product.coupons.length > 0 && (
                    <div className={styles.couponBanner}>
                      🎉 Launch offer:
                      <div className={styles.couponList}>
                        {product.coupons.map((coupon) => (
                          <span key={coupon.code} className={styles.couponItem}>
                            <code className={styles.couponCode}>{coupon.code}</code> — {coupon.discount}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );

            return isUpcoming ? (
              <div key={product.id}>{card}</div>
            ) : (
              <ProductDetailsDialog key={product.id} product={product}>
                {card}
              </ProductDetailsDialog>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
