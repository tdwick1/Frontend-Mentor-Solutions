/* import font */
@import url(https://fonts.google.com/specimen/Manrope);

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: hsl(218, 23%, 16%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  color: hsl(193, 38%, 86%);
  font-family: "Manrope", sans-serif;
  font-weight: 800;
}

.adviceCard {
  background-color: hsl(217, 19%, 24%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  max-height: 500px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 15px;
  padding: 2rem;
  transition: max-height 0.15s ease-out;
  position: relative;
}

@media (max-width: 500px) {
  .adviceCard {
    max-width: 75vw;
  }
}

#adviceText {
  font-size: 28px;
  position: relative;
}

#adviceText::before {
  content: "“";
  font-size: 32px;
  color: hsl(150, 100%, 66%);
  position: absolute;
  top: -10px;
  left: -15px;
}
#adviceText::after {
  content: "”";
  font-size: 32px;
  color: hsl(150, 100%, 66%);
  position: absolute;
  bottom: -10px;
  right: -15px;
}

.adviceCard > * {
  margin: 1rem;
}

.adviceCard #adviceId {
  color: hsl(150, 100%, 66%);
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 12px;
}

.adviceCard #newAdvice {
  all: unset;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  bottom: -25px;
  position: absolute;
  background-color: hsl(150, 100%, 66%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}
.adviceCard #newAdvice:hover {
  background-color: hsl(150, 100%, 66%);
  opacity: 0.8;
}

.adviceCard #newAdvice img {
  width: 1.5rem;
  height: 1.5rem;
}
