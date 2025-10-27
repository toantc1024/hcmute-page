"use client";

import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as React from "react";
import SQUARE_LOGO from "@/assets/logo/square_logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const daoTaoItems = [
  {
    title: "Đại học",
    href: "/dao-tao/dai-hoc",
    description: "Các chương trình đào tạo đại học chính quy và liên thông.",
  },
  {
    title: "Thạc sĩ",
    href: "/dao-tao/thac-si",
    description: "Chương trình đào tạo thạc sĩ các chuyên ngành.",
  },
  {
    title: "Tiến sĩ",
    href: "/dao-tao/tien-si",
    description: "Chương trình đào tạo tiến sĩ và nghiên cứu sinh.",
  },
  {
    title: "Đào tạo liên tục",
    href: "/dao-tao/lien-tuc",
    description: "Các khóa học ngắn hạn và đào tạo nghề.",
  },
];

const nghienCuuItems = [
  {
    title: "Dự án nghiên cứu",
    href: "/nghien-cuu/du-an",
    description: "Các dự án nghiên cứu khoa học đang triển khai.",
  },
  {
    title: "Công bố khoa học",
    href: "/nghien-cuu/cong-bo",
    description: "Danh sách các công trình nghiên cứu đã công bố.",
  },
  {
    title: "Hội thảo khoa học",
    href: "/nghien-cuu/hoi-thao",
    description: "Các hội thảo và hội nghị khoa học.",
  },
];

const hopTacItems = [
  {
    title: "Hợp tác quốc tế",
    href: "/hop-tac/quoc-te",
    description: "Các chương trình hợp tác với các trường đại học quốc tế.",
  },
  {
    title: "Hợp tác doanh nghiệp",
    href: "/hop-tac/doanh-nghiep",
    description: "Liên kết với doanh nghiệp và tổ chức.",
  },
  {
    title: "Trao đổi sinh viên",
    href: "/hop-tac/trao-doi",
    description: "Chương trình trao đổi sinh viên và giảng viên.",
  },
];

const veHCMUTEItems = [
  {
    title: "Giới thiệu chung",
    href: "/ve-hcmute/gioi-thieu",
    description: "Lịch sử hình thành và phát triển của trường.",
  },
  {
    title: "Tầm nhìn & Sứ mệnh",
    href: "/ve-hcmute/tam-nhin-su-menh",
    description: "Định hướng phát triển và mục tiêu của trường.",
  },
  {
    title: "Cơ cấu tổ chức",
    href: "/ve-hcmute/co-cau-to-chuc",
    description: "Sơ đồ tổ chức và các đơn vị trực thuộc.",
  },
  {
    title: "Ban lãnh đạo",
    href: "/ve-hcmute/ban-lanh-dao",
    description: "Thông tin về ban lãnh đạo nhà trường.",
  },
];

const sinhVienItems = [
  {
    title: "Thông tin sinh viên",
    href: "/sinh-vien/thong-tin",
    description: "Hướng dẫn và thông tin dành cho sinh viên.",
  },
  {
    title: "Học bổng",
    href: "/sinh-vien/hoc-bong",
    description: "Các chương trình học bổng và hỗ trợ tài chính.",
  },
  {
    title: "Hoạt động sinh viên",
    href: "/sinh-vien/hoat-dong",
    description: "Các hoạt động ngoại khóa và câu lạc bộ.",
  },
  {
    title: "Việc làm",
    href: "/sinh-vien/viec-lam",
    description: "Hỗ trợ tìm việc làm và thực tập.",
  },
];

const cbvcItems = [
  {
    title: "Thông tin CBVC",
    href: "/cbvc/thong-tin",
    description: "Thông tin dành cho cán bộ viên chức.",
  },
  {
    title: "Đào tạo & Phát triển",
    href: "/cbvc/dao-tao",
    description: "Các chương trình đào tạo và phát triển nghề nghiệp.",
  },
  {
    title: "Chế độ chính sách",
    href: "/cbvc/che-do-chinh-sach",
    description: "Các chế độ chính sách dành cho CBVC.",
  },
];

const tuyenSinhItems = [
  {
    title: "Tuyển sinh đại học",
    href: "/tuyen-sinh/dai-hoc",
    description: "Thông tin tuyển sinh đại học năm 2024.",
  },
  {
    title: "Tuyển sinh thạc sĩ",
    href: "/tuyen-sinh/thac-si",
    description: "Thông tin tuyển sinh sau đại học.",
  },
  {
    title: "Hướng dẫn đăng ký",
    href: "/tuyen-sinh/huong-dan",
    description: "Hướng dẫn quy trình đăng ký xét tuyển.",
  },
  {
    title: "Điểm chuẩn",
    href: "/tuyen-sinh/diem-chuan",
    description: "Điểm chuẩn các năm trước.",
  },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-white shadow-md border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            {/* Left Side Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Về HCMUTE */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Về HCMUTE
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/ve-hcmute"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Về HCMUTE
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Thông tin tổng quan về Trường Đại học Sư phạm Kỹ
                                thuật TP.HCM
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {veHCMUTEItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Sinh viên */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      Sinh viên
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {sinhVienItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* CBVC */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      CBVC
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {cbvcItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Cựu sinh viên */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
                      href="/cuu-sinh-vien"
                    >
                      Cựu sinh viên
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Center Logo - Absolutely centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="flex items-center">
                <img
                  src={SQUARE_LOGO}
                  alt="HCMUTE Logo"
                  className="h-12 w-12"
                />
              </a>
            </div>

            {/* Right Side Navigation */}
            <div className="hidden lg:flex items-center ml-auto">
              <div className="flex items-center space-x-1">
                <NavigationMenu>
                  <NavigationMenuList>
                    {/* Nghiên cứu */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                        Nghiên cứu
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {nghienCuuItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Hợp tác */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                        Hợp tác
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {hopTacItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Tuyển sinh */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                        Tuyển sinh
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {tuyenSinhItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Tin tức & Sự kiện */}
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent`}
                        href="/tin-tuc"
                      >
                        Tin tức & Sự kiện
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            {/* Language Flags and Search */}
            <div className="absolute right-[-8rem] flex items-center ">
              {/* Language Select */}
              <div className="flex items-center">
                <select
                  className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors"
                  defaultValue="VN"
                >
                  <option value="VN">VN</option>
                  <option value="EN">EN</option>
                </select>
              </div>

              {/* Search Icon */}
              <button className="hover:bg-gray-100 transition-colors p-2 rounded-lg text-gray-600 hover:text-gray-900">
                <Search size={20} />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setIsSheetOpen(true)}
                className="text-gray-700"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left" className="w-full sm:w-96 p-0">
          <SheetHeader className="border-b p-6">
            <div className="flex justify-between items-center">
              <SheetTitle>Menu</SheetTitle>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
          </SheetHeader>

          <div className="flex flex-col space-y-0 p-6">
            <div className="space-y-4">
              {/* Mobile menu items */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Về HCMUTE</h3>
                <div className="pl-4 space-y-2">
                  {veHCMUTEItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Sinh viên</h3>
                <div className="pl-4 space-y-2">
                  {sinhVienItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">CBVC</h3>
                <div className="pl-4 space-y-2">
                  {cbvcItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/cuu-sinh-vien"
                className="font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 block"
                onClick={() => setIsSheetOpen(false)}
              >
                Cựu sinh viên
              </a>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Đào tạo</h3>
                <div className="pl-4 space-y-2">
                  {daoTaoItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nghiên cứu</h3>
                <div className="pl-4 space-y-2">
                  {nghienCuuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hợp tác</h3>
                <div className="pl-4 space-y-2">
                  {hopTacItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tuyển sinh</h3>
                <div className="pl-4 space-y-2">
                  {tuyenSinhItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/tin-tuc"
                className="font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2 block"
                onClick={() => setIsSheetOpen(false)}
              >
                Tin tức & Sự kiện
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
