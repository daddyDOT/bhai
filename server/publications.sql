-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 24, 2024 at 10:34 PM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bhaaas`
--

-- --------------------------------------------------------

--
-- Table structure for table `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `subtitle` text DEFAULT NULL,
  `authors` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `date` text DEFAULT NULL,
  `cite_number` int(11) NOT NULL DEFAULT 0,
  `bionic_description` text DEFAULT NULL,
  `pdf_source` text DEFAULT NULL,
  `publication_id` text DEFAULT NULL,
  `categories` text DEFAULT NULL,
  `mermaid_code` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publications`
--

INSERT INTO `publications` (`id`, `title`, `subtitle`, `authors`, `description`, `date`, `cite_number`, `bionic_description`, `pdf_source`, `publication_id`, `categories`, `mermaid_code`) VALUES
(1, 'Comparison of mechanical and microstructure properties of tungsten alloys for special purposes', 'Sustainable Engineering and Innovation', 'A. Imamović,, Šaban Žuna,, Ensar Mulaosmanović,, Zijad Alibašić,, B. Kosec', 'Tungsten belongs to group of refractory metal that possess extraordinary resistance to heat and wear and it is the heaviest engineering material. Because of its properties tungsten is used for special purposes.\nThis paper presents the results of mechanical and microstructure research on the example of the characteristic heavy tungsten alloys 91W-6Ni-1.8Fe-1Co and 93W-5Ni-1.6Fe-0.3Co with different Ni/Co ratios.\nThe proper Ni/Co ratio is important to obtain a favorable microstructure and mechanical properties of these materials. The distribution of the W, Ni, Co and Fe elements in tungsten phase and binder phase, which can influence on mechanical properties of tungsten alloys.\nThe SEM analysis and mechanical results show that the alloy, which has Ni/Co within the given limits,  posses a finer microstructure and better mechanical properties that is very important for the maintenance of the quality of tungsten alloys for special purposes.', '16. 12. 2022.', 1, NULL, 'https://sei.ardascience.com/index.php/journal/article/download/180/159', '510554aa0fc47912ae9481389ea818f3b2e50728', '[\"N/A\"]', NULL),
(2, 'Sedentary habits and physical health of secondary school students in online classes during the pandemic COVID-19', 'Journal of Health Science', 'Nejra Ćibo,, Hana Omerović,, A. Žilić,, Z. Obradović,, Đemil Omerović,, E. Tanović', 'Introduction: Due to the declaration of a state of emergency in the country due to the pandemic COVID-19, the education system was changed to online teaching. The implementation of distance education has led to an increased sedentary lifestyle, decreased physical activity, and increased use of information technologies. The purpose of this study was to analyze the sedentary habits of female students and their physical health during a period of restricted physical activity with reference to online instruction.Methods: The research was conducted among the first to third grade students of Secondary School Konjic, 45 days after the implementation of online instruction. Students of general secondary school (N = 83), business school (N = 68), and medical school (N = 55) completed the questionnaire after their parents gave their consent.Results: The total number of students surveyed was 206, with students from all three schools studied participating in online classes for up to 4 hours. Medical school students spend more than 3 hours completing schoolwork, while students at the other two schools spend up to 2 hours. Statistically significant differences in non-use of information technology during free time exist among medical students (p = 0.00). Female medical students reported daily symptoms such as headaches, reactions to the visual organ (dry eye, redness, and tearing), and pain in the fist area (twitching, cramps, and tingling). Statistically significant differences in the occurrence of pain in the upper back and chest girdle occurred in students of business school (p = 0.00) and general high school (p = 0.00) compared to medical students.Conclusion: Medical students who use information technology the most reported headaches, pain in the fist area, and frequent reactions to the sense of sight (dry eye, lacrimation, and redness). Assuming inappropriate positions during prolonged use of technology may contribute to poor posture.', '20. 4. 2022.', 1, NULL, 'https://www.jhsci.ba/ojs/index.php/jhsci/article/download/1648/806', '7b9bc02bae66cd6a5e926e5e74f226dc3e02c507', '[\"Medicine\"]', NULL),
(3, 'Development and Validation of the Household Food Safety Questionnaire', '', 'Daniel Maestro,, Arzija Pašalić,, S. Šegalo,, A. Žilić', 'Health problems associated with the consumption of foods that do not meet the hygiene and epidemiological standards are not of recent date and have been occurring continuously throughout the history of human existence. The incidence of food poisoning and foodborne transmissible diseases is three times more common in-home kitchens and households. Restaurant poisoning generally involves a larger number of people, whereas a home-based one involves individuals or a small number of people, so its likelihood of identification by the competent authority or public health organizations and services are significantly smaller. The development of the household food safety questionnaire (HFSQ) for the general population went through five phases (preparation of the questionnaire, distribution of the questionnaire to panelists and then the respondents, statistical analysis and the formation of the final version of the validated questionnaire). A total of 58 particles that formed the basis of the questionnaire were divided into four segments: demographic (10), knowledge (17), opinion (14) and food safety practice (17). Overall, the validity of the questionnaire in examining practice, knowledge and attitude was determined with Cronbach\'s alpha = 0.842. The total number of particles adequate for the questionnaire is 29 questions. This questionnaire is a good instrument for assessing the knowledge, attitudes and practices of food handlers in their households. Keywords— food safety, households, questionnaire, development and validation.', '2019.', 0, NULL, 'N/A', 'fea93c7eaf2e97722053917401322cb203c5424d', '[\"N/A\"]', NULL),
(4, 'Characteristics of salmonella food poisoning outbreaks in Canton Sarajevo in period from 2002 to 2011.', '', 'S. Balta,, Z. Obradović,, A. Žilić,, E. Mraković,, E. Pašté', '', '2012.', 1, NULL, 'N/A', 'a571bb7c8f709e461f845c5d9013a79d9cf1530c', '[\"Medicine\"]', NULL),
(5, 'Foodborne diseases in Canton Sarajevo.', '', 'Z. Obradović,, A. Obradovic,, S. Balta,, A. Žilić', '', '2012.', 0, NULL, 'N/A', 'd0fae96ccc519f564829f3aee83bccb47dc7c576', '[\"Medicine\"]', NULL),
(6, 'Implementing regulations from the field of protection of population from contagious diseases in Bosnia and Herzegovina and proposals for faster and more comprehensive regulation of disinfection, disinsectization and deratization activities in by-laws.', '', 'E. Pasic,, S. Balta,, A. Žilić,, E. Mraković', '', '2012.', 0, NULL, 'N/A', 'f8eff5c3fdd09728dff00c116998fa07376830f7', '[\"Medicine\"]', NULL),
(7, 'Epidemiological characterisics of gastrointestinal infectious diseases and viral hepatitis A in the Canton Sarajevo', '', 'Z. Obradović,, Arzija Pašalić,, A. Žilić', 'Introduction: Gastrointestinal infectious diseases are a group of frequent diseases in developing countries as a result of industrialization in food production and often consuming of the food in public places. In Bosnia and Herzegovina and in Canton Sarajevo these diseases are frequent. The aim of this work is to investigate epidemiological characteristics of the most often gastrointestinal infectious diseases in Canton Sarajevo (Enterocolitis acuta, Toxiinfectio alimentaris, Salmonellosis, Amoebiasis) compared with Viral Hepatitis A and to estimate the need for the implementation of vaccination against this disease.Methods: We used individual reports as well as monthly and annual bulletins about the movement of infectious diseases which are obligatory for reporting from the Epidemiology department of the Institute for public health in Canton Sarajevo. This work is a retrospective study, for the period 2005-2009. Descriptive- analytical method was used. In statistical processing we used mean, structure index and trend index.Results: The research showed that gastrointestinal infectious diseases are registered in a huge number in all the observed years. The most often was Enterocolitis acuta, and the rarest was Viral Hepatitis A. The diseases were mostly sporadic. Distinct seasonality and coherence with warm months in the year is expressed in Enterocolitis acuta and Intoxicatio alimentaris, while the other diseases are registered during the whole year.Conclusions: Incidence of gastrointestinal infectious diseases in Canton Sarajevo is high and we need to work intensively to improve sanitary conditions as the most eficient preventive measures. There is no justification for implementing of the vaccine against Viral hepatitis A.', '15. 4. 2011.', 1, NULL, 'https://www.jhsci.ba/ojs/index.php/jhsci/article/download/7/7', 'b46da2faec901c757c28881e83d1f83a970c8cfa', '[\"Medicine\"]', NULL),
(8, 'Microbiological composition of untreated water during different weather conditions', '', 'Adna Bešić,, Z. Obradović,, Arzija Pašalić,, A. Žilić', 'Introduction: Water can support the growth of different microorganisms which may result in contamination. Therefore, the microbiological examination is required for testing the hygienic probity of water. In the study of microbial composition of untreated, natural spring and mineral water differences in the presence and number of bacteria during the two periods, winter and summer, are detectable.Methods: In our study, we analyzed and compared the following parameters, specified in the Rulebook: total bacteria and total aerobic bacteria (ml/22 and 37°C), total Coliform bacteria and Coliforms of fecalorigin (MPN/100ml), fecal streptococci as Streptococcus faecalis  (MPN/100ml), Proteus spp (MPN/100ml), and Pseudomonas aeruginosa (MPN/100 ml) Sulphoreducing Clostridia (cfu / ml). The paper is a retrospective study in which we processed data related to the period of 2005-2009 year. While working, we used the descriptive-analytical comparative statistical treatment.Results: The obtained results show statistically significant differences in the microbial composition of untreated water in the two observed periods,Conclusions: Findings were consequence of different weather conditions in these periods, which imply a number of other variable factors.', '15. 9. 2011.', 0, NULL, 'N/A', 'ebc10c64904d7e1972d24a1cfad3f0c8dfef17b9', '[\"Medicine\"]', NULL),
(9, 'Politics and Foreign Involvement in Reforming the Health Care Systems of Former Socialist Countries', '', 'G. Žarković,, W. Satzinger', '', '1997.', 3, NULL, 'N/A', 'a17674507a4fcc0f089cf26e25bc77ae6e42bc4f', '[\"Political Science\"]', NULL),
(10, 'Alterations of cervical cytology and steroid contraceptive use.', 'International Journal of Epidemiology', 'G. Žarković', 'The alterations of cervical cytology in 3206 \'users\' of steroid contraceptives (SC) and 2394 \'non-users\' (controls) have been followed by means of five surveys for eight years. The alterations of cervical cytology have not differed significantly between the two groups seven years after the first examination, but have differed significantly between younger and older women in both groups. The incidence of progression to and regression from PAP III class cytology was more frequent than the prevalence, but again it did not differ significantly between users of SC and controls. In pairs of SC users and controls, matched by year of birth and presence of PAP III cytology, the users differed significantly from controls in the frequency of pregnancy, abortion and the circumcision of their husbands. The highly prevalent risk factor common to both groups was vaginal infection, including Trichomonas vaginalis. In conclusion the author offers some comments and raises questions and speculations based on the findings of this study about the nature of alterations of cervical cytology.', '1. 9. 1985.', 7, NULL, 'N/A', '0bfd54849777f66864cc76610a438d48532cab3e', '[\"Medicine\"]', NULL),
(11, 'The Modelling of National Health Systems in Planning for Increased Efficiency', '', 'G. Žarković', '', '1984.', 0, NULL, 'N/A', '597c9170f2ba6561d4b65fba5bfc86842d2531ba', '[\"Business\"]', NULL),
(12, '[The historical significance of the 1st Congress of the Partisan Physicians of the National Liberation Front of Croatia].', 'Liječnički vjesnik', 'G. Žarković', '', '1. 11. 1979.', 0, NULL, 'N/A', '0bc54907c4c43359dc3d0812a5277ddd8533d884', '[\"Political Science\"]', NULL),
(13, '[Scientific health organization with reference to basic health care].', 'Medicinski arhiv', 'A. Smajkić,, G. Žarković', '', '1. 9. 1975.', 0, NULL, 'N/A', '4bbb2fe03c7d3f9fde2c2d61344c71fc3c32862d', '[\"Medicine\"]', NULL),
(14, '[Opinion of patients about the qualities of out-patient hospital service (results of a questionnaire in Sarajevo)].', 'Medicinski arhiv', 'G. Žarković,, S. Popović,, M. Kosorić,, B. Jovov,, D. Kovačević,, S. Gurgurev,, Z. Godinjak,, M. Dzumhur', '', '1975.', 0, NULL, 'N/A', '565811c7e6bc329732016f41f599ca7b1118d918', '[\"Medicine\"]', NULL),
(15, 'Technology in management of medical care.', 'Clinical engineering news', 'J. Busser,, G. Arbona,, M. Arnold,, R. Bridgman,, A. Brodziak,, W. Hobson,, D. Jurela,, J. Maas et al.', '', '1975.', 0, NULL, 'N/A', 'ded2d822c91d8ed2e1d52052a34105558f9d1b45', '[\"Medicine\"]', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
