import { icons } from "lucide-react-native";

const Icon = ({ name, color, size, fillColor }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in the icons object.`);
    return null;
  }

  if (fillColor)
    return <LucideIcon color={color} size={size} fill={fillColor} />;
  return <LucideIcon color={color} size={size} />;
};

export default Icon;
