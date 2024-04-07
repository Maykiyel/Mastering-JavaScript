// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calculator: resolve(__dirname, "Apps/calculator.html"),
        counter: resolve(__dirname, "Apps/counter.html"),
        diceRoller: resolve(__dirname, "Apps/dice-roller.html"),
        digitalClock: resolve(__dirname, "Apps/digital-clock.html"),
        imageSlider: resolve(__dirname, "Apps/image-slider.html"),
        memoryGame: resolve(__dirname, "Apps/memory-game.html"),
        numberGuessing: resolve(__dirname, "Apps/number-guessing.html"),
        passwordGenerator: resolve(__dirname, "Apps/password-generator.html"),
        rockpaper: resolve(__dirname, "Apps/rock-paper-scissors.html"),
        stopwatch: resolve(__dirname, "Apps/stopwatch.html"),
        tempConverter: resolve(__dirname, "Apps/temp-converter.html"),
        weatherApp: resolve(__dirname, "Apps/weather-app.html"),
      },
    },
  },
});
