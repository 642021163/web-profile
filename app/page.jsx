"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink, Rocket, Code, Briefcase, GraduationCap, Code2, Sparkles } from "lucide-react"
import AutoImageSlider from "@/app/AutoImageSlider/AutoImageSlider.jsx"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">

            <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Web-Profile"
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-semibold hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-sm font-semibold hover:text-primary transition-colors">
              Experiance
            </a>
            <a href="#projects" className="text-sm font-semibold hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-semibold hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 animate-bounce-in">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-xl transform hover:scale-110 transition-transform duration-300">
                AJ
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 animate-slide-up">
              Akkarachai Jaitrong
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4 font-semibold">Web Developer</p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              เป็นนักพัฒนาเว็บที่พอมีพื้นฐานด้าน Frontend และ Backend
              มีความสนใจในการพัฒนาระบบที่ใช้งานได้จริงและตอบโจทย์ผู้ใช้
              แม้จะยังอยู่ในช่วงเริ่มต้นของเส้นทางอาชีพ
              แต่ผมมีความตั้งใจเรียนรู้ พัฒนา และพร้อมเติบโตไปในสายงานนี้อย่างจริงจัง
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Us
                  <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 shadow-md hover:shadow-lg transition-all bg-transparent"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-10 bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Left side - Icon และ Highlights */}


                {/* Right side - เนื้อหา */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary/10 text-primary border-2 border-primary/20">
                      Web Developer
                    </Badge>

                  </div>

                  <p className="text-lg text-foreground/90 leading-relaxed">
                    ผมมีความสนใจด้านการพัฒนาเว็บไซต์และระบบเว็บแอปพลิเคชัน มีพื้นฐานทั้งในส่วนของ Frontend และ Backend
                    รวมถึงการออกแบบและใช้งาน RESTful API และการจัดการฐานข้อมูล
                    แม้ว่าจะยังอยู่ในช่วงเริ่มต้นของเส้นทางนักพัฒนา
                    แต่ผมมีความตั้งใจและมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผ่านการลงมือทำโปรเจกต์จริง
                    การศึกษาด้วยตนเอง และการเปิดรับคำแนะนำเพื่อพัฒนางานให้ดียิ่งขึ้น
                  </p>



                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">ทำงานภายใต้แรงกดดัน</h4>
                        <p className="text-xs text-muted-foreground">ทำงานร่วมกับผู้อื่นได้ดี</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                      <Rocket className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">ปรับตัวได้เร็ว</h4>
                        <p className="text-xs text-muted-foreground">พร้อมเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 md:mb-32 bg-gray-50 -mx-4 px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <Code className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    Next.js
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    TypeScript
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    HTML/CSS
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                    JavaScript
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <Briefcase className="text-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                    Node.js
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                    Express
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                    REST API
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer">
                    .NET
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <GraduationCap className="text-green-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Database & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                    MySQL
                  </span>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                    Github
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                    Docker
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                    Postman
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiance </span>
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-white border-2 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-56 h-56 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/intern-2.jpg"
                    alt="Internship"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                        Web Developer
                      </h3>
                      <p className="text-muted-foreground font-medium">บริษัท ISLAMIC SYSTEMS CORPORATION CO.,LTD.</p>
                    </div>
                    <Badge className="mt-2 md:mt-0 bg-primary/10 text-primary border-2 border-primary/30 shadow-sm">
                      Nov 2024 - Feb 2025
                    </Badge>
                  </div>

                  <ul className="list-disc list-inside space-y-3 text-foreground/80 text-base">
                    <li>ฝึกสหกิจศึกษา ( ระยะเวลา 4 เดือน )</li>
                    <li>พัฒนาระบบบริหารจัดการข้อมูลภายในองค์กร เครื่องมือที่ใช้ Next.js และ .NET </li>
                    <li>ทำงานร่วมกับทีม Design</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Featured Projects</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            <Card className="p-6 flex flex-col bg-white border-2 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="mb-4">
                <AutoImageSlider
                  images={[
                    "/assets/loginpage.png",
                    "/assets/pre-edoc.png",
                    "/assets/DashboardAddmin.png"
                  ]}
                />

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Data preparation for Electronic Document System
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  ระบบเตรียมข้อมูลสำหรับป้อนเข้าสู่ระบบเอกสารอิเล็กทรอนิกส์
                  ช่วยลดปัญหาเอกสารตกหล่น พร้อมระบบแจ้งเตือนแบบ Real-time
                  และสามารถตรวจสอบสถานะและประวัติการส่งเอกสารย้อนหลังได้
                </p>

                <div className="mb-4">
                  <Badge className="text-xs bg-green-100 text-green-700 border border-green-300">
                    ✅ Registered Patent No. 449714 – Thailand
                  </Badge>
                </div>


              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-xs bg-primary/10 text-primary border border-primary/30">React</Badge>
                  <Badge className="text-xs bg-primary/10 text-primary border border-primary/30">Node.js</Badge>
                  <Badge className="text-xs bg-primary/10 text-primary border border-primary/30">MySQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-2 shadow-sm bg-transparent" asChild>
                    <a href="https://github.com/642021163/system_Pre-Edoc.git" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="http://localhost:3001/" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 flex flex-col bg-white border-2 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="mb-4">
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden shadow-md relative">
                  <Image
                    src="/assets/dashboard-imac.png"
                    alt="Dashboard system"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  Internal Corporate Information Management System
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  ระบบบริหารจัดการข้อมูลภายในองค์กร
                  มาพร้อม Dashboard สำหรับแสดงข้อมูลแบบ Real-time และสถิติสำคัญ
                  เพื่อช่วยให้ผู้ใช้งานเข้าถึงข้อมูลและสามารถตัดสินใจได้อย่างมีประสิทธิภาพมากขึ้น
                </p>

              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="text-xs bg-accent/10 text-accent border border-accent/30">Next.js</Badge>
                  <Badge className="text-xs bg-accent/10 text-accent border border-accent/30">.NET</Badge>
                  <Badge className="text-xs bg-accent/10 text-accent border border-accent/30">Ant Design</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 border-2 shadow-sm bg-transparent" asChild>
                    <a href="#" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <a href="#" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl p-12 shadow-2xl border-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              หากมีคำถามใดๆ สามารถติดต่อผมได้ตามช่องทางด้านล่างนี้
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="mailto:akkarachai003@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  akkarachai003@gmail.com
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 shadow-md hover:shadow-lg transition-all bg-transparent"
                asChild
              >
                <a
                  href="https://github.com/642021163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 shadow-md hover:shadow-lg transition-all bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/akkarachai-jaitrong-036a07363/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 bg-white/80 backdrop-blur-lg shadow-lg">
        <div className="container max-w-6xl mx-auto py-8 px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} akkarachai003@gmail.com{" "}

          </p>
        </div>
      </footer>
    </div>
  )
}
