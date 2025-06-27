import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Luminous</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#products" className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#about" className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Radiant Skin
                <span className="text-rose-600 block">Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover scientifically-proven skincare solutions that transform your skin from within.
                Our premium formulations deliver visible results for healthier, glowing skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-rose-700 transition-colors text-center">
                  Explore Products
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-rose-600 hover:text-rose-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://img.gcimagazine.com/files/base/allured/all/image/2024/02/cible_skin.65c5b335ed897.png?auto=format%2Ccompress&q=70&w=700"
                  alt="Happy woman with skincare product"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each product is carefully formulated with the finest ingredients to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Product 1 - Complete Care Set */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://www.pravadaprivatelabel.com/cdn/shop/files/Luxury_Private_Label_Skincare_Collection.jpg?v=1738680261&width=4368"
                  alt="Complete skincare collection"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Care Set</h3>
              <p className="text-gray-600 mb-4 text-sm">
                5-step routine with cleanser, toner, serum, moisturizer, and mask for complete transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$129</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 - Hyaluronic Acid Serum */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://m.media-amazon.com/images/I/71Vl8EY5W4L._UF1000,1000_QL80_.jpg"
                  alt="Hyaluronic acid serum"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hyaluronic Acid Serum</h3>
              <p className="text-gray-600 mb-4 text-sm">
                High-concentration serum that provides 24-hour hydration and plumps skin for a youthful glow.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$45</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 - Anti-Aging Moisturizer */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://mudmasky.com/wp-content/uploads/2023/07/Serum-infused-moisturizer-product-web-size.jpg"
                  alt="Anti-aging moisturizer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anti-Aging Moisturizer</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Lightweight, serum-infused moisturizer with anti-aging properties that hydrates and nourishes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$65</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 - Vitamin C Cleanser */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://m.media-amazon.com/images/I/61A1cJR6BbL._UF1000,1000_QL80_.jpg"
                  alt="Vitamin C cleanser"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vitamin C Cleanser</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Brightening cleanser that gently removes impurities while delivering vitamin C for radiant skin.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$28</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 5 - Rose Water Toner */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://i5.walmartimages.com/asr/ff6e46e4-ce0f-423a-a164-e3d8cf980bc6.6be54bdf7785a2f762e7f1c854cf7189.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                  alt="Rose water toner"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rose Water Toner</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Refreshing toner that balances pH, minimizes pores, and prepares skin for optimal serum absorption.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$32</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 6 - Retinol Night Serum */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://m.media-amazon.com/images/I/71DK7uTZmlL._SL1500_.jpg"
                  alt="Retinol night serum"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retinol Night Serum</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Powerful retinol formula that works overnight to reduce fine lines and improve skin texture.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$58</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 7 - Eye Cream */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://kbeautyworld.com/cdn/shop/files/Beauty-Of-Joseon-Discovery-Skin-Care-Set-K-Beauty-World.webp?v=1740505656"
                  alt="Peptide eye cream"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peptide Eye Cream</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Advanced eye cream with peptides that targets dark circles, puffiness, and fine lines.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$42</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 8 - Vitamin C Serum */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://m.media-amazon.com/images/I/71BdPyJArYL._UF1000,1000_QL80_.jpg"
                  alt="Vitamin C serum"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vitamin C Serum</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Antioxidant-rich serum that brightens skin, evens tone, and protects against environmental damage.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$38</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 9 - Gentle Face Cleanser */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://www.insidehook.com/wp-content/uploads/2019/04/The-Ordinary-.jpg?fit=1200%2C675"
                  alt="Gentle face cleanser"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gentle Face Cleanser</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Mild, non-stripping cleanser that removes makeup and impurities while maintaining skin's natural barrier.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$25</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 10 - SPF Moisturizer */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://ambi.com/cdn/shop/products/AMBI-Fade-Serum-Carton--Side-1-2000x2000-v1.jpg?v=1734381616"
                  alt="SPF moisturizer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SPF 30 Moisturizer</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Daily moisturizer with broad-spectrum SPF 30 protection that hydrates while shielding from UV damage.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$35</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 11 - Niacinamide Serum */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://m.media-amazon.com/images/I/71vpeeIZOtL._UF1000,1000_QL80_.jpg"
                  alt="Niacinamide serum"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Niacinamide Serum</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Pore-refining serum with 10% niacinamide that controls oil production and improves skin texture.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$35</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 12 - Exfoliating Mask */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square mb-6 bg-white rounded-xl p-4">
                <img
                  src="https://www.byrdie.com/thmb/U08ebC92pXRdiBYHkcRvhnXBiU0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/expensive-skincare-1d20819118de482a8504a69716abd59b.png"
                  alt="Exfoliating mask"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exfoliating Mask</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Weekly treatment mask with AHA/BHA acids that deeply exfoliates and reveals smoother, brighter skin.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-rose-600">$48</span>
                <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Science Meets Beauty</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Luminous, we believe that beautiful skin is achieved through the perfect blend of science and nature.
                Our team of dermatologists and chemists work tirelessly to create formulations that deliver real,
                visible results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Clinically Tested</h4>
                    <p className="text-gray-600">All products undergo rigorous testing for safety and efficacy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Natural Ingredients</h4>
                    <p className="text-gray-600">Premium botanical extracts and active compounds</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-rose-600 rounded-full flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cruelty-Free</h4>
                    <p className="text-gray-600">Never tested on animals, always ethically sourced</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.health.com/thmb/JqAOWhPbyghQsoqcsPZAvyj2c2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HDC-INFOGRAPHIC-HOW-TO-LAYER-YOUR-SKINCARE-PRODUCTS-1-FINAL-1-1-647ac491d6ad44c898366a09d73c20cb.png"
                alt="Skincare layering guide"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real results from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`star-1-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "My skin has never looked better! The hyaluronic acid serum is absolutely incredible.
                I see visible results after just one week of use."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Verified Customer</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`star-2-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The complete care set transformed my skincare routine. My friends keep asking what I'm using
                because my skin is glowing!"
              </p>
              <div className="font-semibold text-gray-900">Emily Chen</div>
              <div className="text-sm text-gray-500">Verified Customer</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={`star-3-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "I'm 45 and people think I'm in my early 30s. The anti-aging moisturizer is pure magic.
                Worth every penny!"
              </p>
              <div className="font-semibold text-gray-900">Rachel Davis</div>
              <div className="text-sm text-gray-500">Verified Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Skin?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the secret to radiant, healthy skin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                    <p className="opacity-90">hello@luminousskincare.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Visit Our Store</h4>
                    <p className="opacity-90">123 Beauty Boulevard<br />Los Angeles, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                    <p className="opacity-90">(555) 123-SKIN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get 20% Off Your First Order</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your skin concerns..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-white text-rose-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Get My Discount Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Luminous</h3>
              <p className="text-gray-400 mb-4">
                Transform your skin with our scientifically-proven skincare solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0H7.983C3.576 0 0 3.576 0 7.983v4.034C0 16.424 3.576 20 7.983 20h4.034C16.424 20 20 16.424 20 12.017V7.983C20 3.576 16.424 0 12.017 0zM18.5 12.017c0 3.589-2.894 6.483-6.483 6.483H7.983c-3.589 0-6.483-2.894-6.483-6.483V7.983c0-3.589 2.894-6.483 6.483-6.483h4.034c3.589 0 6.483 2.894 6.483 6.483v4.034z" />
                    <path d="M10 5.139c-2.682 0-4.861 2.179-4.861 4.861 0 2.682 2.179 4.861 4.861 4.861 2.682 0 4.861-2.179 4.861-4.861 0-2.682-2.179-4.861-4.861-4.861zM10 13.361c-1.854 0-3.361-1.507-3.361-3.361S8.146 6.639 10 6.639s3.361 1.507 3.361 3.361S11.854 13.361 10 13.361z" />
                    <circle cx="15.139" cy="4.861" r="1.111" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Cleansers</a></li>
                <li><a href="#" className="hover:text-white">Serums</a></li>
                <li><a href="#" className="hover:text-white">Moisturizers</a></li>
                <li><a href="#" className="hover:text-white">Treatments</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Luminous Skincare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
