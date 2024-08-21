import { IIcons } from "../../types/props";

const SmallIcons: React.FC<IIcons> = ({ icons }) => {
  const MAX_ICONS = 3;
  const visibleIcons = icons.slice(0, MAX_ICONS);
  const additionalIconsCount = icons.length - MAX_ICONS;

  return (
    <>
      {visibleIcons.map((element, index) => (
        <div
          key={index}
          className="w-3 h-3 rounded-full bg-symbol-color relative bottom-3 mb-[-12px]"
          style={{
            left: 36 - index * 6,
            zIndex: 10 - index,
          }}
        >
          <img className="rounded-full" src={element} alt={`icon-${index}`} />
        </div>
      ))}

      {additionalIconsCount > 0 && (
        <div className="w-3 h-3 rounded-full bg-symbol-color z-50 relative left-9 bottom-3 mb-[-12px] text-[6px] flex items-center justify-center">
          {additionalIconsCount}+
        </div>
      )}
    </>
  );
};

export default SmallIcons;
