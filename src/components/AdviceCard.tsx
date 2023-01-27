import borderSVGDesktop from '../assets/pattern-divider-desktop.svg';
import borderSVGMobile from '../assets/pattern-divider-mobile.svg';
import diceIcon from '../assets/icon-dice.svg';
import device from '../utils/device-breakpoints';
import { useSWRConfig } from 'swr';
import type { AdviceCardContent } from '../types/advice-card';

const AdviceCard = () => {
  const { mutate } = useSWRConfig();
  return (
    <div>
      <p aria-live="polite">advice number</p>
      <p aria-live="polite">advice text</p>

      <picture>
        <source srcSet={borderSVGDesktop} media={device.tablet} />
        <img src={borderSVGMobile} alt="" />
      </picture>

      <button
        onClick={() => mutate('advice')}
        aria-label="click to generate new advice"
      >
        <img src={diceIcon} alt="" />
      </button>
    </div>
  );
};

export default AdviceCard;
