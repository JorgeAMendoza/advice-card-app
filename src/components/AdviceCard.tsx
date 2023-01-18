import borderSVGDesktop from '../assets/pattern-divider-desktop.svg';
import borderSVGMobile from '../assets/pattern-divider-mobile.svg';
import diceIcon from '../assets/icon-dice.svg';
import device from '../utils/device-breakpoints';

const AdviceCard = () => {
  return (
    <div>
      <p aria-live="polite">advice number</p>
      <p aria-live="polite">advice text</p>

      <picture>
        <source srcSet={borderSVGDesktop} media={device.tablet} />
        <img src={borderSVGMobile} alt="" />
      </picture>

      <button aria-label="click to generate new advice">
        <img src={diceIcon} alt="" />
      </button>
    </div>
  );
};

export default AdviceCard;