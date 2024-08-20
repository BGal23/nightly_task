import token from "../assets/tokens.json";

const createSmallIcons = () => {
  const randomIconsNumbers = Math.floor(Math.random() * 10) + 1;
  const iconsArray = [];

  for (let i = 0; i < randomIconsNumbers; i++) {
    const randomIcon = Math.floor(Math.random() * 100);
    const tokenImage = token[randomIcon].image;
    iconsArray.push(tokenImage);
  }

  return iconsArray;
};

export default createSmallIcons;
