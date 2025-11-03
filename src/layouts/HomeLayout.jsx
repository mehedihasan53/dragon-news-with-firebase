import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightAside from "../components/homeLayout/RightAside";
import LeftAside from "../components/homeLayout/LeftAside";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="left-header">
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      {/* Mobile Categories */}
      <div className="block md:hidden w-11/12 mx-auto mb-4">
        <LeftAside />
      </div>

      {/* Main Grid */}
      <main className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
        {/* Left Sidebar */}
        <aside className="hidden md:block md:col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="col-span-1 md:col-span-6 order-1 md:order-none">
          <Outlet />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-1 md:col-span-3 order-2 md:order-none mt-4 md:mt-0 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
