import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/features/Header/Header";
import MyselfResumeHead from "@/features/MyselfResume_head/MyselfResume_head";
import RecentPosts from "@/features/RecentPosts/RecentPosts";
import FeaturedWorks from "@/features/FeaturedWorks/FeaturedWorks";
import Footer from "@/features/Footer/Footer";

export default function Home() {
  return (
      <div className={styles.app}>
        <Header />
        <main>
            <MyselfResumeHead />
            <RecentPosts />
            <FeaturedWorks />
        </main>
          <Footer />
      </div>

  );
}
