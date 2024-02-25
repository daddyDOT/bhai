export const names = [
   {label: "John Smith", value: "John Smith"},
  {label: "Emily Johnson", value: "Emily Johnson"},
  {label: "Michael Williams", value: "Michael Williams"},
  {label: "Sarah Brown", value: "Sarah Brown"},
  {label: "David Jones", value: "David Jones"},
  {label: "Jennifer Davis", value: "Jennifer Davis"},
  {label: "Christopher Wilson", value: "Christopher Wilson"},
  {label: "Amanda Taylor", value: "Amanda Taylor"},
  {label: "James Martinez", value: "James Martinez"},
  {label: "Jessica Anderson", value: "Jessica Anderson"}
];

export const randomNames = [
  "John Smith",
  "Emily Johnson",
  "Michael Williams",
  "Sarah Brown",     
];

export const publicCard = [
  {
    id: 1,
    randomNames: ["John Smith","Emily Johnson","Michael Williams","Sarah Brown",],
    date: "1. 3. 2024.",
    title: "Comparison of mechanical and microstructure properties of tungsten alloys for special purposes",
    desc: "Tungsten belongs to group of refractory metal that possess extraordinary resistance to heat and wear and it is the heaviest engineering material. Because of its properties tungsten is used for special purposes. This paper presents the results of mechanical and microstructure research on the example of the characteristic heavy tungsten alloys 91W-6Ni-1.8Fe-1Co and 93W-5Ni-1.6Fe-0.3Co with different Ni/Co ratios. The proper Ni/Co ratio is important to obtain a favorable microstructure and mechanical properties of these materials. The distribution of the W, Ni, Co and Fe elements in tungsten phase and binder phase, which can influence on mechanical properties of tungsten alloys. The SEM analysis and mechanical results show that the alloy, which has Ni/Co within the given limits,  posses a finer microstructure and better mechanical properties that is very important for the maintenance of the quality of tungsten alloys for special purposes.",
    subtitle: "Sustainable Engineering and Innovation"
  },
  {
    id: 2,
    date: "1. 3. 2024.",
    randomNames: ["John Smith","Emily Johnson","Michael Williams","Sarah Brown",],
    title: "Sedentary habits and physical health of secondary school students in online classes during the pandemic COVID-19",
    desc: "Introduction: Due to the declaration of a state of emergency in the country due to the pandemic COVID-19, the education system was changed to online teaching. The implementation of distance education has led to an increased sedentary lifestyle, decreased physical activity, and increased use of information technologies. The purpose of this study was to analyze the sedentary habits of female students and their physical health during a period of restricted physical activity with reference to online instruction.Methods: The research was conducted among the first to third grade students of Secondary School Konjic, 45 days after the implementation of online instruction. Students of general secondary school (N = 83), business school (N = 68), and medical school (N = 55) completed the questionnaire after their parents gave their consent.Results: The total number of students surveyed was 206, with students from all three schools studied participating in online classes for up to 4 hours. Medical school students spend more than 3 hours completing schoolwork, while students at the other two schools spend up to 2 hours. Statistically significant differences in non-use of information technology during free time exist among medical students (p = 0.00). Female medical students reported daily symptoms such as headaches, reactions to the visual organ (dry eye, redness, and tearing), and pain in the fist area (twitching, cramps, and tingling). Statistically significant differences in the occurrence of pain in the upper back and chest girdle occurred in students of business school (p = 0.00) and general high school (p = 0.00) compared to medical students.Conclusion: Medical students who use information technology the most reported headaches, pain in the fist area, and frequent reactions to the sense of sight (dry eye, lacrimation, and redness). Assuming inappropriate positions during prolonged use of technology may contribute to poor posture.",
    subtitle: "Sustainable Engineering and Innovation"
  },
  {
    id: 3,
    randomNames: ["John Smith","Emily Johnson","Michael Williams","Sarah Brown",],
     date: "1. 3. 2024.",
    title: "Development and Validation of the Household Food Safety Questionnaire",
    desc: "Health problems associated with the consumption of foods that do not meet the hygiene and epidemiological standards are not of recent date and have been occurring continuously throughout the history of human existence. The incidence of food poisoning and foodborne transmissible diseases is three times more common in-home kitchens and households. Restaurant poisoning generally involves a larger number of people, whereas a home-based one involves individuals or a small number of people, so its likelihood of identification by the competent authority or public health organizations and services are significantly smaller. The development of the household food safety questionnaire (HFSQ) for the general population went through five phases (preparation of the questionnaire, distribution of the questionnaire to panelists and then the respondents, statistical analysis and the formation of the final version of the validated questionnaire). A total of 58 particles that formed the basis of the questionnaire were divided into four segments: demographic (10), knowledge (17), opinion (14) and food safety practice (17). Overall, the validity of the questionnaire in examining practice, knowledge and attitude was determined with Cronbach's alpha = 0.842. The total number of particles adequate for the questionnaire is 29 questions. This questionnaire is a good instrument for assessing the knowledge, attitudes and practices of food handlers in their households. Keywords— food safety, households, questionnaire, development and validation.",
    subtitle: "Sustainable Engineering and Innovation"
  },
];

export const detailCardData = {
    id: 1,
    randomNames: ["John Smith","Emily Johnson","Michael Williams","Sarah Brown",],
    date: "1. 3. 2024.",
    title: "Comparison of mechanical and microstructure properties of tungsten alloys for special purposes",
    desc: "Tungsten belongs to group of refractory metal that possess extraordinary resistance to heat and wear and it is the heaviest engineering material. Because of its properties tungsten is used for special purposes. This paper presents the results of mechanical and microstructure research on the example of the characteristic heavy tungsten alloys 91W-6Ni-1.8Fe-1Co and 93W-5Ni-1.6Fe-0.3Co with different Ni/Co ratios. The proper Ni/Co ratio is important to obtain a favorable microstructure and mechanical properties of these materials. The distribution of the W, Ni, Co and Fe elements in tungsten phase and binder phase, which can influence on mechanical properties of tungsten alloys. The SEM analysis and mechanical results show that the alloy, which has Ni/Co within the given limits,  posses a finer microstructure and better mechanical properties that is very important for the maintenance of the quality of tungsten alloys for special purposes.",
    subtitle: "Sustainable Engineering and Innovation"
}
export interface Translation {
  content: string;
}

export interface PublicCardInterface {
  id: number;
  authors: string;
  date: string;
  title: string;
  description: string;
  subtitle: string;
  publication_id: string;
  languages: string[];
  bionic_description: string;
  mermaid_code: string;
  translations: {
    Bosnian?: Translation[];
    German?: Translation[];
  };
}