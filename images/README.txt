This site currently renders product and hero visuals with CSS gradients + icons
(see .product-visual, .detail-visual, .story-visual, .hero, .gallery-tile in
css/style.css) so the site looks complete with zero image files.

To swap in real photography later, drop files into this folder using names
like the ones below, then replace the relevant ".product-visual"/".hero"
element in the HTML with an <img> tag pointing here:

  logo.png            - brand logo (used in the header/footer "logo-mark")
  hero.jpg            - homepage hero background
  hair-oil.jpg        - Herbal Hair Oil
  hair-mask.jpg       - Herbal Hair Mask
  hair-serum.jpg      - Hair Serum
  herbal-shampoo.jpg  - Herbal Shampoo
  rosemary-oil.jpg    - Rosemary Hair Oil
  bathing-powder.jpg  - Herbal Bathing Powder
  bathing-soap.jpg    - Natural Bathing Soap
  face-pack.jpg       - Face Pack Powder
  body-scrub.jpg      - Body Scrub
  body-powder.jpg     - Herbal Body Powder

Product records live in js/script.js (the PRODUCTS array) — each entry has
an "icon" field driving the current placeholder; add an "img" field there
once real photos exist and reference it from the templates.
