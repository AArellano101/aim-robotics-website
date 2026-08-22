import logoImg from "../assets/logo.png";
import "./Logo.css";

interface LogoProps {
  className?: string;
}

/** The official AIM logo: red wordmark with a charcoal crosshair/soccer-ball mark. */
function Logo({ className }: LogoProps) {
  return (
    <img
      className={`logo ${className ?? ""}`}
      src={logoImg}
      alt="AIM — Autonomous Intelligent Machines"
    />
  );
}

export default Logo;
