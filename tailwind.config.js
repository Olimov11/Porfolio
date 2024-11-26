/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*html ,./Ishimiz 2/**/*html ,./Portfolio/**/*html "],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      'Irish Grover': ['Irish Grover'],
      'Host Grotesk': ['Host Grotesk']
    } ,
    backgroundImage: {
      'hero-pattern': "url('/o'zimni ishlarim/img/menu-restorana.webp')",
      'img': "url('/Portfolio/istockphoto-1356364287-612x612.jpg')",
    }
  }
}

