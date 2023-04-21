say_hello:
	echo "Hello World"

install:
	 cd cart-app && npm install && cd ../product-list-app && npm install && cd ../application-shell && npm install

start-application-shell:
	cd application-shell && npm start

start-cart:
	cd cart-app && npm start

start-product-list:
	cd product-list-app && npm start