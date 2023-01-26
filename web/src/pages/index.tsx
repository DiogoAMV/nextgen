import styles from "./home.module.scss";
import { H1, Text } from "../components/Text/Text";
import { FiPlus } from "react-icons/fi";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo />
      <Button className="small-default">
        <FiPlus fontSize={24} /> Button
      </Button>
      <h1>Hello World</h1>
      <p>This is a test</p>
    </div>
  );
}
