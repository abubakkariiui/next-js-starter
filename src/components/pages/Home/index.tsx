import Image from "next/image";
import { Row } from "antd";
import AuthCard from "@components/molecules/AuthCard";
import IconCard from "@components/atoms/IconCard";
import TECH_STACK_INFO from "@constants/TechStackInfo";
import CustomAvatar from "@components/atoms/CustomAvatar";
import styles from "./styles.module.sass";

export default function Home() {
  const renderHeader = () => (
    <>
      <Image src="/logos/next.svg" alt="Next logo" width={100} height={20} />
      <h1 className={styles.heading}>Full-stack starter template 2024</h1>
      <h2 className={styles.sub_heading}>
        NextJs + NextAuth + Typescript + Mongo DB + Ant Design
      </h2>
    </>
  );

  const renderTechStack = () => (
    <Row gutter={12}>
      {TECH_STACK_INFO?.map((t) => (
        <IconCard
          key={t.name}
          text={t.name}
          iconPath={t.iconPath}
          iconSize={35}
          url={t.url}
        />
      ))}
    </Row>
  );

  return (
    <main className={styles.container}>
      {renderHeader()}
      {renderTechStack()}
      <AuthCard />
    </main>
  );
}
