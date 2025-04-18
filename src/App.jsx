import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboard2Data, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import {
  FaQuoteRight,
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaPhone,
  FaSearchLocation,
  FaDev,
  FaJava,
  FaReact,
  FaUserGraduate,
  FaProjectDiagram,
  FaLaptopCode,
  FaPaperclip,
  FaDownload,
  FaLink,
  FaBriefcase,
} from "react-icons/fa";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { motion, useAnimation, useInView } from "framer-motion";
import AOS from "aos";
import { CgWebsite } from "react-icons/cg";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "aos/dist/aos.css";
import { MdSettings, MdNightlight, MdOutlineLightMode } from "react-icons/md";
const cvFile = "../cv.pdf";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mode = () => {
    alert("mode");
  };
  const container = useRef(null);
  const inView = useInView(container, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView]);

  const variant1 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* banner*/}
      <section
        id="home"
        className="bg-gray-800 dark:bg-gray-300  min-h-screen pb-4 w-full border-b border-white"
      >
        <div className="fixed top-0 w-full z-50">
          <div className="mx-auto">
            <div
              className="w-full bg-black/10 h-[60px]
              backdrop-blur-2xl mx-auto px-5 md:px-30 sm:px-20  flex items-center justify-between text-white"
            >
              <div>
                <Link
                  to="home"
                  activeClass="bg-orange-500 rounded-full"
                  smooth={true}
                  spy={true}
                >
                  {/**<img src='/image/logo.jpg' className='w-[40px] h-[40px] rounded-full' alt="logo"/> **/}
                  <div className="">
                    <h3>
                      <span className="font-extrabold text-3xl shadow-zinc-800 border-orange-500 border-b-2 ">
                        T
                      </span>
                      endr
                      <span className="font-extrabold text-3xl shadow-zinc-800">
                        Y
                      </span>
                      .
                    </h3>
                  </div>
                </Link>
              </div>
              <div>
                <div className="bg-orange-500 h-6 w-10 rounded flex items-center justify-end pr-1">
                  <div className="bg-purple-600 h-4 w-5 rounded"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? (
                    <MdOutlineLightMode size={25} />
                  ) : (
                    <MdNightlight size={25} />
                  )}
                </div>
                <a href={cvFile}>
                  <button className="p-1 rounded border border-white  flex items-center gap-2">
                    <FaDownload size={10} /> <span>cv</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white dark:text-gray-800">
          <div className="banner pt-20">
            <div className="px-1 sm:px-40">
              {/**Anarana */}
              <div className="lg:flex lg:justify-between">
                <motion.div
                  variants={variant1}
                  initial="hidden"
                  animate="show"
                  className="gauche w-full"
                >
                  <div className="mb-4">
                    <div>
                      <p className="font-secondary text-sm mb-3">
                        je m'appelle
                      </p>
                    </div>
                    <span className="text-orange-500 tetx-sm bg-white dark:bg-gray-700 p-1 rounded-full font-bold">
                      Mr
                    </span>
                    <motion.h2
                      variants={variant1}
                      className="text-2xl mx-auto sm:text-6xl font-bold sm:mb-4 mt-4"
                    >
                      {" "}
                      RAFANOMEZANA
                    </motion.h2>
                    <motion.h3 variants={variant1} className="sm:text-6xl">
                      <span className="font-bold text-orange-500">T</span>
                      endry <span className="font-bold text-orange-500">M</span>
                      ahery
                    </motion.h3>
                  </div>
                  {/**Presenetation */}
                  <div className="">
                    <div className="flex flex-row">
                      <div>
                        <motion.h5
                          variants={variant1}
                          className="sm:text-4xl mb-4"
                        >
                          Développeur{" "}
                          <span className="text-stone-400 dark:text-stone-800">
                            <Typewriter
                              words={[
                                "php(Symfony)",
                                "php(Laravel)",
                                "javascript(ReactJs)",
                              ]}
                              loop={Infinity}
                            />
                          </span>
                          <span>
                            <Cursor />
                          </span>
                        </motion.h5>

                        <motion.div
                          variants={variant1}
                          className="dark:bg-gray-400 p-4 border  rounded-xl"
                        >
                          <div className="dark:text-gray-800">
                            <FaQuoteRight />
                          </div>
                          <h5 className="mt-4 dark:text-gray-800">
                            Je suis un développeur junior enthousiaste et
                            déterminé.
                          </h5>
                        </motion.div>
                        {/**icons */}
                        <motion.div
                          variants={variant1}
                          className="mt-4 flex justify-center sm:flex sm:justify-start gap-5 mb-6"
                        >
                          <div className="border p-2 dark:border-gray-800 rounded-full text-2xl hover:bg-blue-500">
                            <a href="html">
                              <FaFacebookSquare />
                            </a>
                          </div>
                          <div className="border p-2 dark:border-gray-800 rounded-full text-2xl hover:bg-blue-700">
                            <a href="https://www.linkedin.com/in/TendryMahery/">
                              <FaLinkedin />
                            </a>
                          </div>
                          <div className="border p-2 dark:border-gray-800 rounded-full text-2xl hover:bg-black">
                            <a href="https://github.com/TendryMahery">
                              <FaGithub />
                            </a>
                          </div>
                        </motion.div>
                        {/**button */}
                        <motion.div
                          variants={variant1}
                          className="flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-4"
                        >
                          <div className="dark:text-white">
                            <button className="bg-orange-500 px-10 lg:px-18 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-800 transition-all duration-100">
                              <FaPhone />
                              <span className="">Contactez-moi</span>
                            </button>
                          </div>
                          <div className="dark:text-white">
                            <button className="bg-purple-600 px-10 lg:px-18 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-800 transition-all duration-100">
                              <FaSearchLocation />
                              <span className="">Recrutez-moi</span>
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={variant1}
                  initial="hidden"
                  animate="show"
                  className="droite flex justify-center items-center"
                >
                  <div className="mt-18">
                    <h4 className="text-center animate-bounce">Hello😊</h4>
                    <motion.div
                      variants={variant1}
                      className="rounded-xl shadow-2xl border bg-purple-500 dark:bg-orange-500 border-stone-50/30"
                    >
                      <img
                        src="../image/tendry.png"
                        className="p-6 h-96 object-cover"
                        alt=""
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* nav*/}
      <section
        id="nav"
        className="nav fixed bottom-2 w-full overflow-hidden z-50"
      >
        <div className="mx-auto">
          <div
            className=" bg-black/20 h-[60px]
             backdrop-blur-3xl rounded-full max-w-[460px] mx-auto px-4  flex items-center justify-between text-white text-xl"
          >
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="home"
              className="cursor-pointer w-[40px] h-[40px] flex items-center  justify-center"
            >
              <BiHomeAlt />
            </Link>
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="about"
              className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="service"
              className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
            >
              <BsClipboard2Data />
            </Link>
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="competence"
              className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
            >
              <FaDev />
            </Link>
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="work"
              className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
            <Link
              activeClass="bg-orange-500 rounded-full"
              smooth={true}
              spy={true}
              to="contact"
              className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
            >
              <BsChatSquare />
            </Link>
          </div>
        </div>
      </section>
      {/* about*/}

      <section
        id="about"
        className="text-white about bg-gray-800 dark:bg-gray-300 dark:text-gray-800 min-h-screen relative border-b"
      >
        <div className="">
          <div className="p-5 top-0 ">
            <div className="pt-10">
              <div>
                <div ref={container} data-aos="fade-up" className="mb-6">
                  <h1 className="text-center font-bold">À propos de moi</h1>
                  <div className="w-16 mx-auto border-t-2 border-orange-600 mt-2"></div>
                </div>
              </div>
              <div className="flex justify-center mb-2   rounded-full" data-aos="fade-up">
                <div className="bg-purple-600 p-2 dark:text-white rounded-full">
                  <FaUserGraduate size={35} />
                </div>
              </div>

              <div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-2 md:text-end" data-aos="fade-right">
                      <time className="font-mono italic">2022-2023</time>
                      <div className="text-lg font-black">Master II</div>
                      Diplôme de Master II en cours dans le parcours
                      Électronique, Systèmes Informatiques et Intelligence
                      Artificielle (ESIIA)
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end md:mb-2" data-aos="fade-left">
                      <time className="font-mono italic">2021-2022</time>
                      <div className="text-lg font-black">Master I</div>
                      Études supérieures en 4e année à l'Institut Supérieur
                      Polytechnique de Madagascar
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start mb-2 md:text-end" data-aos="fade-right">
                      <time className="font-mono italic">2018-2020</time>
                      <div className="text-lg font-black">Licence</div>
                      Diplôme de licence dans le parcours Électronique, Systèmes
                      Informatiques et Intelligence Artificielle (ESIIA)
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle text-orange-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end" data-aos="fade-left">
                      <time className="font-mono italic">
                        2014-2016 Lycée Technique Professionnel d'Alarobia
                      </time>
                      <div className="text-lg font-black">Diplôme de BACC</div>
                      Diplôme de baccalauréat technique industriel, spécialité
                      Électronique
                      <div className="text-lg font-black">Diplôme de BEP</div>
                      Diplôme de Brevet d'Études Professionnelles en
                      Télécommunication, spécialité Électronique
                    </div>
                    <hr />
                  </li>
                </ul>

                <div className="mt-4">
                  <div className="flex justify-center mb-2   rounded-full">
                    <div className="bg-purple-600 dark:text-white p-2 rounded-full">
                      <FaBriefcase size={35} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="">
                    <div className=" grid grid-cols-2 gap-4">
                      <div data-aos="zoom-in" className="col-span-1 card card-side dark:bg-white bg-gray-900 hover:bg-gray-600   shadow-xl max-w-sm border border-gray-400">
                        <div className="card-body">
                          <h2 className="card-title">
                            💻Février 2025 - Aujourd’hui
                          </h2>
                          <p>
                            Stagiaire développeur full stack chez{" "}
                            <span className="text-blue-500">Poem-group</span>{" "}
                            <strong>(React & Laravel)</strong>
                          </p>
                        </div>
                      </div>
                      <div data-aos="zoom-in-up" className="col-span-1 card card-side dark:bg-white bg-gray-900 hover:bg-gray-600   shadow-xl max-w-sm border border-gray-400">
                        <div className="card-body">
                          <h2 className="card-title">💻Juin 2024-Aout 2024</h2>
                          <p>
                            Stagiaire développeur No Code chez{" "}
                            <span className="text-blue-500">
                              Rantsa Communication{" "}
                            </span>{" "}
                            <strong>(Flutterflow, Hasura, Xano)</strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div data-aos="zoom-in" className="col-span-1 card card-side dark:bg-white bg-gray-900 hover:bg-gray-600   shadow-xl max-w-sm border border-gray-400">
                        <div className="card-body">
                          <h2 className="card-title">💻Avril 2024-Juin 2024</h2>
                          <p>
                            Stagiaire développeur web fullstack chez{" "}
                            <span className="text-blue-500">
                              Eqima Solution{" "}
                            </span>{" "}
                            <strong>(Spring Boot)</strong>{" "}
                          </p>
                        </div>
                      </div>
                      <div data-aos="zoom-in-up" className="col-span-1 card card-side dark:bg-white bg-gray-900 hover:bg-gray-600  shadow-xl max-w-sm border border-gray-400">
                        <div className="card-body">
                          <h2 className="card-title">💻Mars 2021-Aout 2021</h2>
                          <p>
                            Stagiaire développeur et technicien réseau au sein
                            du{" "}
                            <span className="text-blue-500">
                              {" "}
                              Ministère de l'Agriculture, de l'Élevage et de la
                              Pêche{" "}
                            </span>{" "}
                            <strong>(Django)</strong>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service*/}
      <section
        id="service"
        className="service border-b border-white  text-white bg-gray-800 dark:bg-gray-300 relative min-h-screen w-full"
      >
        <div className="p-5 ">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="pt-10 mb-6"
          >
            <h1 className="text-center font-bold dark:text-gray-800">
              Mes services
            </h1>
            <div className="w-16 mx-auto border-t-2 border-orange-600 mt-2"></div>
          </div>
          <div className="text-center md:mx-80">
            <p
              data-aos="zoom-in-down"
              className="font-semibold text-sm text-gray-400 dark:text-gray-800"
            >
              En tant que développeur web junior, je propose une gamme de
              services conçus pour aider les entreprises et les particuliers à
              atteindre leurs objectifs numériques. Voici un aperçu des services
              que je propose :
            </p>
          </div>{" "}
          <br />
          <div className="mx-auto md:mx-72 sm:mx-20 grid gap-3 md:grid-cols-12">
            <div data-aos="zoom-in-down" className="sary sy soratra col-span-6">
              <div className="h-32 shadow-2xl bg-purple-600/20 dark:bg-purple-600 rounded-xl">
                <div>
                  <div className="flex justify-between p-4">
                    <h6 className="bg-orange-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <CgWebsite />
                    </h6>

                    <h6 className="bg-purple-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <HiArrowTopRightOnSquare />{" "}
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Développement de Sites Web💻</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" className="sary sy soratra col-span-6">
              <div className="h-32 shadow-2xl w-full bg-purple-600/20 dark:bg-purple-600 rounded-xl">
                <div>
                  <div className="flex justify-between p-4 text-center">
                    <h6 className="bg-orange-500 h-10 w-10 rounded-full flex justify-center items-center">
                      {" "}
                      <MdSettings />{" "}
                    </h6>
                    <h6 className="bg-purple-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <HiArrowTopRightOnSquare />{" "}
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Maintenance et Support⚙</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="sary sy soratra col-span-6">
              <div className="h-32 shadow-2xl w-full bg-purple-600/20 dark:bg-purple-600 rounded-xl">
                <div>
                  <div className="flex justify-between p-4">
                    <h6 className="bg-orange-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <FaProjectDiagram />{" "}
                    </h6>
                    <h6 className="bg-purple-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <HiArrowTopRightOnSquare />
                    </h6>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>Projets Personnalisés🖥</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" className="sary sy soratra col-span-6">
              <div className="h-32 shadow-2xl w-full bg-purple-600/20 dark:bg-purple-600 rounded-xl">
                <div>
                  <div className="flex justify-between p-4">
                    <h6 className="bg-orange-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <FaLaptopCode />
                    </h6>
                    <h6 className="bg-purple-500 h-10 w-10 rounded-full flex justify-center items-center">
                      <HiArrowTopRightOnSquare />
                    </h6>
                  </div>
                  <div className="flex justify-center items-center h-auto">
                    <p>Développement Front-End & Back-End 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* competence*/}
      <section
        id="competence"
        className="service border-b border-white text-white bg-gray-800 dark:bg-gray-300 relative min-h-screen w-full"
      >
        <div className="p-5 ">
          <div data-aos="zoom-in-up" className="pt-10 mb-6">
            <h1 className="text-center font-bold dark:text-gray-800">
              Mes compétences
            </h1>
            <div className="w-16 mx-auto border-t-2 border-orange-600 mt-2"></div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="mx-auto md:mx-32 grid md:grid-cols-12 gap-4 p-4"
          >
            <div className="col-span-6">
              <div className="sm:flex sm:justify-center sm:gap-2  text-sm">
                <div className="border border-stone-50/30 bg-orange-400  rounded mb-2 p-1">
                  <i>HTML</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-blue-500  rounded mb-2 p-1">
                  <i>CSS</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-yellow-400  rounded mb-2 p-1">
                  <i>JAVASCRIPT</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-purple-500  rounded mb-2 p-1">
                  <i>PHP</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-gray-400  rounded mb-2 p-1">
                  <i>MYSQL</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-blue-800  rounded mb-2 p-1">
                  <i>PYTHON</i>{" "}
                </div>
                <div className="border border-stone-50/30 bg-red-400  rounded mb-2 p-1">
                  <i>JAVA</i>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex justify-center gap-2 text-sm">
                <div className="border border-stone-50/30 bg-gray-900 rounded p-1 text-sm">
                  TECHNOLOGIES
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="mx-auto md:mx-32 grid md:grid-cols-12 gap-4">
                <div
                  className="col-span-6 group overflow-hidden"
                  data-aos="zoom-in"
                >
                  <div className="group-hover:bg-black/70 absolute h-full w-full z-40 transition-all duration-500"></div>
                  <img
                    src="../image/mac.jpg"
                    alt=""
                    className="rounded-xl h-auto object-cover shadow-2xl group-hover:scale-125 transition-all duration-500"
                  />
                </div>
                <div className="competence col-span-6">
                  <div className="">
                    <div className="grid gap-1.5 md:grid-cols-6">
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div data-aos="zoom-in">
                          <div className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center">
                            <img
                              src="../logo/vue.png"
                              alt=""
                              className="h-14 w-14"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/react.png"
                            alt=""
                            className="h-14 w-14"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/django.png"
                            alt=""
                            className="h-14 w-14"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/symfony.png"
                            alt=""
                            className="h-14 w-14"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/laravel.png"
                            alt=""
                            className="h-14 w-14"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/spring.png"
                            alt=""
                            className="h-14 w-14"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center gap-4 items-center"
                        >
                          <img
                            src="../logo/bootstrap.png"
                            alt=""
                            className="h-10 w-10"
                          />
                          <img
                            src="../logo/tailwind.jfif"
                            alt=""
                            className="h-10 w-10"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center items-center"
                        >
                          <img
                            src="../logo/api.png"
                            alt=""
                            className="h-14 w-14 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="col-span-2 hover:scale-95 transition-all duration-100">
                        <div
                          data-aos="zoom-in"
                          className="bg-purple-500 h-28 min-w-28 rounded-xl flex justify-center gap-4 items-center"
                        >
                          <img
                            src="../logo/win.png"
                            alt=""
                            className="h-10 w-10"
                          />
                          <img
                            src="../logo/linux.png"
                            alt=""
                            className="h-10 w-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* work*/}
      <section
        id="work"
        className="service border-b pb-8 border-white text-white bg-gray-800 dark:bg-gray-300 relative min-h-screen w-full"
      >
        <div className="p-5 ">
          <div
            className="pt-10 mb-6"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="text-center font-bold dark:text-gray-800">
              Portfolio
            </h1>
            <div className="w-16 mx-auto border-t-2 border-orange-600 mt-2"></div>
          </div>
          <div className="text-center">
            <h4 className="">Projets</h4>
          </div>
        </div>

        <div className="grid md:grid-cols-8 gap-4">
          <div
            data-aos="fade-down"
            className="md:col-span-2 border border-stone-50/30 dark:border-gray-700 rounded-xl h-auto w-auto md:max-w-60 md:mx-10"
          >
            <div className="flex justify-center mt-2">
              <div className="h-8 w-8 bg-orange-500 rounded-full flex justify-center items-center">
                <FaPaperclip />
              </div>
            </div>
            <p className="text-sm p-4 dark:text-gray-800">
              Je suis particulièrement attiré par la conception d'interfaces
              utilisateur, le développement d'applications web interactives,
              l'optimisation des performances. Mon objectif est de créer des
              solutions qui non seulement répondent aux besoins des
              utilisateurs, mais les surpassent en termes de fonctionnalité et
              d'expérience.
            </p>
            <div className="flex justify-center">
              <button className="bg-purple-500 px-6 py-2 rounded-xl text-sm hover:scale-100 mb-2">
                bouton
              </button>
            </div>
          </div>

          <div className=" md:col-span-6 md:flex px-2">
            <img
              data-aos="zoom-in"
              src="../projet/poem.jpg"
              alt=""
              className="object-cover group-hover:scale-125 transition-all duration-500  max-h-[380px] w-auto rounded-xl"
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="zoom-in"
                className="border-purple-500 min-h-40 -mt-10 max-w-lg md:mt-0 md:w-auto bg-orange-500 md:-ml-40 rounded-xl p-2 text-sm"
              >
                <div>
                  <h5 className="p-2 text-center">
                    Poem-group : Site Poem-proup administrable
                  </h5>
                  <p className="text-sm mb-1">
                    <span className="font-bold">Technologie :</span>{" "}
                    <span className="bg-blue-500 p-0.5 rounded">ReactJs</span>{" "}
                    <span className="bg-white p-0.5 text-blue-500 rounded">
                      Tailwind css
                    </span>
                    <span className="bg-rose-600 p-0.5 rounded">Laravel</span>{" "}
                    <span className="flex items-center font-extralight">
                      <FaLink />
                      <a href="https://site.poemguide.com">
                        {" "}
                        Lien: site.poemguide.com
                      </a>{" "}
                    </span>{" "}
                  </p>
                  <span className="bg-gray-700 text-white p-0.5 rounded cursor-pointer">
                    <a href="">github</a>{" "}
                  </span>
                </div>
                <p>
                  Il s’agit d’un site web dynamique et administrable, permettant à l’équipe de gérer facilement
                  les contenus sans connaissances techniques. L’interface
                  d’administration sécurisée offre un accès complet à la gestion
                  des sections clés du site : services, actualités, équipe,
                  portfolio, formulaires de contact, et bien plus encore.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 "></div>
          <div className=" md:col-span-6 md:flex px-2">
            <img
              data-aos="zoom-in"
              src="../projet/owayzz.jpg"
              alt=""
              className="object-cover max-h-[380px] w-auto  rounded-xl"
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="zoom-in"
                className="border-purple-500 min-h-40 -mt-10 max-w-lg md:mt-0 md:w-auto bg-orange-500 md:-ml-40 rounded-xl p-2 text-sm"
              >
                <div>
                  <h5 className="p-2 text-center">
                    Owayzz : Projet de vanilla pay
                  </h5>
                  <p className="text-sm">
                    <span className="font-bold">Technologie :</span>{" "}
                    <span className="bg-blue-500 p-0.5 rounded">ReactJs</span>{" "}
                    <span className="bg-white p-0.5 text-blue-500 rounded">
                      Tailwind css
                    </span>{" "}
                    <span className="flex items-center font-extralight">
                      <FaLink />
                      <a href="https://owayzz.vercel.app/">
                        {" "}
                        Lien: owayzz.vercel.app
                      </a>{" "}
                    </span>
                  </p>
                  <span className="bg-gray-700 text-white p-0.5 rounded cursor-pointer">
                    <a href="https://github.com/TendryMahery/Owayzz">github</a>{" "}
                  </span>
                </div>
                <p>
                  Ce projet consiste en la refonte du site Owayzz, mettant en
                  avant l'équipe de Vanilla Pay. L’objectif était de moderniser
                  l’interface et d'améliorer l’expérience utilisateur tout en
                  reflétant l’esprit collaboratif et l’expertise de l’équipe.
                  J'ai intégré un design attrayant et fonctionnel, facilitant la
                  navigation et la présentation des membres de l'équipe. Ce
                  travail illustre ma capacité à allier esthétique et ergonomie
                  pour valoriser une marque et ses valeurs.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 "></div>
          <div className=" md:col-span-6 md:flex px-2">
            <img
              data-aos="zoom-in"
              src="../projet/portfolio.jpg"
              alt=""
              className="object-cover max-h-[380px] w-auto  rounded-xl"
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="zoom-in"
                className="border-purple-500 min-h-40 -mt-10 max-w-lg md:mt-0 md:w-auto bg-orange-500 md:-ml-40 rounded-xl p-2 text-sm"
              >
                <div>
                  <h5 className="p-2 text-center">
                    Prototype portfolio front-end
                  </h5>
                  <p className="text-sm">
                    <span className="font-bold">Technologie :</span>{" "}
                    <span className="bg-blue-500 p-0.5 rounded">ReactJs</span>{" "}
                    <span className="bg-white p-0.5 text-blue-500 rounded">
                      Tailwind css
                    </span>{" "}
                    <span className="flex items-center font-extralight">
                      <FaLink />
                      <a href="https://prototype-portfolio.vercel.app/">
                        {" "}
                        Lien: prototype-portfolio.vercel.app/
                      </a>{" "}
                    </span>
                  </p>
                  <span className="bg-gray-700 text-white p-0.5 rounded cursor-pointer">
                    <a href="https://github.com/TendryMahery/prototype-portfolio">
                      github
                    </a>{" "}
                  </span>
                </div>
                <p>
                  Ce projet présente un prototype de portfolio qui met en
                  lumière mes compétences en design front-end. Le design est
                  pensé pour refléter ma créativité tout en mettant en avant mes
                  réalisations de manière claire et accessible
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 "></div>
          <div className=" md:col-span-6 md:flex px-2">
            <img
              data-aos="zoom-in"
              src="../projet/e-commerce.jpg"
              alt=""
              className="object-cover max-h-[380px] w-auto rounded-xl"
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="zoom-in"
                className="border-purple-500 min-h-40 -mt-10 max-w-lg md:mt-0 md:w-auto bg-orange-500 md:-ml-40 rounded-xl p-2 text-sm"
              >
                <div>
                  <h5 className="p-2 text-center">E-commerce projet perso</h5>
                  <p className="text-sm">
                    <span className="font-bold">Technologie :</span>{" "}
                    <span className="bg-gray-800 p-0.5 rounded text-white">
                      Symfony
                    </span>{" "}
                    <span className="bg-white p-0.5 text-blue-500 rounded">
                      Tailwind css
                    </span>{" "}
                  </p>
                  <span className="bg-gray-700 text-white p-0.5 rounded cursor-pointer">
                    <a href="https://github.com/TendryMahery/e-commerceSymfony">
                      github
                    </a>{" "}
                  </span>
                </div>
                <p>
                  Ce projet e-commerce est conçu pour offrir une expérience
                  utilisateur fluide et intuitive. Il inclut des fonctionnalités
                  robustes pour gérer les utilisateurs et les produits,
                  garantissant une administration efficace. La structure de la
                  base de données est organisée selon une méthode MERISE,
                  facilitant ainsi la gestion des données et l'évolutivité de
                  l'application. Ce projet illustre ma capacité à créer des
                  solutions complètes et fonctionnelles dans le domaine du
                  commerce en ligne.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 "></div>
          <div className=" md:col-span-6 md:flex px-2">
            <img
              data-aos="zoom-in"
              src="../projet/hotel.jpg"
              alt=""
              className="object-cover max-h-[380px] w-auto rounded-xl"
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="zoom-in"
                className="border-purple-500 min-h-40 -mt-10 max-w-lg md:mt-0 md:w-auto bg-orange-500 md:-ml-40 rounded-xl p-2 text-sm"
              >
                <div>
                  <h5 className="p-2 text-center">Gestion de chambre</h5>
                  <p className="text-sm">
                    <span className="font-bold">Technologie :</span>{" "}
                    <span className="bg-gray-800 p-0.5 rounded text-white">
                      Symfony
                    </span>{" "}
                    <span className="bg-white p-0.5 text-blue-500 rounded">
                      Tailwind css
                    </span>{" "}
                  </p>
                  <span className="bg-gray-700 text-white p-0.5 rounded cursor-pointer">
                    <a href="https://github.com/TendryMahery/chambre_hotel_symfony">
                      github
                    </a>{" "}
                  </span>
                </div>
                <p>
                  Ce projet de gestion des chambres d'hôtel permet une
                  administration efficace des réservations et des occupants. Il
                  inclut des fonctionnalités pour gérer les chambres, ajouter
                  des personnes dans chaque chambre, ainsi que rechercher des
                  occupants rapidement. L'interface intuitive facilite la
                  navigation et le suivi des réservations, garantissant une
                  expérience fluide tant pour le personnel que pour les clients.
                  Ce projet met en avant mes compétences en développement
                  d'applications dédiées à l'hôtellerie, visant à améliorer la
                  gestion opérationnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact*/}
      <section
        id="contact"
        className="service border-b border-white text-white bg-gray-800 dark:bg-gray-400 relative min-h-screen w-full"
      >
        <div className="p-5 ">
          <div
            className="pt-10 mb-6"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="text-center font-bold dark:text-gray-800">
              Contact
            </h1>
            <div className="w-16 mx-auto border-t-2 border-orange-600 mt-2"></div>
          </div>

          <div>
            <div className="">
              <div className="md:mx-80 mb-8 mx-auto">
                <p className="text-sm dark:text-gray-800">
                  Si vous êtes intéressé par l’un de ces services ou si vous
                  avez un projet spécifique en tête, n’hésitez pas à me
                  contacter pour discuter de vos besoins. Je suis passionné par
                  le développement web et prêt à apporter mon expertise pour
                  vous aider à réaliser vos objectifs numériques.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-4 md:mx-52 mx-auto">
              <div className="gauche md:col-span-6 space-y-4">
                <div className="Gmail border border-stone-50/30 rounded-xl p-2 bg-gray-600 w-auto">
                  <div className="flex justify-between">
                    <img
                      src="../logo/gmail.png"
                      className="object-cover w-11 h-11  rounded-full"
                      alt=""
                    />
                    <p className="bg-gray-800 p-1.5 rounded-xl">Gmail</p>
                  </div>
                  <div className="md:text-center">
                    <p className="text-sm">
                      rafanomezanatendrymahery@gmail.com
                    </p>
                  </div>
                </div>
                <div className="Linkedin border border-stone-50/30 rounded-xl p-2 bg-gray-600 w-auto">
                  <div className="flex justify-between">
                    <img
                      src="../logo/linkedin.png"
                      className="object-cover w-11 h-11   rounded-full"
                      alt=""
                    />

                    <a href="https://www.linkedin.com/in/TendryMahery/">
                      <p className="bg-gray-800 p-1.5 rounded-xl cursor-pointer">
                        Linkedin
                      </p>
                    </a>
                  </div>
                  <div className="md:text-center">
                    <p>www.linkedin.com/in/TendryMahery/</p>
                  </div>
                </div>
                <div className="Github border border-stone-50/30 rounded-xl p-2 bg-gray-600 w-auto">
                  <div className="flex justify-between">
                    <img
                      src="../logo/github.png"
                      className="object-cover w-11 h-11   rounded-full"
                      alt=""
                    />

                    <a href="https://github.com/TendryMahery">
                      <p className="bg-gray-800 p-1.5 rounded-xl cursor-pointer">
                        Github
                      </p>
                    </a>
                  </div>
                  <div className="md:text-center">
                    <p>www.github.com/TendryMahery</p>
                  </div>
                </div>
              </div>
              <div className="droite md:col-span-6">
                <div>
                  <form action="">
                    <label
                      for="message"
                      class=" text-sm font-semibold leading-6 text-gray-400"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      autocomplete="family-name"
                      class="bg-gray-700 block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    <label
                      for="message"
                      class="block text-sm font-semibold leading-6 text-gray-400"
                    >
                      Mail
                    </label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      autocomplete="family-name"
                      class="bg-gray-700 block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetsm:text-sm sm:leading-6"
                    />
                    <label
                      for="message"
                      class="block text-sm font-semibold leading-6 text-gray-400"
                    >
                      Message
                    </label>

                    <textarea
                      name="message"
                      id="message"
                      rows="3.5"
                      class="bg-gray-700 w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    ></textarea>
                    <button
                      type="submit"
                      class="block w-full rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Envoyer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer h-32 mt-8 mb-8 flex justify-center">
            <footer class="bg-gray-800 dark:bg-gray-400 text-white dark:text-gray-800 py-4 text-center">
              <div class="mb-2">
                <p class="m-0">
                  Contactez-moi :
                  <a
                    href="mailto:tonemail@example.com"
                    class="text-yellow-400 hover:underline"
                  >
                    +261349664223 ou 0327585867
                  </a>
                </p>
              </div>
              <div>
                <p class="m-0">
                  &copy; 2024 RAFANOMEZANA Tendry Mahery. Tous droits réservés.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
